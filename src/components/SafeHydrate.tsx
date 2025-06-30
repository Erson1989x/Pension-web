"use client";

import { ReactNode, useEffect, useState } from 'react';

/**
 * A component that safely renders its children only after hydration
 * This prevents "window is not defined" errors during server-side rendering
 */
export default function SafeHydrate({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
}
