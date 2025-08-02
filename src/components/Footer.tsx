import { Button } from "@/components/ui/button";
import { MessageCircle, Ticket, ExternalLink } from "lucide-react";
import skullIcon from "@/assets/skull-wings-icon.png";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-card/30 to-card/60 border-t border-primary/30 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/10 rounded-full blur-md animate-pulse delay-500" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-20">
          <div className="cyber-border backdrop-blur-strong p-10 rounded-xl max-w-5xl mx-auto glow-yellow relative group hover:scale-[1.02] transition-all duration-500">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-glow animate-pulse">
                READY TO DOMINATE THE GALAXY?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
                Join thousands of satisfied Helldivers who trust us with their progression
              </p>
              <div className="flex items-center justify-center gap-2 mb-8 text-sm text-primary/80">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>⚡ Lightning Fast Delivery</span>
                <div className="w-1 h-4 bg-primary/30 mx-2" />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                <span>🛡️ 100% Safe & Secure</span>
                <div className="w-1 h-4 bg-primary/30 mx-2" />
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-500" />
                <span>👥 24/7 Support</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="gradient-primary text-lg px-10 py-5 glow-yellow hover:scale-110 transition-all duration-300 font-bold shadow-2xl hover:shadow-primary/30"
                  onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
                >
                  <Ticket className="w-6 h-6 mr-3 animate-bounce" />
                  OPEN TICKET TO ORDER
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-5 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/20"
                  onClick={() => window.open('https://discord.gg/helldivers2boost', '_blank')}
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  JOIN OUR DISCORD
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">100+</div>
            <div className="text-sm text-muted-foreground">Satisfied Helldivers</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <img 
                  src={skullIcon} 
                  alt="Helldivers Boost" 
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <span className="text-primary font-bold text-xl block tracking-wide">HELLDIVERS BOOST</span>
                <p className="text-sm text-muted-foreground italic">Serving democracy across the galaxy since 2025</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/10"
                onClick={() => window.open('https://www.tiktok.com/@darkvsx6', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                TikTok
              </Button>
              <div className="w-px h-6 bg-primary/30" />
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/10"
                onClick={() => window.open('https://discord.gg/helldivers2boost', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Discord
              </Button>
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2025 RobCat Inc. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Made with ❤️ for the Helldiver community
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};