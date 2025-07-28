import { ServiceCard } from "@/components/ServiceCard";
import { BundleCard } from "@/components/BundleCard";
import { CustomOrderCard } from "@/components/CustomOrderCard";
import { Button } from "@/components/ui/button";
import battlefieldImage from "@/assets/helldivers-battlefield.jpg";
import skullIcon from "@/assets/skull-wings-icon.png";

const Index = () => {
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${battlefieldImage})` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Compact Hero Section */}
        <section className="py-12 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-glow">
              HELLDIVERS II BOOSTING
            </h1>
            
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="text-2xl md:text-3xl font-bold text-primary text-glow">FAST</div>
              <img src={skullIcon} alt="Elite Service" className="w-16 h-16 float" />
              <div className="text-2xl md:text-3xl font-bold text-primary text-glow">SAFE</div>
            </div>
          </div>
        </section>

        {/* Compact Service Pricing & Custom Orders */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
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

        {/* Compact Bundles Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6 text-glow">
              BUNDLES
            </h2>
            <div className="bundle-grid max-w-4xl mx-auto">
              <BundleCard
                title="SCOUT"
                superCredits="500"
                medals="250"
                samples="100"
                price="$5"
              />
              <BundleCard
                title="TROOPER"
                superCredits="1000"
                medals="1000"
                samples="300"
                price="$15"
              />
              <BundleCard
                title="WARDEN"
                superCredits="2000"
                medals="1500"
                samples="800"
                price="$30"
              />
              <BundleCard
                title="DROPPOD"
                superCredits="4000"
                medals="2250"
                samples="1200"
                price="$45"
              />
            </div>
          </div>
        </section>

        {/* Compact Footer Call to Action */}
        <section className="py-8 text-center">
          <div className="container mx-auto px-4">
            <Button variant="cyber" size="lg" className="gradient-primary text-lg px-8 py-3 glow-yellow">
              GET STARTED NOW
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
