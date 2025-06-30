import dynamic from 'next/dynamic';
import { ComponentType, ReactNode } from 'react';

/**
 * A utility function to dynamically import components that use browser-specific APIs
 * This prevents "window is not defined" errors during server-side rendering
 */
export function clientOnly<P extends object>(Component: ComponentType<P>) {
  return dynamic(() => Promise.resolve(Component), {
    ssr: false,
  });
}

/**
 * A wrapper component that only renders its children in the browser, not on the server
 */
export function ClientOnly({ children }: { children: ReactNode }) {
  const ClientOnlyComponent = clientOnly(({ children }: { children: ReactNode }) => <>{children}</>);
  return <ClientOnlyComponent>{children}</ClientOnlyComponent>;
}
