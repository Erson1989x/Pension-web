import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { rooms } from '../data/rooms';
import { StaticImageData } from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the RoomDetails component with SSR disabled
const RoomDetails = dynamic<{ room: Room }>(() => import('@/app/rooms/components/RoomDetails'), {
  ssr: false
});

// Define the Room interface to match your data structure
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

// Define the generateStaticParams function to pre-render all room pages at build time
export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.id,
  }));
}

// Generate metadata for each room page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const room = rooms.find((room) => room.id === params.slug);
  
  if (!room) {
    return {
      title: 'Room Not Found',
      description: 'The requested room could not be found',
    };
  }

  return {
    title: `${room.name} - Pensiunea Vilcan`,
    description: room.description.substring(0, 160),
  };
}

// With static export mode (output: 'export' in next.config.js), we can safely import the component directly
// Everything is pre-rendered at build time, so there are no SSR issues

export default function RoomPage({ params }: { params: { slug: string } }) {
  const room = rooms.find((room) => room.id === params.slug);
  
  // If room doesn't exist, return 404
  if (!room) {
    notFound();
  }
  
  return <RoomDetails room={room} />;
}
