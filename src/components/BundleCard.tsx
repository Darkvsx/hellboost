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
    <Card className="clean-card text-center group h-full flex flex-col">
      <h3 className="heading-secondary mb-4">
        {title}
      </h3>
      
      <div className="space-y-3 mb-6 flex-1">
        <div className="bg-primary/10 rounded-lg p-3">
          <span className="text-highlight font-bold text-lg">{superCredits}</span>
          <span className="text-muted-foreground ml-1">Super Credits</span>
        </div>
        <div className="bg-accent/10 rounded-lg p-3">
          <span className="text-accent font-bold text-lg">{medals}</span>
          <span className="text-muted-foreground ml-1">Medals</span>
        </div>
        <div className="bg-secondary/50 rounded-lg p-3">
          <span className="text-foreground font-bold text-lg">{samples}</span>
          <span className="text-muted-foreground ml-1">Samples</span>
        </div>
      </div>
      
      <div className="text-3xl font-bold text-highlight mb-6">
        {price}
      </div>
      
      <Button 
        className="btn-primary w-full text-lg py-3 mt-auto"
        onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
      >
        Purchase Bundle
      </Button>
    </Card>
  );
};