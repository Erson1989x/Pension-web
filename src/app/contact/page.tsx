"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import hero from '../../../public/header.jpg';

const ContactPage = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src={hero}
          alt="Contact Us"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Informații de Contact</h2>
                <div className="w-20 h-1 bg-primary mb-8"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresă</h3>
                    <p className="text-gray-600">Strada Dealului, Nr. 5</p>
                    <p className="text-gray-600">Toplița, Harghita 535700</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600">+40 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@pensiune-toplita.ro</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Program</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Luni - Vineri: 08:00 - 20:00</p>
                  <p className="text-gray-600">Sâmbătă - Duminică: 09:00 - 18:00</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="card p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nume Complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Introduceți numele dvs."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="email@exemplu.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="+40 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-textarea"
                    placeholder="Scrieți mesajul dvs. aici..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="button-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Trimite Mesaj
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-width">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21893.035154451706!2d25.34008011562500!3d46.92449997914454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474af5a22632a8c9%3A0xb246178c722809c5!2sTopli%C8%9Ba!5e0!3m2!1sro!2sro!4v1650000000000!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
