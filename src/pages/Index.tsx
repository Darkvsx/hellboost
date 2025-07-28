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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${battlefieldImage})` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold text-primary mb-8 text-glow">
              HELLDIVERS II BOOSTING SERVICE
            </h1>
            
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-4xl font-bold text-primary text-glow">FAST</div>
              <img src={skullIcon} alt="Elite Service" className="w-24 h-24" />
              <div className="text-4xl font-bold text-primary text-glow">SAFE</div>
            </div>
          </div>
        </section>

        {/* Service Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <ServiceCard title="MEDALS" items={medalsData} />
              <ServiceCard title="SAMPLES" items={samplesData} />
              <ServiceCard 
                title="SUPER CREDITS" 
                items={superCreditsData} 
                note="Extra Super Credits will be given at no extra cost"
              />
            </div>
          </div>
        </section>

        {/* Custom Orders */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto mb-16">
              <CustomOrderCard />
            </div>
          </div>
        </section>

        {/* Bundles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary text-center mb-12 text-glow">
              BUNDLES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Footer Call to Action */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <Button variant="cyber" size="lg" className="text-xl px-12 py-4">
              GET STARTED NOW
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
