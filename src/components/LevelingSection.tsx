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
    { amount: "1-25 Levels", price: "$2.00" },
    { amount: "1-50 Levels", price: "$3.00" },
    { amount: "1-75 Levels", price: "$4.00" },
    { amount: "Custom Range", price: "Quote" }
  ];

  const advancedLeveling = [
    { amount: "76-100 Levels", price: "$7.50" },
    { amount: "101-125 Levels", price: "$10.00" },
    { amount: "126-150 Levels", price: "$12.50" },
    { amount: "Custom Range", price: "Quote" }
  ];

  const expressLeveling = [
    { amount: "Express 1-50", price: "$5.00" },
    { amount: "Express 51-100", price: "$10.00" },
    { amount: "Express 101-150", price: "$20.00" },
    { amount: "Custom Range", price: "Quote" }
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
            Level Boosting from 1 to 150. Choose your pace: Standard, Advanced, or Express delivery.
          </p>
        </div>
        
        <div className={`responsive-grid max-w-6xl mx-auto transition-all duration-800 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <ServiceCard 
            title="STANDARD LEVELING" 
            items={levelingPackages}
            note="~15 mins delivery"
          />
          <ServiceCard 
            title="ADVANCED LEVELING" 
            items={advancedLeveling}
            note="~30 mins delivery"
          />
          <ServiceCard 
            title="EXPRESS LEVELING" 
            items={expressLeveling}
            note="Blazing fast delivery"
          />
        </div>

        <div className={`text-center mt-12 transition-all duration-800 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-card border border-border rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-foreground font-medium mb-2">
              ⚡ Our tools ensure fast and efficient progression with no account sharing!
            </p>
            <p className="text-sm text-muted-foreground">
              We do not need your login informations to deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};