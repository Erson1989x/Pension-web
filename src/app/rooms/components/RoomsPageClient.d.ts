import { StaticImageData } from 'next/image';

// Define Room interface
export interface Room {
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

export interface RoomsPageClientProps {
  rooms: Room[];
}

declare const RoomsPageClient: React.FC<RoomsPageClientProps>;

export default RoomsPageClient;
