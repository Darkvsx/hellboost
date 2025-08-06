import { Medal, Atom, Coins, Package, LucideIcon } from "lucide-react";

interface ServiceItem {
  amount: string;
  price: string;
}

interface ServiceCardProps {
  title: string;
  items: ServiceItem[];
  note?: string;
}

const getIconForTitle = (title: string): LucideIcon => {
  if (title.includes("MEDAL")) return Medal;
  if (title.includes("SAMPLE")) return Atom;
  if (title.includes("CREDIT")) return Coins;
  if (title.includes("LEVELING")) return Package;
  return Package;
};

export const ServiceCard = ({ title, items, note }: ServiceCardProps) => {
  const IconComponent = getIconForTitle(title);
  
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
          <div key={index} className="service-item">
            <span className="text-foreground font-medium text-sm">{item.amount}</span>
            <span className="service-price text-lg">{item.price}</span>
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