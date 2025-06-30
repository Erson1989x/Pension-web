import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { rooms } from './data/rooms';
import { StaticImageData } from 'next/image';

// Define Room interface to match the one in RoomsPageClient
interface Room {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  size: string;
  capacity: string;
  beds: string;
  features: string[];
  color: string;
  accent: string;
  images: StaticImageData[];
}

// Define the props interface for the client component
interface RoomsPageClientProps {
  rooms: Room[];
}

// Dynamically import the client component with SSR disabled
// Using a simpler approach to avoid TypeScript errors
const RoomsPageClient = dynamic(() => Promise.resolve(require('./components/RoomsPageClient').default), {
  ssr: false
}) as React.ComponentType<RoomsPageClientProps>;

// Export metadata for the rooms page
export const metadata: Metadata = {
  title: 'Camere | Pensiunea Vilcan',
  description: 'Descoperiți camerele noastre confortabile și elegante, fiecare cu propriul său caracter și facilități moderne.',
};

export default function RoomsPage() {
  return <RoomsPageClient rooms={rooms} />;
}
