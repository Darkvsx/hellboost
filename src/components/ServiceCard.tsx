import { Card } from "@/components/ui/card";
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
    <Card className="clean-card h-full">
      <div className="flex items-center justify-center mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground text-center">
          {title}
        </h3>
      </div>
      
      <div className="space-y-4 mb-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
            <span className="text-foreground font-medium">{item.amount}</span>
            <span className="text-highlight font-bold text-lg">{item.price}</span>
          </div>
        ))}
      </div>
      
      {note && (
        <div className="mt-auto pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground text-center italic">
            {note}
          </p>
        </div>
      )}
    </Card>
  );
};