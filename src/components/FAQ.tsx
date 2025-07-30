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
      question: "Is This Safe?",
      answer: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-foreground">This service is about 75% safe, 25% MAYBE?</p>
          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
            <p className="text-foreground font-medium">✅ Zero reports of punishments for clients or boosters</p>
            <p className="text-foreground font-medium">✅ No bans, no wipes — nothing</p>
          </div>
          <p className="text-muted-foreground">While no method is 100% risk-free, results so far speak for themselves.</p>
        </div>
      )
    },
    {
      id: "process",
      icon: HelpCircle,
      question: "How Does This Work?",
      answer: (
        <div className="space-y-4">
          <div className="bg-primary/5 rounded-lg p-4">
            <ol className="list-decimal list-inside space-y-3 text-foreground">
              <li className="text-lg">Add me on Helldivers 2</li>
              <li className="text-lg">Join my session</li>
            </ol>
          </div>
          <p className="text-muted-foreground text-lg">That's it. No password sharing, no shady steps. Just drop in and play.</p>
        </div>
      )
    },
    {
      id: "payment",
      icon: CreditCard,
      question: "What Payment Methods Do You Accept?",
      answer: (
        <div className="space-y-4">
          <p className="text-foreground font-medium text-lg">PayPal only (for now)</p>
          <div className="bg-accent/10 rounded-lg p-4">
            <p className="text-muted-foreground">Still working on more options that don't take huge fees so I can keep prices low and fair.</p>
          </div>
        </div>
      )
    },
    {
      id: "purchase",
      icon: ShoppingCart,
      question: "How Do I Purchase?",
      answer: (
        <div className="space-y-4">
          <div className="bg-secondary/50 rounded-lg p-4">
            <ol className="list-decimal list-inside space-y-3 text-foreground">
              <li className="text-lg">Open a ticket in Order channel</li>
              <li className="text-lg">Specify if you're buying a pre-made pack or would like a custom order</li>
              <li className="text-lg">After confirming everything is fine with you, we'll proceed to payment & fulfilling your order</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: "pricing",
      icon: DollarSign,
      question: "Why Are Your Prices Lower Than Others?",
      answer: (
        <div className="space-y-4">
          <p className="text-muted-foreground text-lg">Honestly? They should be.</p>
          <div className="space-y-3">
            <p className="text-foreground text-lg">💰 I don't believe simple services should cost a fortune</p>
            <p className="text-foreground text-lg">🤝 I respect your time and money — so I keep prices competitive and fair</p>
          </div>
          <p className="text-muted-foreground">Boosting in Helldivers 2 shouldn't break the bank.</p>
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
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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