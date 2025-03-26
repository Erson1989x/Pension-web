"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import hero from '../../../public/header.jpg';

const AboutPage = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src="/images/about/about-hero.jpg"
          alt="Mountain View Pension"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Povestea Noastră</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Descoperiți pasiunea și viziunea din spatele Pensiunii Vilcan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Un Sanctuar în Munți</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 mb-4 leading-relaxed">
              Fondată în 2024 de familia Vilcan, Pensiunea Mountain View a început ca un vis de a crea un sanctuar unde oaspeții să se poată deconecta de la agitația vieții de zi cu zi și să se reconecteze cu liniștea naturii
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
              Ceea ce a început ca o cabană modestă cu doar 5 camere s-a transformat într-un refugiu montan de primă clasă, menținând în același timp serviciul cald și personalizat care a fost marca noastră distinctivă de peste două decenii
              </p>
              <p className="text-gray-700 leading-relaxed">
              Filozofia noastră este simplă: să oferim cazare excepțională în armonie cu mediul natural, să oferim ospitalitate autentică și să creăm experiențe memorabile pentru fiecare oaspete care trece pragul nostru
              </p>
            </motion.div>
            
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/about/founder.jpg"
                alt="Familia Vilcan"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Valorile și Misiunea Noastră</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Principiile care ne ghidează în crearea unor experiențe excepționale pentru oaspeții noștri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                ),
                title: "Ospitalitate Autentică",
                description: "Credem în crearea unui mediu cald și primitor, în care oaspeții să se simtă ca parte din familie încă din momentul sosirii"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                ),
                title: "Administrație Ecologică",
                description: "Suntem dedicați practicilor sustenabile care păstrează frumusețea naturală a mediului nostru montan pentru generațiile viitoare"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                ),
                title: "Experiențe Excepționale",
                description: "Ne străduim să creăm momente memorabile și experiențe autentice care să conecteze oaspeții noștri cu cultura și frumusețea munților"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/*
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Our stay at Mountain View Pension exceeded all expectations. The staff went above and beyond to make our anniversary special.",
                author: "Sarah & Michael, United States",
                rating: 5
              },
              {
                quote: "A perfect blend of luxury and authentic mountain charm. The guided hikes were a highlight of our trip to the region.",
                author: "Thomas, Germany",
                rating: 5
              },
              {
                quote: "The attention to detail is remarkable. From the locally-sourced breakfast to the comfortable beds - everything was perfect.",
                author: "Maria, Spain",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="text-gray-400">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-blue-600 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 flex items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Sunteți pregătiți să experimentați Pensiunea Vilcan?</h2>
                  <p className="text-blue-100 mb-6">Rezervați-vă șederea acum și descoperiți escapada montană perfectă</p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/book">
                      <motion.button 
                        className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Rezervă Acum
                      </motion.button>
                    </Link>
                    <Link href="/contact">
                      <motion.button 
                        className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Contactați-ne
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={hero}
                  alt="Pensiune Vilcan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;