import { Medal, Atom, Coins, Package, LucideIcon, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";

interface ServiceItem {
  amount: string;
  price: string;
  unitPrice: number;
  quantity: number;
}

interface ServiceCardProps {
  title: string;
  items: ServiceItem[];
  note?: string;
  itemType: 'medals' | 'samples' | 'superCredits';
}

const getIconForTitle = (title: string): LucideIcon => {
  if (title.includes("MEDAL")) return Medal;
  if (title.includes("SAMPLE")) return Atom;
  if (title.includes("CREDIT")) return Coins;
  if (title.includes("LEVELING")) return Package;
  return Package;
};

export const ServiceCard = ({ title, items, note, itemType }: ServiceCardProps) => {
  const IconComponent = getIconForTitle(title);
  const { addToCart, loading } = useCart();
  const { user } = useAuth();
  
  const handleAddToCart = async (item: ServiceItem) => {
    if (!user) {
      window.open('/auth', '_blank');
      return;
    }

    await addToCart({
      item_type: itemType,
      quantity: item.quantity,
      unit_price: item.unitPrice
    });
  };
  
  return (
    <div className="service-card">
      <div className="flex items-center justify-center mb-8">
        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/20">
          <IconComponent className="w-7 h-7 text-primary" />
        </div>
        <h3 className="heading-tertiary text-center mb-0 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>
      
      <div className="space-y-4 mb-8">
        {items.map((item, index) => (
          <div key={index} className="service-item group">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <span className="text-foreground font-medium text-sm">{item.amount}</span>
                <span className="service-price text-lg">{item.price}</span>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleAddToCart(item)}
                disabled={loading}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
              >
                <ShoppingCart className="w-3 h-3 mr-1" />
                {loading ? '...' : 'Add'}
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {note && (
        <div className="mt-auto pt-6 border-t border-border/30">
          <div className="flex items-center justify-center gap-2 text-sm text-primary/80 font-medium">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>{note}</span>
          </div>
        </div>
      )}
    </div>
  );
};