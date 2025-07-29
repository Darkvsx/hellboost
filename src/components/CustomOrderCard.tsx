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
    <Card className="cyber-border backdrop-blur-strong p-4 hover:glow-yellow transition-all duration-300">
      <h2 className="text-xl font-bold text-primary text-center mb-4 text-glow">
        CUSTOM
      </h2>
      <div className="space-y-2 mb-4">
        {customServices.map((service, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm">
            <Check className="text-primary w-4 h-4" />
            <span className="text-foreground/90">{service}</span>
          </div>
        ))}
      </div>
      <Button 
        className="w-full gradient-primary hover:scale-105 transition-transform font-bold text-sm"
        onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
      >
        OPEN A TICKET
      </Button>
    </Card>
  );
};