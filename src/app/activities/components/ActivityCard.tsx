import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface ActivityCardProps {
  activity: any;
  onClick: () => void;
  categories: { id: string; name: string; color: string }[];
}

const ActivityCard = ({ activity, onClick, categories }: ActivityCardProps) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.6 }}
    className="group cursor-pointer"
  >
    <div className={`relative h-[500px] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${activity.color} backdrop-blur-sm border border-white/20`}>
      <div className="relative h-60 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full"
        >
          <Image
            src={activity.images[0] as StaticImageData}
            alt={activity.name}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`${activity.accent} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
            {categories.find(cat => cat.id === activity.category)?.name}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {activity.difficulty}
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <Link href={`/activities/${activity.id}`} className="block hover:opacity-80 transition-opacity">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
            {activity.name}
          </h3>
        </Link>
        <p className="text-gray-700 line-clamp-2 leading-relaxed">
          {activity.description}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{activity.distance}</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{activity.duration}</span>
          </div>
        </div>
        <Link href={`/activities/${activity.id}`} className="block w-full">
          <motion.button
            className={`${activity.accent} text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            Vezi Detalii
          </motion.button>
        </Link>
      </div>
    </div>
  </motion.div>
);

export default ActivityCard;
