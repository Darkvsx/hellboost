import { Button } from "@/components/ui/button";
import { Shield, Zap, Star } from "lucide-react";
import skullIcon from "@/assets/skull-wings-icon.png";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 text-center relative">
      <div className="container mx-auto px-4">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 text-glow leading-tight">
            HELLDIVERS II
            <br />
            <span className="price-highlight">BOOSTING</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Elite boosting services for democracy's finest soldiers. Fast, safe, and reliable.
          </p>
          
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="gradient-primary text-xl px-12 py-6 glow-yellow hover:scale-105 transition-transform font-bold"
              onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
            >
              START YOUR ORDER NOW
            </Button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="cyber-border backdrop-blur-strong p-6 rounded-lg hover:glow-yellow transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <Zap className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-primary mb-2 text-glow">LIGHTNING FAST</h3>
              <p className="text-muted-foreground">Orders completed within hours, not days</p>
            </div>
          </div>
          
          <div className="cyber-border backdrop-blur-strong p-6 rounded-lg hover:glow-yellow transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <img src={skullIcon} alt="Elite Service" className="w-12 h-12 mb-4 float group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-primary mb-2 text-glow">ELITE SERVICE</h3>
              <p className="text-muted-foreground">Professional boosters with proven results</p>
            </div>
          </div>
          
          <div className="cyber-border backdrop-blur-strong p-6 rounded-lg hover:glow-yellow transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-primary mb-2 text-glow">100% SECURE</h3>
              <p className="text-muted-foreground">Your account safety is our top priority</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};