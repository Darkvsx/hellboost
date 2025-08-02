import { useEffect } from 'react';

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Preload critical resources
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = '//discord.gg';
    document.head.appendChild(link);

    // Optimize font loading
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
      });
    }

    // Connection hints for external resources
    const discordPreconnect = document.createElement('link');
    discordPreconnect.rel = 'preconnect';
    discordPreconnect.href = 'https://discord.gg';
    document.head.appendChild(discordPreconnect);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(discordPreconnect);
    };
  }, []);
};