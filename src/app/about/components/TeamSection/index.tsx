// src/components/about/TeamSection.tsx
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Define team members data
const teamMembers = [
  {
    name: "Elena Popescu",
    role: "Manager General",
    image: "/images/team/team1.jpg",
    bio: "Cu peste 15 ani de experiență în industria ospitalității, Elena coordonează întreaga activitate a pensiunii, asigurându-se că fiecare oaspete are parte de o experiență memorabilă.",
    social: {
      facebook: "[https://facebook.com](https://facebook.com)",
      instagram: "[https://instagram.com](https://instagram.com)",
      linkedin: "[https://linkedin.com](https://linkedin.com)"
    }
  },
  {
    name: "Andrei Ionescu",
    role: "Chef",
    image: "/images/team/team2.jpg",
    bio: "Pasionat de bucătăria tradițională românească cu influențe moderne, Andrei creează experiențe culinare autentice folosind ingrediente locale și rețete transmise din generație în generație.",
    social: {
      facebook: "[https://facebook.com](https://facebook.com)",
      instagram: "[https://instagram.com](https://instagram.com)",
      linkedin: "" // ensure linkedin is always a string
    }
  },
  {
    name: "Maria Dumitrescu",
    role: "Responsabil Relații cu Clienții",
    image: "/images/team/team3.jpg",
    bio: "Cu zâmbetul mereu pe buze, Maria este persoana care se asigură că toate nevoile oaspeților sunt îndeplinite prompt și că fiecare vizită la Pensiunea Vilcan este una de neuitat.",
    social: {
      facebook: "[https://facebook.com](https://facebook.com)",
      instagram: "[https://instagram.com](https://instagram.com)",
      linkedin: "[https://linkedin.com](https://linkedin.com)"
    }
  },
  {
    name: "Mihai Stancu",
    role: "Administrator",
    image: "/images/team/team4.jpg",
    bio: "Mihai se ocupă de buna funcționare a pensiunii, asigurându-se că toate facilitățile sunt întreținute impecabil și că standardele de calitate sunt respectate în fiecare aspect.",
    social: {
      facebook: "[https://facebook.com](https://facebook.com)",
      instagram: "", // ensure instagram is always a string
      linkedin: "[https://linkedin.com](https://linkedin.com)"
    }
  }
];

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: { [key: string]: string };
};

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24">
      <div className="container-width">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-text-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Echipa <span className="text-gradient">Noastră</span>
          </motion.h2>
          
          <motion.div 
            className="h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto text-text-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Oamenii pasionați care fac din Pensiunea Vilcan un loc special
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="relative group"
              variants={itemVariants}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-[350px] md:h-[400px] rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{member.role}</p>
                  
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {Object.entries(member.social).map(([platform, url], idx) => (
                      <a 
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <SocialIcon platform={platform} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-[5px] bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100"
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
            {/* Modal for team member details */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              className="bg-background-1 rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                onClick={() => setSelectedMember(null)}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-full">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-1">{selectedMember.name}</h3>
                    <p className="text-white/80 text-sm">{selectedMember.role}</p>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <h4 className="text-xl font-semibold mb-4 text-text-1">Despre {selectedMember.name.split(' ')[0]}</h4>
                  <p className="text-text-2 mb-6">{selectedMember.bio}</p>
                  
                  <div className="mt-auto">
                    <h5 className="text-sm font-medium text-text-1 mb-3">Conectează-te</h5>
                    <div className="flex space-x-3">
                      {Object.entries(selectedMember.social).map(([platform, url], idx) => (
                        <a 
                          key={idx}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-background-2 flex items-center justify-center hover:bg-background-3 transition-colors"
                        >
                          <SocialIcon platform={platform} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Helper component for social icons
const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'facebook':
      return (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85,0,3.2,0,3.58-.07,4.85-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07-3.2,0-3.58,0-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85,0-3.2,0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-6.98,6.98C0,8.33,0,8.74,0,12S0,15.67.07,16.95c.2,4.36,2.63,6.78,6.98,6.98C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-6.98C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.65-6.78-7-6.98C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19,3a2,2,0,0,1,2,2V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19m-.5,15.5V13.2a3.26,3.26,0,0,0-3.26-3.26h0a2.9,2.9,0,0,0-2.32,1.3V10.13H10.13V18.5h2.79V13.57a1.4,1.4,0,1,1,2.79,0V18.5H18.5M6.88,8.56A1.68,1.68,0,0,0,8.56,6.88,1.69,1.69,0,0,0,6.88,5.19,1.69,1.69,0,0,0,5.19,6.88,1.68,1.68,0,0,0,6.88,8.56M8.27,18.5V10.13H5.5V18.5Z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
        </svg>
      );
    default:
      return null;
  }
};

export default TeamSection;