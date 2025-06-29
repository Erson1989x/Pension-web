
import { useState, useEffect } from 'react';

export function useFocusePosition() {
  const [focusPosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return focusPosition;
}