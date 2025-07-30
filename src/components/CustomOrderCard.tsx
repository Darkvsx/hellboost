import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings, Star, Calculator, Plus, Minus } from "lucide-react";

export const CustomOrderCard = () => {
  const [medals, setMedals] = useState(0);
  const [samples, setSamples] = useState(0);
  const [superCredits, setSuperCredits] = useState(0);

  // Individual prices
  const medalPrice = 0.01;
  const samplePrice = 0.01;
  const superCreditPrice = 0.0055;

  const totalPrice = (medals * medalPrice) + (samples * samplePrice) + (superCredits * superCreditPrice);

  const handleQuantityChange = (type: 'medals' | 'samples' | 'superCredits', value: string) => {
    const numValue = Math.max(0, parseInt(value) || 0);
    switch (type) {
      case 'medals':
        setMedals(numValue);
        break;
      case 'samples':
        setSamples(numValue);
        break;
      case 'superCredits':
        setSuperCredits(numValue);
        break;
    }
  };

  const adjustQuantity = (type: 'medals' | 'samples' | 'superCredits', adjustment: number) => {
    switch (type) {
      case 'medals':
        setMedals(prev => Math.max(0, prev + adjustment));
        break;
      case 'samples':
        setSamples(prev => Math.max(0, prev + adjustment));
        break;
      case 'superCredits':
        setSuperCredits(prev => Math.max(0, prev + adjustment));
        break;
    }
  };

  const customServices = [
    { amount: "Any Order You Want", price: "Custom" },
    { amount: "Levels", price: "Quote" }, 
    { amount: "Requisitions", price: "Quote" }
  ];

  return (
    <div className="service-card">
      <div className="flex items-center justify-center mb-8">
        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/20">
          <Settings className="w-7 h-7 text-primary" />
        </div>
        <h3 className="heading-tertiary text-center mb-0 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          CUSTOM ORDERS
        </h3>
      </div>
      
      <div className="space-y-4 mb-8">
        {customServices.map((service, index) => (
          <div key={index} className="service-item">
            <span className="text-foreground font-medium text-sm">{service.amount}</span>
            <span className="service-price text-lg">{service.price}</span>
          </div>
        ))}
      </div>

      {/* Quote Builder Section */}
      <div className="border-t border-border/30 pt-6 mb-6">
        <div className="flex items-center justify-center mb-6">
          <Calculator className="w-6 h-6 text-primary mr-2" />
          <h4 className="text-lg font-semibold text-foreground">Quote Builder</h4>
        </div>
        
        <div className="space-y-4">
          {/* Medals */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Medals ($0.01 each)</label>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => adjustQuantity('medals', -1)}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <Input
                type="number"
                value={medals}
                onChange={(e) => handleQuantityChange('medals', e.target.value)}
                className="text-center"
                min="0"
              />
              <Button
                size="sm"
                variant="outline"
                onClick={() => adjustQuantity('medals', 1)}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Samples */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Samples ($0.01 each)</label>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => adjustQuantity('samples', -1)}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <Input
                type="number"
                value={samples}
                onChange={(e) => handleQuantityChange('samples', e.target.value)}
                className="text-center"
                min="0"
              />
              <Button
                size="sm"
                variant="outline"
                onClick={() => adjustQuantity('samples', 1)}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Super Credits */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Super Credits ($0.0055 each)</label>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => adjustQuantity('superCredits', -1)}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <Input
                type="number"
                value={superCredits}
                onChange={(e) => handleQuantityChange('superCredits', e.target.value)}
                className="text-center"
                min="0"
              />
              <Button
                size="sm"
                variant="outline"
                onClick={() => adjustQuantity('superCredits', 1)}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Total */}
          {totalPrice > 0 && (
            <div className="pt-4 border-t border-border/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-foreground font-medium">Quote Total:</span>
                <span className="text-xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-auto">
        <Button 
          className="btn-primary-gradient w-full group"
          onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
        >
          <Star className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
          {totalPrice > 0 ? `ORDER QUOTE ($${totalPrice.toFixed(2)})` : 'OPEN A TICKET'}
        </Button>
      </div>
    </div>
  );
};