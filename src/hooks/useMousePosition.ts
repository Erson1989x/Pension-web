// hooks/useMousePosition.ts
import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate mouse position as percentage of window
      const x = (clientX / windowWidth) - 0.5;
      const y = (clientY / windowHeight) - 0.5;
      
      setMousePosition({ x, y });
    };
    
    // Only add event listener if we're in the browser
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
    
    return undefined;
  }, []);
  
  return mousePosition;
}