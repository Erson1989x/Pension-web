import { motion } from 'framer-motion';

const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, type: 'spring', stiffness: 50, damping: 15 }}
    className="space-y-10 relative"
  >
    <div>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-6 text-text-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Informații de <span className="text-gradient">Contact</span>
      </motion.h2>
      <motion.div 
        className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"
        initial={{ width: 0 }}
        whileInView={{ width: '100px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>
      <motion.p
        className="text-text-2 leading-relaxed max-w-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Nu ezitați să ne contactați pentru orice întrebare sau pentru a face o rezervare. 
        Suntem disponibili pentru a vă ajuta și a vă asigura o experiență memorabilă.
      </motion.p>
    </div>
    <div className="space-y-8">
      {/* Address */}
      <motion.div 
        className="flex items-start space-x-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
      >
        <div className="relative">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full"></div>
        </div>
        <div>
          <h3 className="font-semibold text-xl text-text-1 mb-2">Adresă</h3>
          <p className="text-text-2">DC192 37, Fundoaia</p>
          <p className="text-text-2">Sarmas, Romania</p>
        </div>
      </motion.div>
      {/* Phone */}
      <motion.div 
        className="flex items-start space-x-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
      >
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center text-secondary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-xl text-text-1 mb-2">Telefon</h3>
          <p className="text-text-2">+49 170 312 3905</p>
          <p className="text-text-2 text-sm mt-1 text-primary">Disponibil zilnic: 08:00 - 20:00</p>
        </div>
      </motion.div>
      {/* Email */}
      <motion.div 
        className="flex items-start space-x-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
      >
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center text-cyan-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-xl text-text-1 mb-2">Email</h3>
          <p className="text-text-2">pensiuneavilcan@gmail.com</p>
          <p className="text-text-2 text-sm mt-1 text-cyan-500">Vă răspundem în maxim 24 ore</p>
        </div>
      </motion.div>
    </div>
    {/* Program */}
    <motion.div 
      className="pt-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-text-1">Program</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-text-2/10">
          <span className="text-text-2 font-medium">Luni - Vineri</span>
          <span className="text-text-1 font-semibold">08:00 - 20:00</span>
        </div>
        <div className="flex items-center justify-between pb-3 border-b border-text-2/10">
          <span className="text-text-2 font-medium">Sâmbătă - Duminică</span>
          <span className="text-text-1 font-semibold">09:00 - 18:00</span>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default ContactInfo;
