import React, { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fade-in ${isVisible ? 'visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
