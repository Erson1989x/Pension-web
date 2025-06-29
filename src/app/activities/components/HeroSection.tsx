import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import FloatingElement from "./FloatingElement";
import { useRef } from "react";

interface HeroSectionProps {
  image: any;
  springY: any;
}

const HeroSection = ({ image, springY }: HeroSectionProps) => {
  const parallaxRef = useRef(null);
  return (
    <section ref={parallaxRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y: springY }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={image}
          alt="Mountain activities"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      <FloatingElement delay={0} size={200} left={15} top={20} color="bg-blue-300/20" blur={true} />
      <FloatingElement delay={2} size={120} left={75} top={25} color="bg-purple-300/20" blur={true} />
      <FloatingElement delay={4} size={160} left={60} top={70} color="bg-emerald-300/20" blur={true} />
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Aventuri Montane
          </span>
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
        />
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
          Descoperiți o gamă variată de activități în inima munților Toplița
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
