import { Shield, Clock, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const TrustIndicators = () => {
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

  const trustFeatures = [
    {
      icon: Clock,
      title: "24/7 SUPPORT",
      description: "Always available when you need us",
      color: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30"
    },
    {
      icon: Shield,
      title: "SECURE PROCESS",
      description: "Your account is 100% safe with us",
      color: "from-green-500/20 to-green-600/20",
      border: "border-green-500/30"
    },
    {
      icon: Star,
      title: "5-STAR SERVICE",
      description: "Rated excellent by our customers",
      color: "from-yellow-500/20 to-yellow-600/20",
      border: "border-yellow-500/30"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-background to-card/10"
    >
      <div className="container mx-auto px-4 content-width">
        <div className={`text-center mb-12 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="heading-primary text-center mb-4">
            Why Choose Our <span className="text-highlight">Boosting Service</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of Helldivers across the galaxy
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-800 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {trustFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative p-6 rounded-xl bg-gradient-to-br ${feature.color} border ${feature.border} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="heading-secondary text-center mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};