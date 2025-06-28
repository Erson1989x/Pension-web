import { motion } from 'framer-motion';
import Image from 'next/image';
import hero from '../../../../public/aboutus.webp';

const ContactHeroSection = ({ heroY, heroScale }: { heroY: any, heroScale: any }) => (
  <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
    <motion.div 
      className="absolute inset-0"
      style={{ y: heroY, scale: heroScale }}
    >
      <Image
        src={hero}
        alt="Contact Us"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 mix-blend-multiply"></div>
    </motion.div>
    {/* Floating particles */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full opacity-40"
          initial={{ 
            x: Math.random() * 100 - 50 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.3
          }}
          animate={{ 
            y: [null, Math.random() * -100 - 10 + "%"],
            opacity: [null, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear" 
          }}
          style={{ 
            width: Math.random() * 4 + 1, 
            height: Math.random() * 4 + 1,
            filter: "blur(1px)"
          }}
        />
      ))}
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div 
        className="text-center text-white px-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="opacity-90">Contact</span><span className="text-gradient ml-3">Noi</span>
        </motion.h1>
        <motion.div 
          className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
        <motion.p
          className="max-w-xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Suntem aici pentru a răspunde întrebărilor și solicitărilor dumneavoastră
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default ContactHeroSection;
