import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const CustomOrderCard = () => {
  const customServices = [
    "Any Order You Want",
    "Samples",
    "Levels", 
    "Requisitions",
    "Medals"
  ];

  return (
    <Card className="cyber-border bg-card/90 backdrop-blur-strong p-8 hover:glow-yellow transition-all duration-300">
      <h2 className="text-3xl font-bold text-primary text-center mb-6 text-glow">
        CUSTOM
      </h2>
      <div className="space-y-4 mb-8">
        {customServices.map((service, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Check className="text-primary w-5 h-5" />
            <span className="text-foreground font-medium">{service}</span>
          </div>
        ))}
      </div>
      <Button className="w-full gradient-primary hover:scale-105 transition-transform font-bold text-lg py-3">
        OPEN A TICKET
      </Button>
    </Card>
  );
};