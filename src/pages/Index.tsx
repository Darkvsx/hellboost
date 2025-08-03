import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { memo } from "react";
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization";
import battlefieldImage from "@/assets/helldivers-battlefield.jpg";

const Index = memo(() => {
  usePerformanceOptimization();
  
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Optimized Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-30 will-change-auto"
        style={{ 
          backgroundImage: `url(${battlefieldImage})`,
          backgroundAttachment: 'fixed'
        }}
        role="presentation"
        aria-hidden="true"
      />
      
      {/* Animated Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
