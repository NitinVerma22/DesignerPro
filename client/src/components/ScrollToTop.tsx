import { useEffect } from 'react';
import { useLocation } from 'wouter';

const ScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // You can change this to 'auto' for instant scroll
    });
  }, [location]);

  return null;
};

export default ScrollToTop;
