import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { memo, lazy, Suspense } from "react";
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization";
import battlefieldImage from "@/assets/helldivers-battlefield.jpg";

// Lazy load non-critical sections for better performance
const LazyPricingSection = lazy(() => import("@/components/PricingSection").then(module => ({ default: module.PricingSection })));
const LazyLevelingSection = lazy(() => import("@/components/LevelingSection").then(module => ({ default: module.LevelingSection })));
const LazyBundlesSection = lazy(() => import("@/components/BundlesSection").then(module => ({ default: module.BundlesSection })));
const LazyFooter = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = memo(() => {
  usePerformanceOptimization();
  
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Optimized Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-30 will-change-auto"
        style={{ 
          backgroundImage: `url(${battlefieldImage})`,
          backgroundAttachment: 'fixed'
        }}
        role="presentation"
        aria-hidden="true"
      />
      
      {/* Animated Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        
        {/* Lazy load non-critical sections */}
        <Suspense fallback={<LoadingSpinner />}>
          <LazyBundlesSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyPricingSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyLevelingSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyFooter />
        </Suspense>
      </div>
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
