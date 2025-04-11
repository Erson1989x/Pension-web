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
          src={hero}
          alt="Pensiunea Noastră"
          fill
          className="object-cover animate-ken-burns"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Despre Noi</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
              Bun venit în lumea noastră de ospitalitate autentică și confort modern
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Povestea Noastră</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                În inima Topliței, într-un loc unde natura își dezvăluie cele mai frumoase peisaje, 
                se află Pensiunea noastră - un refugiu modern care îmbină perfect confortul contemporan 
                cu ospitalitatea tradițională românească.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Fondată din pasiunea pentru turism și dorința de a oferi oaspeților noștri experiențe 
                memorabile, pensiunea noastră a devenit rapid un punct de referință pentru cei care 
                caută mai mult decât o simplă cazare.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ne mândrim cu atenția la detalii, serviciile personalizate și atmosfera caldă pe care 
                le oferim fiecărui oaspete care ne trece pragul.
              </p>
            </motion.div>
            
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/about/story.jpg"
                alt="Pensiunea Noastră"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-width">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Valorile Noastre</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Principiile care ne ghidează în crearea unor experiențe memorabile pentru oaspeții noștri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ospitalitate Autentică",
                description: "Punem suflet în tot ceea ce facem, oferind oaspeților noștri o experiență caldă și primitoare.",
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: "Confort Modern",
                description: "Îmbinăm facilitățile moderne cu atmosfera tradițională pentru o experiență unică.",
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                )
              },
              {
                title: "Respect pentru Natură",
                description: "Ne străduim să protejăm și să promovăm frumusețea naturală a regiunii noastre.",
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">{value.title}</h3>
                <p className="text-gray-700 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container-width">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Facilitățile Noastre</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Tot ce aveți nevoie pentru o ședere confortabilă și relaxantă
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Camere Confortabile",
                description: "Camere spațioase și elegant mobilate, cu vedere la munte și toate facilitățile moderne.",
                image: "/images/about/rooms.jpg"
              },
              {
                title: "Restaurant Traditional",
                description: "Bucătărie locală autentică, preparată cu ingrediente proaspete și rețete tradiționale.",
                image: "/images/about/restaurant.jpg"
              },
              {
                title: "Spa & Wellness",
                description: "Zonă de relaxare cu saună, jacuzzi și servicii de masaj pentru revigorare completă.",
                image: "/images/about/spa.jpg"
              }
            ].map((facility, index) => (
              <motion.div
                key={facility.title}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{facility.title}</h3>
                  <p className="text-gray-700">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Pregătiți să Ne Vizitați?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Rezervați-vă sejurul acum și bucurați-vă de o experiență de neuitat în Toplița
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/book">
                <motion.button
                  className="button-primary text-lg px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Rezervă Acum
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="button-outline-white text-lg px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contactează-ne
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;