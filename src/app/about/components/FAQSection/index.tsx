"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define FAQ data
const faqItems = [
  {
    question: "Care este procedura de check-in și check-out?",
    answer: "Check-in-ul se face începând cu ora 14:00, iar check-out-ul până la ora 12:00. Pentru sosiri târzii, vă rugăm să ne anunțați în prealabil pentru a putea organiza primirea dumneavoastră."
  },
  {
    question: "Pensiunea oferă mic dejun inclus în preț?",
    answer: "Da, toate tipurile de cazare includ micul dejun tradițional, preparat cu ingrediente locale și proaspete. Servirea se face între orele 7:30 și 10:00 în sala de mese a pensiunii."
  },
  {
    question: "Există facilități pentru copii?",
    answer: "Absolut! Dispunem de un loc de joacă în aer liber, meniuri speciale pentru cei mici și paturi suplimentare la cerere. Organizăm și activități familiale precum drumeții ușoare, ateliere de creație și interacțiuni cu animalele din gospodăria tradițională."
  },
  {
    question: "Este permis accesul cu animale de companie?",
    answer: "Da, acceptăm animale de companie de talie mică și medie, cu un cost suplimentar de 50 lei/zi. Vă rugăm să ne anunțați în avans dacă veți fi însoțiți de un animal de companie pentru a vă putea oferi o cameră adecvată."
  },
  {
    question: "Ce opțiuni de transport există pentru a ajunge la pensiune?",
    answer: "Pensiunea este accesibilă cu mașina personală, având parcare gratuită disponibilă. De asemenea, putem organiza transfer de la gara sau autogara din oraș contra cost. Pentru cei care doresc să folosească transportul public, există autobuze regulate din oraș până în apropierea pensiunii."
  },
  {
    question: "Ce activități pot face în zonă?",
    answer: "Zona oferă numeroase oportunități pentru activități în aer liber precum drumeții, ciclism montan, echitație și pescuit. În apropiere se află atracții turistice importante precum peșteri, cascade și situri istorice. La recepție vă putem oferi hărți și informații detaliate despre toate opțiunile disponibile."
  },
  {
    question: "Există opțiuni pentru persoane cu cerințe alimentare speciale?",
    answer: "Da, bucătăria noastră poate acomoda diverse cerințe alimentare precum meniuri vegetariene, vegane, fără gluten sau adaptate alergiilor. Vă rugăm să ne informați despre nevoile dumneavoastră la momentul rezervării pentru a ne asigura că vă putem oferi cele mai bune opțiuni."
  },
  {
    question: "Care este politica de anulare a rezervărilor?",
    answer: "Rezervările pot fi anulate gratuit cu până la 7 zile înainte de data sosirii. Pentru anulările efectuate cu mai puțin de 7 zile înainte, se percepe o taxă de 50% din valoarea primei nopți. În cazul neprezentării fără notificare prealabilă, se va taxa integral prima noapte de cazare."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
  
  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
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
            Întrebări <span className="text-gradient">Frecvente</span>
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
            Răspunsuri la cele mai comune întrebări despre Pensiunea Vilcan
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="mb-4"
              variants={itemVariants}
            >
              <button
                className={`w-full text-left p-5 rounded-xl flex justify-between items-center transition-all ${
                  openIndex === index 
                    ? "bg-background-2 shadow-md" 
                    : "bg-background-1 hover:bg-background-2"
                } border border-border`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              > <span className="font-medium text-text-1">{item.question}</span>
                <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
                  
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="overflow-hidden"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="p-5 bg-background-1 rounded-b-xl text-text-2 border-t-0 border border-border">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Contact prompt */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-text-2 mb-4">
            Nu ai găsit răspunsul la întrebarea ta? Contactează-ne direct!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-shadow"
          >
            <span>Contactează-ne</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;