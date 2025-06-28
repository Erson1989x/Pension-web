import React from 'react';
import { motion } from 'framer-motion';
import RoomCard from './RoomCard';
import FloatingElement from './FloatingElement';

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
  images: any[];
}

interface RoomsGridProps {
  rooms: Room[];
  mousePosition: { x: number; y: number };
  onBook: (roomId: string) => void;
}

const RoomsGrid: React.FC<RoomsGridProps> = ({ rooms, mousePosition, onBook }) => (
  <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
    {/* Background Decorative Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement delay={1} size={250} left={-5} top={20} color="bg-blue-200/10" blur={true} />
      <FloatingElement delay={3} size={300} left={90} top={50} color="bg-purple-200/10" blur={true} />
      <FloatingElement delay={5} size={200} left={50} top={80} color="bg-indigo-200/10" blur={true} />
    </div>
    <div className="max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-24"
      >
        {rooms.map((room, index) => (
          <RoomCard
            key={room.id}
            room={room}
            index={index}
            mousePosition={mousePosition}
            onBook={() => onBook(room.id)}
          />
        ))}
      </motion.div>
    </div>
  </section>
);

export default RoomsGrid;
