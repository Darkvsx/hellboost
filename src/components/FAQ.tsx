import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Shield, HelpCircle, CreditCard, ShoppingCart, DollarSign, ChevronDown } from "lucide-react";

export const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

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
      question: "Is This Service Safe?",
      answer: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-lg font-semibold text-green-400">75% Safe, 25% Caution</p>
          </div>
          
          <div className="grid gap-3">
            <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Zero Ban Reports</p>
                <p className="text-sm text-muted-foreground">No confirmed punishments for any clients or boosters</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Account Security</p>
                <p className="text-sm text-muted-foreground">No account wipes or progress loss reported</p>
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-muted/30 border-l-4 border-accent rounded-r-lg">
            <p className="text-sm text-muted-foreground italic">
              While no method is 100% risk-free, our track record speaks for itself.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "process",
      icon: HelpCircle,
      question: "How Does the Boosting Process Work?",
      answer: (
        <div className="space-y-4">
          <p className="text-lg text-foreground font-medium">Simple & Secure Process</p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
              <div>
                <p className="font-semibold text-foreground">Add Me on Helldivers 2</p>
                <p className="text-sm text-muted-foreground">Send a friend request through the game</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">2</div>
              <div>
                <p className="font-semibold text-foreground">Join My Game Session</p>
                <p className="text-sm text-muted-foreground">Simply join when I invite you to play</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-primary/20 rounded-lg">
            <p className="text-center font-medium text-foreground">
              🎮 That's it! No passwords, no account sharing, just pure gaming fun.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "payment",
      icon: CreditCard,
      question: "What Payment Methods Are Accepted?",
      answer: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg">
            <CreditCard className="w-6 h-6 text-blue-400" />
            <div>
              <p className="text-lg font-semibold text-foreground">PayPal Only (Currently)</p>
              <p className="text-sm text-muted-foreground">Secure and trusted payment processing</p>
            </div>
          </div>
          
          <div className="p-4 bg-muted/20 border border-border rounded-lg">
            <p className="text-sm text-muted-foreground mb-2 font-medium">🔧 Coming Soon:</p>
            <p className="text-sm text-muted-foreground">
              More payment options are in development. We're working hard to add alternatives that don't charge massive fees, 
              so we can keep our prices fair and affordable for everyone.
            </p>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-sm text-green-400 font-medium">100% Secure Transactions</p>
          </div>
        </div>
      )
    },
    {
      id: "purchase",
      icon: ShoppingCart,
      question: "How Do I Place an Order?",
      answer: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-foreground">Quick & Easy Ordering</p>
          
          <div className="space-y-3">
            <div className="flex gap-4 p-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-foreground">Open a Ticket</p>
                <p className="text-sm text-muted-foreground">Use the Order channel in our Discord server</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-foreground">Choose Your Service</p>
                <p className="text-sm text-muted-foreground">Select a pre-made package or request a custom order</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-foreground">Confirm & Pay</p>
                <p className="text-sm text-muted-foreground">Review details, complete payment, and we'll start immediately</p>
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
            <p className="text-sm text-center text-foreground font-medium">
              ⚡ Most orders begin within 30 minutes of payment confirmation
            </p>
          </div>
        </div>
      )
    },
    {
      id: "pricing",
      icon: DollarSign,
      question: "Why Are Your Prices So Competitive?",
      answer: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-lg">
            <p className="text-lg font-medium text-foreground mb-2">Fair Pricing Philosophy</p>
            <p className="text-muted-foreground">Gaming services shouldn't cost a fortune. Period.</p>
          </div>
          
          <div className="grid gap-3">
            <div className="flex items-start gap-3 p-3 bg-card/50 border border-border rounded-lg">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5">
                <span className="text-accent-foreground text-xs font-bold">💰</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Honest Value</p>
                <p className="text-sm text-muted-foreground">No inflated prices or hidden fees</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-card/50 border border-border rounded-lg">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                <span className="text-primary-foreground text-xs font-bold">🤝</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Respect Your Budget</p>
                <p className="text-sm text-muted-foreground">Quality service at prices that make sense</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-card/50 border border-border rounded-lg">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-white text-xs font-bold">⚡</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Efficient Service</p>
                <p className="text-sm text-muted-foreground">Lower overhead means better prices for you</p>
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-muted/20 border-l-4 border-primary rounded-r-lg">
            <p className="text-sm text-muted-foreground italic">
              "Boosting shouldn't break the bank. Great service at fair prices – that's our promise."
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-background to-card/20"
    >
      <div className="container mx-auto px-4 content-width">
        <div className={`text-center mb-12 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="heading-primary text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get clear answers to the most common questions about our services
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto space-y-4 transition-all duration-800 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {faqData.map((faq, index) => {
            const IconComponent = faq.icon;
            const isExpanded = expandedItems.includes(faq.id);
            
            return (
              <div
                key={faq.id}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full p-6 text-left transition-all duration-300 hover:bg-primary/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="heading-secondary text-left mb-0">{faq.question}</h3>
                    </div>
                    <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-6 pt-0">
                    <div className="pl-16 prose prose-invert max-w-none">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-800 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-foreground font-medium mb-2">Still have questions?</p>
            <p className="text-muted-foreground">Join our Discord community for real-time support and updates!</p>
          </div>
        </div>
      </div>
    </section>
  );
};