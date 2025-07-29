import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <Card className="cyber-border backdrop-blur-strong p-4 hover:glow-yellow transition-all duration-300 group">
      <div className="flex items-center justify-center mb-3">
        <IconComponent className="w-6 h-6 text-primary mr-2" />
        <h3 className="text-lg font-bold text-primary text-center text-glow">
          {title}
        </h3>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center text-sm">
            <span className="text-foreground/90">{item.amount}</span>
            <span className="price-highlight font-bold">{item.price}</span>
          </div>
        ))}
      </div>
      {note && (
        <p className="text-xs text-muted-foreground mt-3 text-center italic leading-tight">
          {note}
        </p>
      )}
    </Card>
  );
};