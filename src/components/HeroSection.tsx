import { Button } from "@/components/ui/button";
import { Shield, Zap, Star, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import skullIcon from "@/assets/skull-wings-icon.png";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-20 md:pt-28 pb-12 md:pb-20 text-center relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 w-full">
        {/* Main Hero Content */}
        <div className={`max-w-5xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary mb-4 md:mb-6 text-glow leading-tight">
            HELLDIVERS II
            <br />
            <span className="price-highlight inline-block animate-pulse">BOOSTING</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Elite boosting services for democracy's finest soldiers. Fast, safe, and reliable progression.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
            <Button 
              size="lg" 
              className="gradient-primary text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 glow-yellow hover:scale-105 transition-all duration-300 font-bold"
              onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
            >
              START YOUR ORDER NOW
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 transition-all duration-300"
              onClick={() => window.open('https://discord.gg/helldivers2boost', '_blank')}
            >
              JOIN COMMUNITY
            </Button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="cyber-border backdrop-blur-strong p-6 md:p-8 rounded-lg hover:glow-yellow transition-all duration-500 group hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <Zap className="w-12 h-12 md:w-16 md:h-16 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 text-glow">LIGHTNING FAST</h3>
              <p className="text-muted-foreground leading-relaxed">Orders completed within hours, not days</p>
            </div>
          </div>
          
          <div className="cyber-border backdrop-blur-strong p-6 md:p-8 rounded-lg hover:glow-yellow transition-all duration-500 group hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <img src={skullIcon} alt="Elite Service" className="w-12 h-12 md:w-16 md:h-16 mb-4 float group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 text-glow">ELITE SERVICE</h3>
              <p className="text-muted-foreground leading-relaxed">Professional boosters with proven results</p>
            </div>
          </div>
          
          <div className="cyber-border backdrop-blur-strong p-6 md:p-8 rounded-lg hover:glow-yellow transition-all duration-500 group hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 md:w-16 md:h-16 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 text-glow">100% SECURE</h3>
              <p className="text-muted-foreground leading-relaxed">Your account safety is our top priority</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('pricing')}
            className="animate-bounce hover:scale-105 transition-transform duration-500 p-3 rounded-full bg-primary/10 hover:bg-primary/20"
            style={{ animationDuration: '3s' }}
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
      </div>
    </section>
  );
};