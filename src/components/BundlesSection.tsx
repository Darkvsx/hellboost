import { BundleCard } from "@/components/BundleCard";
import { Badge } from "@/components/ui/badge";

export const BundlesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-background via-card/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge variant="outline" className="border-primary text-primary px-4 py-2">
              BEST VALUE
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-glow">
            BUNDLE PACKAGES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Save more with our carefully crafted bundle deals designed for different play styles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <BundleCard
            title="SCOUT"
            superCredits="500"
            medals="250"
            samples="100"
            price="$5"
          />
          <BundleCard
            title="TROOPER"
            superCredits="1000"
            medals="1000"
            samples="300"
            price="$15"
          />
          <BundleCard
            title="WARDEN"
            superCredits="2000"
            medals="1500"
            samples="800"
            price="$30"
          />
          <BundleCard
            title="DROPPOD"
            superCredits="4000"
            medals="2250"
            samples="1200"
            price="$45"
          />
        </div>
      </div>
    </section>
  );
};