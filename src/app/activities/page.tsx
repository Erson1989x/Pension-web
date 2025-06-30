import React from "react";
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { activities } from "./data/activities";
import { StaticImageData } from 'next/image';

// Define Location interface
interface Location {
  address: string;
  coordinates: string;
  lat: number;
  lng: number;
}

// Define Activity interface
interface Activity {
  id: string;
  name: string;
  category: string;
  distance: string;
  duration: string;
  difficulty: string;
  description: string;
  features: string[];
  images: StaticImageData[];
  location: Location;
  color: string;
  accent: string;
}

// Define the props interface for the client component
interface ActivitiesPageClientProps {
  activities: Activity[];
}

// Dynamically import the client component with SSR disabled
// Using a simpler approach to avoid TypeScript errors
const ActivitiesPageClient = dynamic(() => Promise.resolve(require('./components/ActivitiesPageClient').default), {
  ssr: false
}) as React.ComponentType<ActivitiesPageClientProps>;

// Export metadata for the activities page
export const metadata: Metadata = {
  title: 'Activități | Pensiunea Vilcan',
  description: 'Explorează activitățile și aventurile disponibile în zona Pensiunii Vilcan, de la drumeții montane la sporturi de iarnă și experiențe culturale.',
};

export default function ActivitiesPage() {
  return <ActivitiesPageClient activities={activities} />;
}