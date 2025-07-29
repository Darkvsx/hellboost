import { Button } from "@/components/ui/button";
import { MessageCircle, Ticket, Shield, Clock, Star } from "lucide-react";
import skullIcon from "@/assets/skull-wings-icon.png";

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-primary/20 py-16">
      <div className="container mx-auto px-4">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <div className="cyber-border backdrop-blur-strong p-8 rounded-lg max-w-4xl mx-auto glow-yellow">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-glow">
              READY TO DOMINATE THE GALAXY?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of satisfied Helldivers who trust us with their progression
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-lg px-8 py-4 glow-yellow hover:scale-105 transition-transform font-bold"
                onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
              >
                <Ticket className="w-5 h-5 mr-2" />
                OPEN TICKET TO ORDER
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 transition-all"
                onClick={() => window.open('https://discord.gg/helldivers2boost', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                JOIN OUR DISCORD
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-lg text-primary mb-2">24/7 SUPPORT</h3>
            <p className="text-muted-foreground">Always available when you need us</p>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-lg text-primary mb-2">SECURE PROCESS</h3>
            <p className="text-muted-foreground">Your account is 100% safe with us</p>
          </div>
          <div className="text-center">
            <Star className="w-12 h-12 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-lg text-primary mb-2">5-STAR SERVICE</h3>
            <p className="text-muted-foreground">Rated excellent by our customers</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={skullIcon} alt="Helldivers Boost" className="w-8 h-8" />
            <span className="text-primary font-bold text-lg">HELLDIVERS BOOST</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 RobCat Inc. 
            Serving democracy across the galaxy.
          </p>
        </div>
      </div>
    </footer>
  );
};