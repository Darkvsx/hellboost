import { Card } from "@/components/ui/card";
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
    <Card className="clean-card h-full">
      <div className="flex items-center justify-center mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
          <Settings className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground text-center">
          CUSTOM ORDERS
        </h3>
      </div>
      
      <div className="space-y-4 mb-6">
        {customServices.map((service, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
            <span className="text-foreground font-medium">{service.amount}</span>
            <span className="text-highlight font-bold text-lg">{service.price}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-auto">
        <Button 
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
        >
          <Star className="w-4 h-4 mr-2" />
          OPEN A TICKET
        </Button>
      </div>
    </Card>
  );
};