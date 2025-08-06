import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    // Get the authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'No authorization header' }),
        { status: 401, headers: corsHeaders }
      )
    }

    // Get user from auth
    const { data: { user }, error: authError } = await supabase.auth.getUser(
      authHeader.replace('Bearer ', '')
    )

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Invalid token' }),
        { status: 401, headers: corsHeaders }
      )
    }

    const { action, orderId, cartItems } = await req.json()

    if (action === 'create_order') {
      // Create PayPal order
      const paypalClientSecret = Deno.env.get('PAYPAL_CLIENT_SECRET')
      if (!paypalClientSecret) {
        throw new Error('PayPal client secret not configured')
      }

      // Calculate total from cart items
      let totalAmount = 0
      for (const item of cartItems) {
        totalAmount += item.unit_price * item.quantity
      }

      // Create order in our database first
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          total_amount: totalAmount,
          status: 'pending'
        })
        .select()
        .single()

      if (orderError) {
        console.error('Error creating order:', orderError)
        throw new Error('Failed to create order')
      }

      // Create order items
      const orderItems = cartItems.map((item: any) => ({
        order_id: order.id,
        item_type: item.item_type,
        quantity: item.quantity,
        unit_price: item.unit_price,
        total_price: item.unit_price * item.quantity
      }))

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems)

      if (itemsError) {
        console.error('Error creating order items:', itemsError)
        throw new Error('Failed to create order items')
      }

      // Create PayPal order
      const paypalOrderData = {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: totalAmount.toFixed(2)
          },
          description: 'Helldivers Currency Purchase'
        }],
        application_context: {
          return_url: `${Deno.env.get('SUPABASE_URL')?.replace('supabase.co', 'supabase.app')}/payment-success`,
          cancel_url: `${Deno.env.get('SUPABASE_URL')?.replace('supabase.co', 'supabase.app')}/payment-cancel`
        }
      }

      const paypalResponse = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${await getPayPalAccessToken(paypalClientSecret)}`,
        },
        body: JSON.stringify(paypalOrderData),
      })

      const paypalOrder = await paypalResponse.json()

      // Update order with PayPal order ID
      await supabase
        .from('orders')
        .update({ paypal_order_id: paypalOrder.id })
        .eq('id', order.id)

      // Clear cart
      await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id)

      return new Response(
        JSON.stringify({ 
          orderId: paypalOrder.id,
          approvalUrl: paypalOrder.links.find((link: any) => link.rel === 'approve')?.href
        }),
        { headers: corsHeaders }
      )

    } else if (action === 'capture_order') {
      const paypalClientSecret = Deno.env.get('PAYPAL_CLIENT_SECRET')
      
      // Capture PayPal payment
      const captureResponse = await fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${await getPayPalAccessToken(paypalClientSecret)}`,
        },
      })

      const captureResult = await captureResponse.json()

      if (captureResult.status === 'COMPLETED') {
        // Update order status
        await supabase
          .from('orders')
          .update({ status: 'completed' })
          .eq('paypal_order_id', orderId)

        return new Response(
          JSON.stringify({ success: true, captureResult }),
          { headers: corsHeaders }
        )
      } else {
        throw new Error('Payment capture failed')
      }
    }

    return new Response(
      JSON.stringify({ error: 'Invalid action' }),
      { status: 400, headers: corsHeaders }
    )

  } catch (error) {
    console.error('PayPal checkout error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: corsHeaders }
    )
  }
})

async function getPayPalAccessToken(clientSecret: string): Promise<string> {
  const clientId = 'AefD8SednJLcqfFDsiO9AetjGEsCMVPYSCp-gX-UmUyJsQvSUHgbhnl39ZJCB14Tq-eXM3kG2Q6aizB8'
  
  const response = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
    body: 'grant_type=client_credentials',
  })

  const data = await response.json()
  return data.access_token
}