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
      className="py-16 md:py-24 bg-gradient-to-b from-card/20 to-background"
    >
      <div className="container mx-auto px-4 content-width">
        <div className={`text-center mb-12 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="heading-primary text-center mb-4">
            Leveling Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Professional leveling from 1 to 150. Choose your pace: Standard, Advanced, or Express delivery.
          </p>
        </div>
        
        <div className={`responsive-grid max-w-6xl mx-auto transition-all duration-800 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <ServiceCard 
            title="STANDARD LEVELING" 
            items={levelingPackages}
            note="2-4 days delivery"
          />
          <ServiceCard 
            title="ADVANCED LEVELING" 
            items={advancedLeveling}
            note="3-5 days delivery"
          />
          <ServiceCard 
            title="EXPRESS LEVELING" 
            items={expressLeveling}
            note="24-48h rush delivery"
          />
        </div>

        <div className={`text-center mt-12 transition-all duration-800 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-card border border-border rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-foreground font-medium mb-2">
              ⚡ Professional automation tools ensure fast and efficient progression
            </p>
            <p className="text-sm text-muted-foreground">
              All services are completed with advanced automation techniques for optimal efficiency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};