/**
 * This middleware file is automatically loaded by Next.js
 * It runs before any page or API route is processed
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Browser polyfills for server-side rendering
if (typeof window === 'undefined') {
  // Mock window object
  global.window = {} as any;
  
  // Mock document object
  global.document = {
    createElement: () => ({}),
    getElementsByTagName: () => [],
    querySelector: () => null,
    querySelectorAll: () => [],
  } as any;
  
  // Mock navigator object
  global.navigator = {
    userAgent: 'SSR',
    language: 'en-US',
  } as any;
  
  // Mock localStorage
  global.localStorage = {
    getItem: () => null,
    setItem: () => null,
    removeItem: () => null,
    clear: () => null,
    key: () => null,
    length: 0,
  } as any;
  
  // Mock location
  global.location = {
    href: 'http://localhost:3000',
    origin: 'http://localhost:3000',
    protocol: 'http:',
    host: 'localhost:3000',
    hostname: 'localhost',
    port: '3000',
    pathname: '/',
    search: '',
    hash: '',
  } as any;
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};
