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
    <Card className="cyber-border bg-card/80 backdrop-blur-strong p-6 hover:glow-yellow transition-all duration-300">
      <h3 className="text-2xl font-bold text-primary text-center mb-6 text-glow">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b border-border/30 pb-2">
            <span className="text-foreground font-medium">{item.amount}</span>
            <span className="text-primary font-bold text-lg">{item.price}</span>
          </div>
        ))}
      </div>
      {note && (
        <p className="text-sm text-muted-foreground mt-4 text-center italic">
          {note}
        </p>
      )}
    </Card>
  );
};