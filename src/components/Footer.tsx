import { Button } from "@/components/ui/button";
import { MessageCircle, Ticket, ExternalLink } from "lucide-react";
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

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="flex items-center space-x-3">
              <img src={skullIcon} alt="Helldivers Boost" className="w-8 h-8" />
              <div>
                <span className="text-primary font-bold text-lg block">HELLDIVERS BOOST</span>
                <p className="text-xs text-muted-foreground">Serving democracy across the galaxy</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => window.open('https://www.tiktok.com/@darkvsx6', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                TikTok
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => window.open('https://discord.gg/helldivers2boost', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Discord
              </Button>
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-xs text-muted-foreground">
                © 2025 RobCat Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};