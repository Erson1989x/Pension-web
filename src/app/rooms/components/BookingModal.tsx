import React from 'react';
import { motion } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, roomName }) => {
  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white/90 backdrop-blur-md rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-white/20"
        onClick={e => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Rezervare</h3>
        <p className="mb-6 text-gray-600">Completați formularul pentru a rezerva {roomName ? `camera ${roomName}` : 'camera selectată'}.</p>
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nume și Prenume</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
            </div>
          </div>
          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              type="button"
            >
              Confirmă Rezervarea
            </motion.button>
            <button
              onClick={onClose}
              className="w-full text-gray-600 mt-4 py-2 hover:text-gray-900 transition-colors duration-200"
              type="button"
            >
              Anulează
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default BookingModal;
