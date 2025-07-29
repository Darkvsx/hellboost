import { ServiceCard } from "@/components/ServiceCard";
import { CustomOrderCard } from "@/components/CustomOrderCard";

export const PricingSection = () => {
  const medalsData = [
    { amount: "1 Medal", price: "$0.01" },
    { amount: "250 Medals", price: "$2.50" },
    { amount: "500 Medals", price: "$5" },
    { amount: "1000 Medals", price: "$10" }
  ];

  const samplesData = [
    { amount: "1 Sample", price: "$0.01" },
    { amount: "100 Samples", price: "$1" },
    { amount: "200 Samples", price: "$2" },
    { amount: "300 Samples", price: "$3" }
  ];

  const superCreditsData = [
    { amount: "1 SC", price: "$0.0055" },
    { amount: "500 SC", price: "$2.50" },
    { amount: "1000 SC", price: "$5" },
    { amount: "2000 SC", price: "$10" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-glow">
            PRICING & SERVICES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our competitive rates or create a custom order for your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <ServiceCard title="MEDALS" items={medalsData} />
          <ServiceCard title="SAMPLES" items={samplesData} />
          <ServiceCard 
            title="SUPER CREDITS" 
            items={superCreditsData} 
            note="Extra SC given free"
          />
          <CustomOrderCard />
        </div>
      </div>
    </section>
  );
};