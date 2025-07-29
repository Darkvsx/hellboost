import { BundleCard } from "@/components/BundleCard";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

export const BundlesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="bundles" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-r from-background via-card/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <Badge variant="outline" className="border-primary text-primary px-4 py-2 text-sm md:text-base animate-pulse">
              BEST VALUE
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6 text-glow">
            BUNDLE PACKAGES
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Save more with our carefully crafted bundle deals designed for different play styles
          </p>
        </div>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="transform hover:scale-105 transition-all duration-300">
            <BundleCard
              title="SCOUT"
              superCredits="500"
              medals="250"
              samples="100"
              price="$5"
            />
          </div>
          <div className="transform hover:scale-105 transition-all duration-300 delay-100">
            <BundleCard
              title="TROOPER"
              superCredits="1000"
              medals="1000"
              samples="300"
              price="$15"
            />
          </div>
          <div className="transform hover:scale-105 transition-all duration-300 delay-200">
            <BundleCard
              title="WARDEN"
              superCredits="2000"
              medals="1500"
              samples="800"
              price="$30"
            />
          </div>
          <div className="transform hover:scale-105 transition-all duration-300 delay-300">
            <BundleCard
              title="DROPPOD"
              superCredits="4000"
              medals="2250"
              samples="1200"
              price="$45"
            />
          </div>
        </div>
      </div>
    </section>
  );
};