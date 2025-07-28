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
    <Card className="cyber-border bg-card/90 backdrop-blur-strong p-6 hover:glow-yellow transition-all duration-300 text-center">
      <h3 className="text-xl font-bold text-primary mb-4 text-glow">
        {title}
      </h3>
      <div className="space-y-2 mb-6">
        <div className="text-foreground">
          <span className="text-accent font-semibold">{superCredits}</span> SC
        </div>
        <div className="text-foreground">
          <span className="text-accent font-semibold">{medals}</span> Medals
        </div>
        <div className="text-foreground">
          <span className="text-accent font-semibold">{samples}</span> Samples
        </div>
      </div>
      <div className="text-3xl font-bold text-primary mb-4 text-glow">
        {price}
      </div>
      <Button className="w-full gradient-primary hover:scale-105 transition-transform font-bold">
        Purchase Bundle
      </Button>
    </Card>
  );
};