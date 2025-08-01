import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, DollarSign, CreditCard, ShoppingCart, Clock, ChevronDown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import battlefieldImage from "@/assets/helldivers-battlefield.jpg";

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqData = [
    {
      id: "safety",
      icon: Shield,
      question: "Is this service safe for my account?",
      answer: (
        <div className="space-y-3">
          <p>
            Yes, our service is completely safe. We use legitimate methods and experienced players 
            to complete your orders. We never use cheats, hacks, or any methods that violate the game's 
            terms of service.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
            <li>All work done by human players</li>
            <li>No third-party software or cheats</li>
            <li>We follow all game rules and guidelines</li>
            <li>No account sharing required</li>
          </ul>
        </div>
      )
    },
    {
      id: "process",
      icon: Clock,
      question: "How does the boosting process work?",
      answer: (
        <div className="space-y-3">
          <p>Our process is simple and transparent:</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-foreground/80">
            <li><strong>Order Placement:</strong> Choose your service and place an order</li>
            <li><strong>Contact:</strong> We'll reach out via Discord within 30 minutes</li>
            <li><strong>Coordination:</strong> Schedule the boosting session at your convenience</li>
            <li><strong>Completion:</strong> Our professionals complete your order efficiently</li>
            <li><strong>Delivery:</strong> Receive your boosted account and confirmation</li>
          </ol>
        </div>
      )
    },
    {
      id: "payment",
      icon: CreditCard,
      question: "What payment methods do you accept?",
      answer: (
        <div className="space-y-3">
          <p>We accept various secure payment methods:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
            <li>PayPal (most popular)</li>
            <li>Cryptocurrency (Bitcoin, Ethereum)</li>
            <li>Credit/Debit Cards</li>
            <li>Bank transfers</li>
          </ul>
          <p className="text-sm text-foreground/80">
            All payments are processed through secure, encrypted channels to protect your financial information.
          </p>
        </div>
      )
    },
    {
      id: "time",
      icon: Clock,
      question: "How long does delivery take?",
      answer: (
        <div className="space-y-3">
          <p>Delivery times vary depending on the service:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
            <li><strong>Currency Services:</strong> 1-6 hours</li>
            <li><strong>Leveling:</strong> 12-48 hours depending on levels</li>
            <li><strong>Custom Orders:</strong> Discussed during consultation</li>
          </ul>
          <p className="text-sm text-foreground/80">
            We always provide realistic timeframes and keep you updated on progress.
          </p>
        </div>
      )
    },
    {
      id: "custom",
      icon: ShoppingCart,
      question: "Can I get a custom service not listed?",
      answer: (
        <div className="space-y-3">
          <p>
            Absolutely! We offer custom services for any Helldivers 2 related needs. 
            Simply contact us on Discord with your requirements.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
            <li>Custom medal amounts</li>
            <li>Specific sample quantities</li>
            <li>Special challenges or achievements</li>
            <li>Bulk orders with discounts</li>
          </ul>
        </div>
      )
    },
    {
      id: "pricing",
      icon: DollarSign,
      question: "How is pricing determined?",
      answer: (
        <div className="space-y-3">
          <p>Our pricing is competitive and transparent:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
            <li><strong>Medals:</strong> $0.01 per medal</li>
            <li><strong>Samples:</strong> $0.01 per sample</li>
            <li><strong>Super Credits:</strong> $0.0055 per credit</li>
            <li><strong>Leveling:</strong> Based on current and target level</li>
          </ul>
          <p className="text-sm text-foreground/80">
            Bulk orders and bundles receive automatic discounts. No hidden fees ever.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${battlefieldImage})` }}
      />
      
      {/* Animated Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        <section
          ref={sectionRef}
          className={`py-32 px-4 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            {/* Back Button */}
            <div className="mb-8">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </div>

            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="heading-primary mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                FREQUENTLY ASKED QUESTIONS
              </h1>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Everything you need to know about our Helldivers 2 boosting services. 
                Can't find your answer? Contact us on Discord!
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqData.map((item, index) => {
                const Icon = item.icon;
                const isExpanded = expandedItems.includes(item.id);
                
                return (
                  <div
                    key={item.id}
                    className={`group transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="faq-card">
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="w-full flex items-center justify-between p-6 text-left transition-all duration-300 hover:bg-primary/5 rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/20">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {item.question}
                          </h3>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-primary transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded 
                            ? 'max-h-96 opacity-100 pb-6' 
                            : 'max-h-0 opacity-0 pb-0'
                        }`}
                      >
                        <div className="px-6 text-foreground/90 leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-foreground/80 mb-6">
                Our support team is available 24/7 on Discord to help you with any questions or concerns.
              </p>
              <Button 
                className="btn-primary-gradient group"
                onClick={() => window.open('https://discord.gg/HCCyw27vm8', '_blank')}
              >
                Contact Support
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default FAQ;