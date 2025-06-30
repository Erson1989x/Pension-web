// hooks/useMousePosition.ts
import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Skip entirely on server-side
    if (typeof window === 'undefined') return undefined;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Safe access to window properties
      const windowWidth = window.innerWidth || 1;
      const windowHeight = window.innerHeight || 1;
      
      // Calculate mouse position as percentage of window
      const x = (clientX / windowWidth) - 0.5;
      const y = (clientY / windowHeight) - 0.5;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return mousePosition;
}