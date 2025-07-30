import { Button } from "@/components/ui/button";
import { Coins, Medal, Atom } from "lucide-react";

interface BundleCardProps {
  title: string;
  superCredits: string;
  medals: string;
  samples: string;
  price: string;
}

export const BundleCard = ({ title, superCredits, medals, samples, price }: BundleCardProps) => {
  return (
    <div className="service-card text-center group h-full flex flex-col">
      <div className="mb-8">
        <h3 className="heading-tertiary mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="text-4xl font-bold service-price mb-2">
          {price}
        </div>
        <div className="text-sm text-muted-foreground">Complete Bundle</div>
      </div>
      
      <div className="space-y-4 mb-8 flex-1">
        <div className="service-item group/item">
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4 text-primary" />
            <span className="text-foreground font-medium text-sm">Super Credits</span>
          </div>
          <span className="service-price text-base">{superCredits}</span>
        </div>
        <div className="service-item group/item">
          <div className="flex items-center gap-2">
            <Medal className="w-4 h-4 text-accent" />
            <span className="text-foreground font-medium text-sm">Medals</span>
          </div>
          <span className="service-price text-base">{medals}</span>
        </div>
        <div className="service-item group/item">
          <div className="flex items-center gap-2">
            <Atom className="w-4 h-4 text-primary" />
            <span className="text-foreground font-medium text-sm">Samples</span>
          </div>
          <span className="service-price text-base">{samples}</span>
        </div>
      </div>
      
      <Button 
        className="btn-primary-gradient w-full group/btn mt-auto"
        onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
      >
        <span className="transition-transform group-hover/btn:scale-105">Purchase Bundle</span>
      </Button>
    </div>
  );
};