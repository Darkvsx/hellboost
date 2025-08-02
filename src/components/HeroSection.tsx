import { Button } from "@/components/ui/button";
import { Shield, Zap, Star, ArrowDown } from "lucide-react";
import { memo, useCallback } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { OptimizedImage } from "@/components/OptimizedImage";
import skullIcon from "@/assets/skull-wings-icon.png";

export const HeroSection = memo(() => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleOrderClick = useCallback(() => {
    window.open('https://discord.gg/HCCyw27vm8', '_blank');
  }, []);

  const handleCommunityClick = useCallback(() => {
    window.open('https://discord.gg/helldivers2boost', '_blank');
  }, []);

  return (
    <section ref={elementRef} id="hero" className="pt-20 md:pt-28 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 content-width">
        {/* Main Hero Content */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <OptimizedImage 
              src={skullIcon} 
              alt="Helldivers Boost" 
              className="w-16 h-16 mr-4 animate-gentle-pulse"
              width={64}
              height={64}
              lazy={false}
            />
            <h1 className="heading-primary">
              HELLDIVERS II
              <br />
              <span className="text-highlight">BOOSTING</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
            Boosting service with fast delivery, secure methods, and competitive pricing
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              onClick={handleOrderClick}
            >
              Start Your Order
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="btn-secondary text-lg px-8 py-4"
              onClick={handleCommunityClick}
            >
              Join Community
            </Button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className={`responsive-grid max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="clean-card text-center group">
            <Zap className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="heading-secondary mb-3">Fast Delivery</h3>
            <p className="text-muted-foreground">Orders completed efficiently within minutes, not days</p>
          </div>
          
          <div className="clean-card text-center group">
            <Shield className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="heading-secondary mb-3">100% Secure</h3>
            <p className="text-muted-foreground">Your account safety is our top priority</p>
          </div>
          
          <div className="clean-card text-center group">
            <Star className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="heading-secondary mb-3">Elite Service</h3>
            <p className="text-muted-foreground">Experienced team with consistent results</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center">
          <button 
            onClick={() => scrollToSection('pricing')}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 animate-gentle-pulse"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';