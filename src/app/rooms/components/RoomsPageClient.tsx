"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import RoomsHeroSection from './RoomsHeroSection';
import RoomsGrid from './RoomsGrid';
import BookingModal from './BookingModal';
import ContactModal from './ContactModal';
import { useFocusePosition } from '@/hooks/useFocusePosition';
import { StaticImageData } from 'next/image';

// Define Room interface
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

interface RoomsPageClientProps {
  rooms: Room[];
}

export default function RoomsPageClient({ rooms }: RoomsPageClientProps) {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const mousePosition = useFocusePosition();
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });

  // For smooth parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const springY = useSpring(y, { stiffness: 50, damping: 30 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <RoomsHeroSection parallaxRef={parallaxRef} springY={springY} />
      {/* Rooms Grid with 3D Effects and Modernized Design */}
      <RoomsGrid
        rooms={rooms}
        mousePosition={mousePosition}
        onBook={(roomId) => setSelectedRoom(roomId)}
      />
      {/* Booking Modal with Enhanced Design */}
      <AnimatePresence>
        {selectedRoom && (
          <ContactModal isOpen={!!selectedRoom} onClose={() => setSelectedRoom(null)} />
        )}
      </AnimatePresence>
      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
