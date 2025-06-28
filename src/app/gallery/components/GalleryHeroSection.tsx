import { motion } from 'framer-motion';
import Image from 'next/image';
import pensiuneaValcan from '../../../../public/webp/valcan.webp';

const GalleryHeroSection = ({ opacity, scale, scrollYProgress }: { opacity: any, scale: any, scrollYProgress: any }) => (
  <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
    <motion.div 
      className="absolute inset-0 w-full h-full"
      style={{ opacity, scale }}
    >
      <Image
        src={pensiuneaValcan}
        alt="Gallery Hero"
        fill
        className="object-cover animate-ken-burns"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 mix-blend-multiply"></div>
    </motion.div>
    {/* Floating particles */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 20 }).map((_, index) => (
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
            duration: Math.random() * 10 + 20,
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center text-white max-w-4xl px-4"
    >
      <motion.h1 
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              staggerChildren: 0.1,
              delayChildren: 0.1
            }
          }
        }}
        initial="initial"
        animate="animate"
      >
        <motion.span className="inline-block">Galerie</motion.span>{" "}
        <motion.span className="inline-block text-gradient">Foto</motion.span>
        <motion.div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-20 bg-secondary/10 blur-3xl rounded-full"></motion.div>
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Explorați frumusețea și atmosfera pensiunii noastre prin intermediul imaginilor
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-10"
      >
        <a 
          href="#gallery" 
          className="relative group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all hover:shadow-lg hover:shadow-white/5"
        >
          <span className="font-medium">Vezi Galeria</span>
          <motion.span 
            animate={{ y: [0, 5, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.span>
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/60 to-secondary/60 blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default GalleryHeroSection;
