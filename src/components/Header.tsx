import { Button } from "@/components/ui/button";
import { MessageCircle, Ticket, Menu, X, Coins, TrendingUp, Package, HelpCircle } from "lucide-react";
import { useState, useEffect, useCallback, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { OptimizedImage } from "@/components/OptimizedImage";
import skullIcon from "@/assets/skull-wings-icon.png";

export const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = useCallback((path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  }, [navigate]);

  const navigateToFAQ = useCallback(() => {
    navigate('/faq');
    setIsMobileMenuOpen(false);
  }, [navigate]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleDiscordClick = useCallback(() => {
    window.open('https://discord.gg/helldivers2boost', '_blank');
  }, []);

  const handleOrderClick = useCallback(() => {
    window.open('https://discord.gg/HCCyw27vm8', '_blank');
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5 py-3' 
        : 'bg-background/80 backdrop-blur-md py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group transition-all duration-300"
            onClick={() => navigateToPage('/')}
          >
            <div className="relative">
              <OptimizedImage 
                src={skullIcon} 
                alt="Helldivers Boost" 
                className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300"
                width={40}
                height={40}
                lazy={false}
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative">
              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                HELLDIVERS BOOST
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigateToPage('/currency-services')}
              className="group flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 font-medium relative"
            >
              <Coins className="w-4 h-4 transition-transform group-hover:scale-110" />
              Currency Services
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => navigateToPage('/leveling')}
              className="group flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 font-medium relative"
            >
              <TrendingUp className="w-4 h-4 transition-transform group-hover:scale-110" />
              Leveling
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => navigateToPage('/bundles')}
              className="group flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 font-medium relative"
            >
              <Package className="w-4 h-4 transition-transform group-hover:scale-110" />
              Bundles
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={navigateToFAQ}
              className="group flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 font-medium relative"
            >
              <HelpCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
              FAQ
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
          </nav>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              onClick={handleDiscordClick}
            >
              <MessageCircle className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              JOIN DISCORD
            </Button>
            <Button 
              size="sm" 
              className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              onClick={handleOrderClick}
            >
              <Ticket className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              ORDER NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110"
            onClick={toggleMobileMenu}
          >
            <div className="relative">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
        } overflow-hidden`}>
          <div className="p-4 bg-card/90 backdrop-blur-xl rounded-lg border border-primary/20 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => navigateToPage('/currency-services')}
                className="group flex items-center gap-3 text-left text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/5"
              >
                <Coins className="w-4 h-4 transition-transform group-hover:scale-110" />
                Currency Services
              </button>
              <button 
                onClick={() => navigateToPage('/leveling')}
                className="group flex items-center gap-3 text-left text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/5"
              >
                <TrendingUp className="w-4 h-4 transition-transform group-hover:scale-110" />
                Leveling
              </button>
              <button 
                onClick={() => navigateToPage('/bundles')}
                className="group flex items-center gap-3 text-left text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/5"
              >
                <Package className="w-4 h-4 transition-transform group-hover:scale-110" />
                Bundles
              </button>
              <button 
                onClick={navigateToFAQ}
                className="group flex items-center gap-3 text-left text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/5"
              >
                <HelpCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                FAQ
              </button>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full"
                  onClick={handleDiscordClick}
                >
                  <MessageCircle className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                  JOIN DISCORD
                </Button>
                <Button 
                  size="sm" 
                  className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground transition-all duration-300 w-full"
                  onClick={handleOrderClick}
                >
                  <Ticket className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                  ORDER NOW
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';