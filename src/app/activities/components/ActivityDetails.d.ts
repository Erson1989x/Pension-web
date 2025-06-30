import { StaticImageData } from 'next/image';

export interface Location {
  address: string;
  coordinates: string;
  lat: number;
  lng: number;
}

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

export interface ActivityDetailsProps {
  activity: Activity;
}

declare const ActivityDetails: React.FC<ActivityDetailsProps>;
export default ActivityDetails;
