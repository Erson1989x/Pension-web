import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { activities } from '../data/activities';
import { StaticImageData } from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the ActivityDetails component with SSR disabled
const ActivityDetails = dynamic<{ activity: Activity }>(() => import('@/app/activities/components/ActivityDetails'), {
  ssr: false
});

// Define the Activity interface to match your data structure
interface Location {
  address: string;
  coordinates: string;
  lat: number;
  lng: number;
}

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

// Define the generateStaticParams function to pre-render all activity pages at build time
export async function generateStaticParams() {
  return activities.map((activity) => ({
    slug: activity.id,
  }));
}

// Generate metadata for each activity page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const activity = activities.find((activity) => activity.id === params.slug);
  
  if (!activity) {
    return {
      title: 'Activity Not Found',
      description: 'The requested activity could not be found',
    };
  }

  return {
    title: `${activity.name} - Pensiunea Vilcan`,
    description: activity.description.substring(0, 160),
  };
}

// With static export mode (output: 'export' in next.config.js), we can safely import the component directly
// Everything is pre-rendered at build time, so there are no SSR issues

export default function ActivityPage({ params }: { params: { slug: string } }) {
  const activity = activities.find((activity) => activity.id === params.slug);
  
  // If activity doesn't exist, return 404
  if (!activity) {
    notFound();
  }
  
  return <ActivityDetails activity={activity} />;
}
