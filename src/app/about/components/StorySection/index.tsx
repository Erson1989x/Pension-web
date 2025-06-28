"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import familia from '../../../../../public/familie.jpg';

const StorySection = () => {
  const storyRef = useRef(null);
  const { scrollYProgress: storyScrollProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects
  const storyImageY = useTransform(storyScrollProgress, [0, 1], [50, -50]);

  return (
    <section id="story" className="py-24" ref={storyRef}>
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              stiffness: 50,
              damping: 15
            }}
            className="relative z-10"
          >
            <motion.div 
              className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-xl -z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            ></motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-text-1 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Povestea <span className="text-gradient">Noastră</span>
            </motion.h2>
            
            <motion.div 
              className="h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
            
            <motion.p 
              className="text-text-2 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              În inima Topliței, într-un loc unde natura își dezvăluie cele mai frumoase peisaje, 
              se află Pensiunea Vilcan - un refugiu modern care îmbină perfect confortul contemporan 
              cu ospitalitatea tradițională românească.
            </motion.p>
            
            <motion.p 
              className="text-text-2 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Fondată din pasiunea pentru turism și dorința de a oferi oaspeților noștri experiențe 
              memorabile, pensiunea Vilcan a devenit rapid un punct de referință pentru cei care 
              caută mai mult decât o simplă cazare.
            </motion.p>
            
            <motion.p 
              className="text-text-2 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Ne mândrim cu atenția la detalii, serviciile personalizate și atmosfera caldă pe care 
              le oferim fiecărui oaspete care ne trece pragul.
            </motion.p>
            
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link href="/contact">
                <motion.div
                  className="inline-flex items-center gap-2 text-primary font-medium border-b-2 border-primary/30 pb-1 hover:border-primary transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Contactează-ne</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              stiffness: 50,
              damping: 15,
              delay: 0.2
            }}
          >
            {/* 3D card effect with shadow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            
            <div className="absolute inset-0.5 rounded-2xl overflow-hidden perspective border border-white/10">
              <motion.div
                className="relative w-full h-full overflow-hidden rounded-2xl"
                style={{ y: storyImageY }}
              >
                <Image
                  src={familia}
                  alt="Familia Vilcan"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-multiply"></div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-xl -z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            ></motion.div>
            
            <motion.div
              className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Est. 2020
            </motion.div>
            
            <motion.div
              className="absolute bottom-6 left-6 max-w-[80%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="px-4 py-3 bg-white/10 backdrop-blur-md rounded-lg text-white">
                <p className="text-sm font-medium">Familia Vilcan</p>
                <p className="text-xs opacity-80">Sarmas, Harghita</p>
              </div>
            </motion.div>
            
            {/* Floating dots decoration */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 5}%`,
                  opacity: 0.6 - i * 0.1
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6 - i * 0.1, 0.8 - i * 0.1, 0.6 - i * 0.1]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;