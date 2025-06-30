import { StaticImageData } from 'next/image';

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

export interface RoomDetailsProps {
  room: Room;
}

declare const RoomDetails: React.FC<RoomDetailsProps>;
export default RoomDetails;
