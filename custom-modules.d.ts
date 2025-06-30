// Type declarations for custom components
import React from 'react';
import { StaticImageData } from 'next/image';

// Room types
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

interface RoomDetailsProps {
  room: Room;
}

// Activity types
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

interface ActivityDetailsProps {
  activity: Activity;
}

// Gallery types
interface GalleryImage {
  id: number;
  src: StaticImageData;
  alt: string;
  category: string;
  featured?: boolean;
  width: number;
  height: number;
}

interface GalleryImageDetailProps {
  image: GalleryImage;
}

// Module declarations
declare module '../components/RoomDetails' {
  const RoomDetails: React.FC<RoomDetailsProps>;
  export default RoomDetails;
}

declare module '../components/ActivityDetails' {
  const ActivityDetails: React.FC<ActivityDetailsProps>;
  export default ActivityDetails;
}

declare module '../components/GalleryImageDetail' {
  const GalleryImageDetail: React.FC<GalleryImageDetailProps>;
  export default GalleryImageDetail;
}
