import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

//template_kq4wg7m
//service_vm07hgi
//Hmq8dRTF4z3AnA6HW

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      'service_vm07hgi',
      'template_kq4wg7m',
      {
        from_name:form.name,
        to_name:'Pensiunea Valcan',
        from_email:form.email,
        to_email:'pensiuneavalcan@gmail.com',
        from_phone:form.phone,
        to_phone:'+491703123905',
        from_message:form.message
      },
      'Hmq8dRTF4z3AnA6HW'
    )
    .then(() => {
      setLoading(false)
      alert('Mesajul a fost trimis cu succes!')
      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    })
    .catch((error: any) => {
      console.error(error)
      setLoading(false)
      alert('A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.')
    })
  }

  return (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <form ref={formRef} onSubmit={handleSubmit} className="card p-8 space-y-6 bg-surface-1 rounded-2xl shadow-xl border border-white/10">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-1 mb-1">
          Nume Complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
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
          value={form.email}
          onChange={handleChange}
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
          value={form.phone}
          onChange={handleChange}
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
          value={form.message}
          onChange={handleChange}
          className="form-textarea w-full rounded-xl p-4 bg-surface-2/50 border border-text-2/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-1 resize-none"
          placeholder="Scrieți mesajul dvs. aici..."
        ></textarea>
      </div>
      <motion.button
        type="submit"
        disabled={loading}
        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-md disabled:opacity-70"
        whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        whileTap={{ scale: 0.98 }}
      >
        {loading ? 'Se trimite...' : 'Trimite Mesaj'}
      </motion.button>
    </form>
  </motion.div>
)
}

export default ContactForm;
