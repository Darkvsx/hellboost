import { Button } from "@/components/ui/button";
import { Settings, Star } from "lucide-react";

export const CustomOrderCard = () => {
  const customServices = [
    { amount: "Any Order You Want", price: "Custom" },
    { amount: "Samples", price: "Quote" },
    { amount: "Levels", price: "Quote" }, 
    { amount: "Requisitions", price: "Quote" },
    { amount: "Medals", price: "Quote" }
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
      
      <div className="mt-auto">
        <Button 
          className="btn-primary-gradient w-full group"
          onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
        >
          <Star className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
          OPEN A TICKET
        </Button>
      </div>
    </div>
  );
};