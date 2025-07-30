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
      className="py-16 md:py-24 bg-gradient-to-b from-primary/5 via-background to-card/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 content-width relative z-10">
        <div className={`text-center mb-12 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">LEVEL BOOST SERVICES</span>
          </div>
          <h2 className="heading-primary text-center mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Lightning Fast Leveling
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Level Boosting from 1 to 150. Choose your pace: Standard, Advanced, or Express delivery with professional service.
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
          <div className="bg-gradient-to-r from-card/80 via-card/60 to-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-8 max-w-4xl mx-auto shadow-lg shadow-primary/10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Secure & Efficient Process</h3>
            </div>
            <p className="text-foreground font-medium mb-3">
              Our advanced tools ensure fast and efficient progression with zero account sharing!
            </p>
            <p className="text-muted-foreground">
              🔒 We never need your login credentials - your account stays completely secure while we boost your levels.
            </p>
            <div className="flex items-center justify-center mt-6 gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-400 font-medium">100% Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-blue-400 font-medium">No Account Sharing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-purple-400 font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};