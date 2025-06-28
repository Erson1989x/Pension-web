import React, { RefObject } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import camera from '../../../../public/camera.webp';
import FloatingElement from './FloatingElement';

interface RoomsHeroSectionProps {
  parallaxRef: RefObject<HTMLElement>;
  springY: any;
}

const RoomsHeroSection: React.FC<RoomsHeroSectionProps> = ({ parallaxRef, springY }) => (
  <section ref={parallaxRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <motion.div
      style={{ y: springY }}
      className="absolute inset-0 w-full h-full"
    >
      <Image
        src={camera}
        alt="Rooms Hero"
        fill
        className="object-cover transform scale-110"
        priority
      />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
    {/* Decorative Elements */}
    <FloatingElement delay={0} size={120} left={15} top={30} color="bg-blue-300/20" blur />
    <FloatingElement delay={2} size={80} left={80} top={40} color="bg-purple-300/20" blur />
    <FloatingElement delay={4} size={150} left={70} top={70} color="bg-indigo-300/20" blur />
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 text-center text-white max-w-4xl px-4"
    >
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
          Camerele Noastre
        </span>
      </h1>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
      />
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200"
      >
        Descoperiți confortul și eleganța camerelor noastre, fiecare oferind o experiență unică de cazare
      </motion.p>
    </motion.div>
  </section>
);

export default RoomsHeroSection;
