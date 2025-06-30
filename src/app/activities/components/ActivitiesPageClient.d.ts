import { StaticImageData } from 'next/image';

// Define Location interface
export interface Location {
  address: string;
  coordinates: string;
  lat: number;
  lng: number;
}

// Define Activity interface
export interface Activity {
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

export interface ActivitiesPageClientProps {
  activities: Activity[];
}

declare const ActivitiesPageClient: React.FC<ActivitiesPageClientProps>;

export default ActivitiesPageClient;
