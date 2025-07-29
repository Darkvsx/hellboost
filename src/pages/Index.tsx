import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { LevelingSection } from "@/components/LevelingSection";
import { BundlesSection } from "@/components/BundlesSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import battlefieldImage from "@/assets/helldivers-battlefield.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${battlefieldImage})` }}
      />
      
      {/* Animated Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <PricingSection />
        <LevelingSection />
        <BundlesSection />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
