import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BundleCardProps {
  title: string;
  superCredits: string;
  medals: string;
  samples: string;
  price: string;
}

export const BundleCard = ({ title, superCredits, medals, samples, price }: BundleCardProps) => {
  return (
    <Card className="cyber-border backdrop-blur-strong p-4 hover:glow-yellow transition-all duration-300 text-center group">
      <h3 className="text-lg font-bold text-primary mb-3 text-glow">
        {title}
      </h3>
      <div className="space-y-1 mb-4 text-sm">
        <div className="text-foreground/90">
          <span className="text-accent font-semibold">{superCredits}</span> SC
        </div>
        <div className="text-foreground/90">
          <span className="text-accent font-semibold">{medals}</span> Medals
        </div>
        <div className="text-foreground/90">
          <span className="text-accent font-semibold">{samples}</span> Samples
        </div>
      </div>
      <div className="text-2xl font-bold price-highlight mb-3">
        {price}
      </div>
      <Button size="sm" className="w-full gradient-primary hover:scale-105 transition-transform font-bold text-xs">
        Purchase
      </Button>
    </Card>
  );
};