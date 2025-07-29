import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";
import { Shield, HelpCircle, CreditCard, ShoppingCart, DollarSign } from "lucide-react";

export const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const faqData = [
    {
      id: "safety",
      icon: Shield,
      question: "Is This Safe?",
      answer: (
        <div className="space-y-3">
          <p className="text-muted-foreground">This service is about 75% safe, 25% MAYBE?</p>
          <div className="space-y-2">
            <p className="text-foreground font-medium">As of writing this, there have been ZERO reports of any punishments for clients or boosters.</p>
            <p className="text-foreground font-medium">No bans, no wipe — nothing.</p>
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
        <div className="space-y-3">
          <ol className="list-decimal list-inside space-y-2 text-foreground">
            <li>Add me on Helldivers 2.</li>
            <li>Join my session.</li>
          </ol>
          <p className="text-muted-foreground">That's it. No password sharing, no shady steps. Just drop in and play.</p>
        </div>
      )
    },
    {
      id: "payment",
      icon: CreditCard,
      question: "What Payment Methods Do You Accept?",
      answer: (
        <div className="space-y-3">
          <p className="text-foreground font-medium">PayPal only (for now).</p>
          <p className="text-muted-foreground">Still working on more options that don't take huge fees so I can keep prices low and fair.</p>
        </div>
      )
    },
    {
      id: "purchase",
      icon: ShoppingCart,
      question: "How Do I Purchase?",
      answer: (
        <div className="space-y-3">
          <ol className="list-decimal list-inside space-y-2 text-foreground">
            <li>Open a ticket in Order channel</li>
            <li>Specify if you're buying a pre-made pack or would like a custom order</li>
            <li>After confirming that everything is fine with you, we'll proceed to payment & fulfilling your order</li>
          </ol>
        </div>
      )
    },
    {
      id: "pricing",
      icon: DollarSign,
      question: "Why Are Your Prices Lower Than Others?",
      answer: (
        <div className="space-y-3">
          <p className="text-muted-foreground">Honestly? They should be.</p>
          <p className="text-foreground">I don't believe simple services should cost a fortune.</p>
          <p className="text-foreground">I respect your time and money — so I keep prices competitive and fair.</p>
          <p className="text-muted-foreground">Boosting in Helldivers 2 shouldn't break the bank.</p>
        </div>
      )
    }
  ];

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-background via-card/10 to-background"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6 text-glow">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our services
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Card className="cyber-border backdrop-blur-strong p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => {
                const IconComponent = faq.icon;
                return (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="border-border/50"
                  >
                    <AccordionTrigger 
                      className="text-left hover:text-primary transition-colors py-6 text-lg md:text-xl font-semibold"
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-2 text-base md:text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Card>
        </div>
        
        <div className={`text-center mt-8 md:mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-sm text-muted-foreground">
            Still have questions? Join our Discord community for real-time support!
          </p>
        </div>
      </div>
    </section>
  );
};