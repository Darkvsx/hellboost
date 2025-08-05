import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

interface CartItem {
  id?: string;
  item_type: 'medals' | 'samples' | 'superCredits';
  quantity: number;
  unit_price: number;
  created_at?: string;
  updated_at?: string;
  user_id?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => Promise<void>;
  updateQuantity: (itemType: string, quantity: number) => Promise<void>;
  removeFromCart: (itemType: string) => Promise<void>;
  clearCart: () => Promise<void>;
  getTotalPrice: () => number;
  getItemCount: () => number;
  loading: boolean;
  checkout: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchCartItems();
    } else {
      setCartItems([]);
    }
  }, [user]);

  const fetchCartItems = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching cart items:', error);
        return;
      }

      setCartItems((data || []) as CartItem[]);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async (item: Omit<CartItem, 'id'>) => {
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to add items to cart',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .upsert({
          user_id: user.id,
          item_type: item.item_type,
          quantity: item.quantity,
          unit_price: item.unit_price,
        })
        .select();

      if (error) {
        toast({
          title: 'Error',
          description: 'Failed to add item to cart',
          variant: 'destructive',
        });
        return;
      }

      await fetchCartItems();
      toast({
        title: 'Added to cart',
        description: `${item.item_type} added to cart successfully`,
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: 'Error',
        description: 'Failed to add item to cart',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (itemType: string, quantity: number) => {
    if (!user) return;

    if (quantity <= 0) {
      await removeFromCart(itemType);
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('user_id', user.id)
        .eq('item_type', itemType);

      if (error) {
        toast({
          title: 'Error',
          description: 'Failed to update quantity',
          variant: 'destructive',
        });
        return;
      }

      await fetchCartItems();
    } catch (error) {
      console.error('Error updating quantity:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (itemType: string) => {
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id)
        .eq('item_type', itemType);

      if (error) {
        toast({
          title: 'Error',
          description: 'Failed to remove item from cart',
          variant: 'destructive',
        });
        return;
      }

      await fetchCartItems();
      toast({
        title: 'Removed from cart',
        description: 'Item removed successfully',
      });
    } catch (error) {
      console.error('Error removing from cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id);

      if (error) {
        toast({
          title: 'Error',
          description: 'Failed to clear cart',
          variant: 'destructive',
        });
        return;
      }

      setCartItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.unit_price * item.quantity), 0);
  };

  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const checkout = async () => {
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to checkout',
        variant: 'destructive',
      });
      return;
    }

    if (cartItems.length === 0) {
      toast({
        title: 'Cart is empty',
        description: 'Add items to cart before checkout',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('paypal-checkout', {
        body: {
          action: 'create_order',
          cartItems: cartItems.map(item => ({
            item_type: item.item_type,
            quantity: item.quantity,
            unit_price: item.unit_price
          }))
        }
      });

      if (error) {
        toast({
          title: 'Checkout failed',
          description: error.message,
          variant: 'destructive',
        });
        return;
      }

      // Redirect to PayPal
      if (data.approvalUrl) {
        window.open(data.approvalUrl, '_blank');
        toast({
          title: 'Redirecting to PayPal',
          description: 'Complete your payment in the new tab',
        });
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: 'Checkout failed',
        description: 'An unexpected error occurred',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
    getItemCount,
    loading,
    checkout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};