import { useEffect, useRef } from 'react';

// silence ts
declare global {
  interface Window {
    turnstile?: any;
  }
}

const Turnstile = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderTurnstile = () => {
      if (window.turnstile && containerRef.current) {
        window.turnstile.render(containerRef.current, {
          sitekey: '0x4AAAAAABk47lBAmN7mXq0Z',
        });
      }
    };

    // wait until Turnstile is available 
    if (window.turnstile) {
      renderTurnstile();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          renderTurnstile();
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return <div ref={containerRef} className="flex justify-center" />;
};

export default Turnstile;
