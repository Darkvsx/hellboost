import { ServiceCard } from "@/components/ServiceCard";
import { useEffect, useRef, useState } from "react";

export const LevelingSection = () => {
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

  const levelingPackages = [
    { amount: "1-10 Levels", price: "$0.50" },
    { amount: "1-25 Levels", price: "$1.25" },
    { amount: "1-50 Levels", price: "$2.50" },
    { amount: "1-75 Levels", price: "$3.75" }
  ];

  const advancedLeveling = [
    { amount: "76-100 Levels", price: "$5.00" },
    { amount: "101-125 Levels", price: "$6.25" },
    { amount: "126-150 Levels", price: "$7.50" },
    { amount: "Custom Range", price: "Quote" }
  ];

  const expressLeveling = [
    { amount: "Express 1-50", price: "$4.50" },
    { amount: "Express 51-100", price: "$8.75" },
    { amount: "Express 101-150", price: "$12.50" },
    { amount: "24h Max Level", price: "$18.75" }
  ];

  return (
    <section 
      id="leveling" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-background via-card/20 to-background"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6 text-glow">
            LEVELING SERVICES
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional leveling from 1 to 150. Choose your pace: Standard, Advanced, or Express delivery.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="transform hover:scale-105 transition-all duration-500">
            <ServiceCard 
              title="STANDARD LEVELING" 
              items={levelingPackages}
              note="2-4 days delivery"
            />
          </div>
          <div className="transform hover:scale-105 transition-all duration-500 delay-100">
            <ServiceCard 
              title="ADVANCED LEVELING" 
              items={advancedLeveling}
              note="3-5 days delivery"
            />
          </div>
          <div className="transform hover:scale-105 transition-all duration-500 delay-200">
            <ServiceCard 
              title="EXPRESS LEVELING" 
              items={expressLeveling}
              note="24-48h rush delivery"
            />
          </div>
        </div>

        <div className={`text-center mt-8 md:mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-sm text-muted-foreground mb-4">
            Professional automation tools ensure fast and efficient progression
          </p>
          <p className="text-xs text-muted-foreground">
            * All services are completed with advanced automation techniques for optimal efficiency
          </p>
        </div>
      </div>
    </section>
  );
};