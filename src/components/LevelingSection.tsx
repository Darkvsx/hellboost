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
      className="section-spacing section-bg-accent"
    >
      <div className="section-decoration"></div>
      <div className="content-width relative z-10">
        <div className={`section-header transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="section-badge">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-accent">LEVEL BOOST SERVICES</span>
          </div>
          <h2 className="section-title">
            Lightning Fast Leveling
          </h2>
          <p className="section-description">
            Level Boosting from 1 to 150. Choose your pace: Standard, Advanced, or Express delivery with professional service and complete account security.
          </p>
        </div>
        
        <div className={`responsive-grid transition-all duration-800 delay-300 ${
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

        <div className={`text-center mt-16 transition-all duration-800 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="info-card max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="heading-tertiary mb-0">Secure & Efficient Process</h3>
            </div>
            <p className="text-foreground font-medium mb-4 text-lg">
              Our advanced tools ensure fast and efficient progression with zero account sharing!
            </p>
            <p className="text-muted-foreground mb-6">
              🔒 We never need your login credentials - your account stays completely secure while we boost your levels.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">100% Safe</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-400 font-medium">No Account Sharing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-purple-400 font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};