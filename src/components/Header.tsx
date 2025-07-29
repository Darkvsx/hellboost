import { Button } from "@/components/ui/button";
import { MessageCircle, Ticket, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import skullIcon from "@/assets/skull-wings-icon.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-strong border-b border-primary/30 py-2' : 'backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => scrollToSection('hero')}
          >
            <img src={skullIcon} alt="Helldivers Boost" className="w-8 h-8 md:w-10 md:h-10 float" />
            <h1 className="text-lg md:text-xl font-bold text-primary text-glow">HELLDIVERS BOOST</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Currency Services
            </button>
            <button 
              onClick={() => scrollToSection('leveling')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Leveling
            </button>
            <button 
              onClick={() => scrollToSection('bundles')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Bundles
            </button>
          </nav>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => window.open('https://discord.gg/helldivers2boost', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              JOIN DISCORD
            </Button>
            <Button 
              size="sm" 
              className="gradient-primary hover:glow-yellow transition-all hover:scale-105"
              onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
            >
              <Ticket className="w-4 h-4 mr-2" />
              ORDER NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 backdrop-blur-strong rounded-lg border border-primary/20 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Currency Services
              </button>
              <button 
                onClick={() => scrollToSection('leveling')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Leveling
              </button>
              <button 
                onClick={() => scrollToSection('bundles')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Bundles
              </button>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all w-full"
                  onClick={() => window.open('https://discord.gg/helldivers2boost', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  JOIN DISCORD
                </Button>
                <Button 
                  size="sm" 
                  className="gradient-primary hover:glow-yellow transition-all w-full"
                  onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
                >
                  <Ticket className="w-4 h-4 mr-2" />
                  ORDER NOW
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};