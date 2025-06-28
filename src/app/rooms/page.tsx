"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import camera from '../../../public/camera.webp';
import roomone from '../../../public/rooms/roomone/roomone.webp';
import roomtwo from '../../../public/rooms/roomtwo/roomtwo.webp';
import roomthree from '../../../public/rooms/roomthree/roomthree.webp';
import RoomsHeroSection from './components/RoomsHeroSection';
import FloatingElement from './components/FloatingElement';
import RoomsGrid from './components/RoomsGrid';
import BookingModal from './components/BookingModal';
import ContactModal from './components/ContactModal';

const rooms = [
  {
    id: 'deluxe-mountain-view',
    name: 'Deluxe Double Room',
    description: 'O cameră spațioasă cu vedere la munte.Cu baie si bucatarie comune. Bucurați-vă de priveliști impresionante și aer proaspăt de munte.',
    longDescription: 'Bucurați-vă de priveliștea spectaculoasă a munților din această cameră elegantă. Dotată cu un pat king-size confortabil si o canapea extensibila, baie comună si bucatarie comună, perfect pentru a savura cafeaua de dimineață în mijlocul naturii.',
    price: 195,
    size: '45 m²',
    capacity: '2 persoane + 1 copil',
    beds: '1 pat king-size + 1 canapea extensibila',
    features: [
      'Vedere panoramică la munte',
      'Baie comună',
      'Bucatarie comună',
      'TV HD',
      'Wi-Fi gratuit',
      'Ciubăr',    
    ],
    color: 'from-blue-500/20 to-cyan-400/20',
    accent: 'bg-gradient-to-r from-blue-500 to-cyan-400',
    images: [roomone]
  },
  {
    id: 'family-suite',
    name: 'Double Room ',
    description: 'O cameră spațioasă cu vedere la gradina, și zonă de relaxare, perfectă pentru familii care doresc să se bucure de natură împreună.',
    longDescription: 'Perfect pentru familie, această cameră oferă spațiu generos și toate facilitățile necesare pentru un sejur confortabil in inima naturii.',
    price: 173,
    size: '38 m²',
    capacity: '2 persoane',
    beds: '1 pat king-size',
    features: [
      'Vedere la gradina',
      'Zonă de relaxare',
      'Wi-Fi gratuit',
      'Baie comună',
      'TV',
      'Ciubăr',
    ],
    color: 'from-emerald-500/20 to-teal-400/20',
    accent: 'bg-gradient-to-r from-emerald-500 to-teal-400',
    images: [roomtwo]
  },
  {
    id: 'premium-suite',
    name: 'Deluxe Double Room',
    description: 'O cameră spațioasă cu vedere la munte.Cu baie privata si bucatarie comune. Bucurați-vă de priveliști impresionante și aer proaspăt de munte.',
    longDescription: 'Bucurați-vă de priveliștea spectaculoasă a munților din această cameră elegantă. Dotată cu un pat king-size confortabil, baie privata si bucatarie comună, perfect pentru a savura cafeaua de dimineață în mijlocul naturii.',
    price: 197,
    size: '38 m²',
    capacity: '2 persoane',
    beds: '1 pat king-size premium',
    features: [
      'Wi-Fi gratuit',
      'Baie privata',
      'Bucatarie comună',
      'TV',
      'Ciubăr',
      'Zonă de relaxare',
    ],
    color: 'from-purple-500/20 to-indigo-400/20',
    accent: 'bg-gradient-to-r from-purple-500 to-indigo-400',
    images: [roomthree]
  }
];

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
