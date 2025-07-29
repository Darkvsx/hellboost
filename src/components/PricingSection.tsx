import { ServiceCard } from "@/components/ServiceCard";
import { CustomOrderCard } from "@/components/CustomOrderCard";
import { useEffect, useRef, useState } from "react";

export const PricingSection = () => {
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

  const medalsData = [
    { amount: "1 Medal", price: "$0.01" },
    { amount: "250 Medals", price: "$2.50" },
    { amount: "500 Medals", price: "$5" },
    { amount: "1000 Medals", price: "$10" }
  ];

  const samplesData = [
    { amount: "1 Sample", price: "$0.01" },
    { amount: "100 Samples", price: "$1" },
    { amount: "200 Samples", price: "$2" },
    { amount: "300 Samples", price: "$3" }
  ];

  const superCreditsData = [
    { amount: "1 SC", price: "$0.0055" },
    { amount: "500 SC", price: "$2.50" },
    { amount: "1000 SC", price: "$5" },
    { amount: "2000 SC", price: "$10" }
  ];

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-background via-card/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6 text-glow">
            CURRENCY SERVICES
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our competitive rates or create a custom order for your specific needs
          </p>
        </div>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="transform hover:scale-105 transition-all duration-300">
            <ServiceCard title="MEDALS" items={medalsData} />
          </div>
          <div className="transform hover:scale-105 transition-all duration-300 delay-100">
            <ServiceCard title="SAMPLES" items={samplesData} />
          </div>
          <div className="transform hover:scale-105 transition-all duration-300 delay-200">
            <ServiceCard 
              title="SUPER CREDITS" 
              items={superCreditsData} 
              note="Extra SC given free"
            />
          </div>
          <div className="transform hover:scale-105 transition-all duration-300 delay-300">
            <CustomOrderCard />
          </div>
        </div>
      </div>
    </section>
  );
};