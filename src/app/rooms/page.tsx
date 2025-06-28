"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import RoomsHeroSection from './components/RoomsHeroSection';
import FloatingElement from './components/FloatingElement';
import RoomsGrid from './components/RoomsGrid';
import BookingModal from './components/BookingModal';
import ContactModal from './components/ContactModal';
import { rooms } from './data/rooms';

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isContactOpen, setIsContactOpen] = useState(false);
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  // Mouse position parallax effect
  const handleMouseMove = (e: any) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };
  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  // For smooth parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const springY = useSpring(y, { stiffness: 50, damping: 30 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden" onMouseMove={handleMouseMove}>
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
          <BookingModal
            isOpen={!!selectedRoom}
            onClose={() => setSelectedRoom(null)}
            roomName={rooms.find(r => r.id === selectedRoom)?.name}
          />
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
