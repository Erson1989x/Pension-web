import Image from "next/image";
import { motion } from "framer-motion";
import ActivityMap from "./ActivityMap";

interface ActivityDetailModalProps {
  activity: any;
  onClose: () => void;
}

const ActivityDetailModal = ({ activity, onClose }: ActivityDetailModalProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
      onClick={e => e.stopPropagation()}
    >
      <div className="relative h-80">
        <Image
          src={activity.images[0]}
          alt={activity.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60 transition-colors"
        >
          ✕
        </button>
        <div className="absolute bottom-6 left-6 text-white">
          <h2 className="text-4xl font-bold mb-2">{activity.name}</h2>
          <div className="flex gap-4 text-sm">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              {activity.distance}
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              {activity.duration}
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              {activity.difficulty}
            </span>
          </div>
        </div>
      </div>
      <div className="p-8 max-h-[calc(90vh-320px)] overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Descriere</h3>
              <p className="text-gray-700 leading-relaxed">
                {activity.description}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ce Oferim</h3>
              <ul className="space-y-2">
                {activity.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-700">
                    <span className={`w-2 h-2 rounded-full ${activity.accent}`}></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Locație</h3>
              <ActivityMap location={activity.location} accent={activity.accent} />
              <div className="mt-4 space-y-3">
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="inline-flex items-center font-medium text-gray-900 mb-1">
                      <svg className="w-5 h-5 mr-2 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Adresă
                    </span><br />
                    <span className="ml-7">{activity.location.address}</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="inline-flex items-center font-medium text-gray-900 mb-1">
                      <svg className="w-5 h-5 mr-2 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Coordonate
                    </span><br />
                    <span className="ml-7">{activity.location.coordinates}</span>
                  </p>
                </div>
                <motion.a
                  href={`https://www.google.com/maps?q=${activity.location.lat},${activity.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${activity.accent} text-white px-6 py-3 rounded-xl inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300 mt-4`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Deschide în Google Maps
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default ActivityDetailModal;
