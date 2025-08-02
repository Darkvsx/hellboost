import { memo, ReactNode, Suspense } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

const DefaultFallback = () => (
  <div className="flex items-center justify-center py-16" role="status" aria-label="Loading section">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export const LazySection = memo(({ children, fallback = <DefaultFallback />, rootMargin = '100px' }: LazySectionProps) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    rootMargin,
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <div ref={elementRef}>
      {isVisible ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
});

LazySection.displayName = 'LazySection';