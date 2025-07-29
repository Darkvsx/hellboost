import { Button } from "@/components/ui/button";
import { MessageCircle, Ticket } from "lucide-react";
import skullIcon from "@/assets/skull-wings-icon.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-strong border-b border-primary/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={skullIcon} alt="Helldivers Boost" className="w-10 h-10 float" />
            <h1 className="text-xl font-bold text-primary text-glow">HELLDIVERS BOOST</h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="cyber" 
              size="sm" 
              className="gradient-primary hover:glow-yellow transition-all"
              onClick={() => window.open('https://discord.gg/helldivers2boost', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              JOIN DISCORD
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
            >
              <Ticket className="w-4 h-4 mr-2" />
              OPEN TICKET
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};