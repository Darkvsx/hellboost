import { Button } from "@/components/ui/button";
import { MessageCircle, Ticket, Menu, X, Coins, TrendingUp, Package, HelpCircle, User, LogIn } from "lucide-react";
import { useState, useEffect, useCallback, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { OptimizedImage } from "@/components/OptimizedImage";
import { useAuth } from "@/hooks/useAuth";
import CartIcon from "@/components/CartIcon";
import skullIcon from "@/assets/skull-wings-icon.png";

export const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, userRole } = useAuth();
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
            {user && <CartIcon />}
            {user ? (
              <Button 
                variant="outline" 
                size="sm"
                className="group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => navigateToPage(userRole === 'admin' ? '/admin-panel' : '/user-panel')}
              >
                <User className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                {userRole === 'admin' ? 'ADMIN PANEL' : 'USER PANEL'}
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="sm"
                className="group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => navigateToPage('/auth')}
              >
                <LogIn className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                SIGN IN
              </Button>
            )}
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
            className="md:hidden p-3 text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
        } overflow-hidden`}>
          <div className="p-6 bg-card/95 backdrop-blur-xl rounded-2xl border border-primary/30 shadow-2xl shadow-primary/10">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => navigateToPage('/currency-services')}
                className="group flex items-center gap-4 text-left text-foreground hover:text-primary transition-all duration-300 font-medium py-4 px-4 rounded-xl hover:bg-primary/10 active:bg-primary/15 min-h-[56px]"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Coins className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
                <span className="text-base">Currency Services</span>
              </button>
              <button 
                onClick={() => navigateToPage('/leveling')}
                className="group flex items-center gap-4 text-left text-foreground hover:text-primary transition-all duration-300 font-medium py-4 px-4 rounded-xl hover:bg-primary/10 active:bg-primary/15 min-h-[56px]"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
                <span className="text-base">Leveling</span>
              </button>
              <button 
                onClick={() => navigateToPage('/bundles')}
                className="group flex items-center gap-4 text-left text-foreground hover:text-primary transition-all duration-300 font-medium py-4 px-4 rounded-xl hover:bg-primary/10 active:bg-primary/15 min-h-[56px]"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Package className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
                <span className="text-base">Bundles</span>
              </button>
              <button 
                onClick={navigateToFAQ}
                className="group flex items-center gap-4 text-left text-foreground hover:text-primary transition-all duration-300 font-medium py-4 px-4 rounded-xl hover:bg-primary/10 active:bg-primary/15 min-h-[56px]"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <HelpCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
                <span className="text-base">FAQ</span>
              </button>
              <div className="flex flex-col space-y-3 pt-6 border-t border-border/50 mt-4">
                <Button 
                  variant="outline" 
                  className="group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full h-12 text-base font-medium"
                  onClick={handleDiscordClick}
                >
                  <MessageCircle className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
                  JOIN DISCORD
                </Button>
                <Button 
                  className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground transition-all duration-300 w-full h-12 text-base font-medium hover:shadow-lg hover:shadow-primary/25"
                  onClick={handleOrderClick}
                >
                  <Ticket className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
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