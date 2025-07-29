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
    { amount: "500 Medals", price: "$5.00" },
    { amount: "1000 Medals", price: "$10.00" }
  ];

  const samplesData = [
    { amount: "1 Sample", price: "$0.01" },
    { amount: "100 Samples", price: "$1.00" },
    { amount: "200 Samples", price: "$2.00" },
    { amount: "300 Samples", price: "$3.00" }
  ];

  const superCreditsData = [
    { amount: "1 SC", price: "$0.0055" },
    { amount: "500 SC", price: "$2.50" },
    { amount: "1000 SC", price: "$5.00" },
    { amount: "2000 SC", price: "$10.00" }
  ];

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-background to-card/20"
    >
      <div className="container mx-auto px-4 content-width">
        <div className={`text-center mb-12 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="heading-primary text-center mb-4">
            Currency Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Choose from our competitive rates or create a custom order for your specific needs
          </p>
        </div>
        
        <div className={`responsive-grid max-w-7xl mx-auto transition-all duration-800 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <ServiceCard title="MEDALS" items={medalsData} />
          <ServiceCard title="SAMPLES" items={samplesData} />
          <ServiceCard 
            title="SUPER CREDITS" 
            items={superCreditsData} 
            note="Extra SC given free"
          />
          <CustomOrderCard />
        </div>
      </div>
    </section>
  );
};