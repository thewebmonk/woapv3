import { useEffect, useState } from 'react';

export const useIsMobile = (screenWidth = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  let timeVar = null;

  const handleResize = (e) => {
    clearTimeout(timeVar);
    timeVar = setTimeout(() => {
      setIsMobile(window.screen.width < screenWidth ? true : false);
    }, 500);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
