import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceItem {
  amount: string;
  price: string;
}

interface ServiceCardProps {
  title: string;
  items: ServiceItem[];
  note?: string;
}

export const ServiceCard = ({ title, items, note }: ServiceCardProps) => {
  return (
    <Card className="cyber-border backdrop-blur-strong p-4 hover:glow-yellow transition-all duration-300 group">
      <h3 className="text-lg font-bold text-primary text-center mb-3 text-glow">
        {title}
      </h3>
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