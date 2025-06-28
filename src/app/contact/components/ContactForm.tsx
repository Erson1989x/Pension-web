import { motion } from 'framer-motion';

const ContactForm = () => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <form className="card p-8 space-y-6 bg-surface-1 rounded-2xl shadow-xl border border-white/10">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-1 mb-1">
          Nume Complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input w-full rounded-xl p-4 bg-surface-2/50 border border-text-2/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-1"
          placeholder="Introduceți numele dvs."
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-1 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input w-full rounded-xl p-4 bg-surface-2/50 border border-text-2/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-1"
          placeholder="email@exemplu.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-1 mb-1">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input w-full rounded-xl p-4 bg-surface-2/50 border border-text-2/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-1"
          placeholder="Număr de telefon"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-1 mb-1">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="form-textarea w-full rounded-xl p-4 bg-surface-2/50 border border-text-2/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-1 resize-none"
          placeholder="Scrieți mesajul dvs. aici..."
        ></textarea>
      </div>
      <motion.button
        type="submit"
        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-md"
        whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        whileTap={{ scale: 0.98 }}
      >
        Trimite Mesaj
      </motion.button>
    </form>
  </motion.div>
);

export default ContactForm;
