import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BundleCard } from "@/components/BundleCard";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const Bundles = () => {
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
                <Badge variant="outline" className="border-primary text-primary px-3 py-1 text-xs font-medium animate-pulse">
                  BEST VALUE
                </Badge>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">BUNDLE PACKAGES</span>
              </div>
              <h2 className="section-title">
                Premium Bundle Deals
              </h2>
              <p className="section-description">
                Save more with our carefully crafted bundle deals designed for different play styles. Maximum value for serious Helldivers.
              </p>
            </div>
            
            <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 transition-all duration-800 delay-300 ${
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Bundles;