import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { CustomOrderCard } from "@/components/CustomOrderCard";
import { useEffect, useRef, useState } from "react";

const CurrencyServices = () => {
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <section 
          ref={sectionRef}
          className="section-spacing section-bg-primary"
        >
          <div className="section-decoration"></div>
          <div className="content-width relative z-10">
            <div className={`section-header transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="section-badge">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">CURRENCY SERVICES</span>
              </div>
              <h2 className="section-title">
                Premium Currency Services
              </h2>
              <p className="section-description">
                Choose from our competitive rates or create a custom order for your specific needs. All services delivered fast and securely.
              </p>
            </div>
            
            <div className={`transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="responsive-grid mb-8">
                <ServiceCard title="MEDALS" items={medalsData} />
                <ServiceCard title="SAMPLES" items={samplesData} />
                <ServiceCard 
                  title="SUPER CREDITS" 
                  items={superCreditsData} 
                  note="Extra SC given free"
                />
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <CustomOrderCard />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CurrencyServices;