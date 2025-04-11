"use client";
import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import hiking from "../../../public/hiking.jpg";
import skiing from "../../../public/partia.jpg";
import bicig from "../../../public/bicig.jpg";
import spa from "../../../public/spa.jpg";
import cascada from "../../../public/cascada.jpg";
import manastire from "../../../public/manastire.jpg";
import banffy from "../../../public/banffy.jpg";
import aventuri from "../../../public/aventuri.jpg";

// Activity data with location information
const activities = [
  {
    id: "hiking",
    name: "Drumeții Montane",
    category: "outdoor",
    distance: "0.5 km",
    duration: "1-4 ore",
    difficulty: "Moderate",
    description: "Explorați trasee pitorești cu priveliști uimitoare ale pajiștilor montane, pădurilor și vârfurilor muntoase. Rute disponibile pentru toate nivelurile de experiență",
    features: ["Guided tours available", "Trail maps provided", "Packed lunch option"],
    images: [hiking],
    location: {
      address: "Strada Dealului, Toplița 535700",
      coordinates: "46.9254° N, 25.3475° E",
      googleMapsUrl: "https://www.google.com/maps/place/Topl%C3%AD%C8%9Ba/@46.9254,25.3475,14z"
    },
    color: "from-emerald-500/20 to-green-400/20",
    accent: "bg-gradient-to-r from-emerald-500 to-green-400"
  },
  {
    id: "skiing",
    name: "Skiing si Snowboarding",
    category: "winter",
    distance: "3 km",
    duration: "Toata ziua",
    difficulty: "Varies",
    description: "Experimentați pârtii pentru toate nivelurile de abilitate, de la zone ușoare pentru începători până la trasee provocatoare pentru experți, cu fundaluri montane impresionante.",
    features: ["Equipment rental", "Ski school", "Free shuttle service"],
    images: [skiing],
    location: {
      address: "Pârtia de Schi Toplița, Toplița 535700",
      coordinates: "46.9354° N, 25.3575° E",
      googleMapsUrl: "https://www.google.com/maps/place/P%C3%A2rtia+de+Schi+Topl%C3%AD%C8%9Ba/@46.9354,25.3575,17z"
    },
    color: "from-blue-500/20 to-cyan-400/20",
    accent: "bg-gradient-to-r from-blue-500 to-cyan-400"
  },
  {
    id: "cycling",
    name: "Bicigleta, ATV si E-Bike",
    category: "outdoor",
    distance: "1 km",
    duration: "1-4 ore",
    difficulty: "Moderate to Difficult",
    description: "Descoperiți trasee palpitante prin păduri și poteci montane, potrivite atât pentru cicliști ocazionali, cât și pentru bicicliști montani experimentați",
    features: ["Bike rental", "Guided tours", "Trail maps"],
    images: [bicig],
    location: {
      address: "Strada Sportivilor, Toplița 535700",
      coordinates: "46.9254° N, 25.3575° E",
      googleMapsUrl: "https://www.google.com/maps/place/Topl%C3%AD%C8%9Ba/@46.9254,25.3575,15z"
    },
    color: "from-orange-500/20 to-amber-400/20",
    accent: "bg-gradient-to-r from-orange-500 to-amber-400"
  },
  {
    id: "wellness",
    name: "Thermal Spa",
    category: "wellness",
    distance: "5 km",
    duration: "Flexibil",
    difficulty: "Easy",
    description: "Relaxați-vă și revigorați-vă în apele termale cu proprietăți terapeutice, completate de o gamă de tratamente de wellness",
    features: ["Sauna & steam room", "Massage treatments", "Indoor and outdoor pools"],
    images: [spa],
    location: {
      address: "Bánffy Wellness Resort, Toplița 535700",
      coordinates: "46.9284° N, 25.3505° E",
      googleMapsUrl: "https://www.google.com/maps/place/B%C3%A1nffy+Wellness+Resort/@46.9284,25.3505,17z"
    },
    color: "from-purple-500/20 to-fuchsia-400/20",
    accent: "bg-gradient-to-r from-purple-500 to-fuchsia-400"
  },
  {
    id: "Cascada",
    name: "Cascada Toplita",
    category: "adventure",
    distance: "7 km",
    duration: "1-2 ore",
    difficulty: "Intermediate",
    description: "Descoperiți cascada Toplita, o cascada deosebita situata in apropierea pensiunii noastre.",
    features: ["Tandem flights", "Professional guides", "Photography service"],
    images: [cascada],
    location: {
      address: "Cascada Toplița, Toplița 535700",
      coordinates: "46.9334° N, 25.3605° E",
      googleMapsUrl: "https://www.google.com/maps/place/Cascada+Topl%C3%AD%C8%9Ba/@46.9334,25.3605,17z"
    },
    color: "from-teal-500/20 to-cyan-400/20",
    accent: "bg-gradient-to-r from-teal-500 to-cyan-400"
  },
  {
    id: "village-tour",
    name: "Manastirea Toplita",
    category: "cultural",
    distance: "4 km",
    duration: "1-2 ore",
    difficulty: "Easy",
    description: "Descoperiți manastirea Toplita, o manastire deosebita situata in apropierea pensiunii noastre.",
    features: ["Local guide", "Craft demonstrations", "Food tastings"],
    images: [manastire],
    location: {
      address: "Mănăstirea Toplița, Toplița 535700",
      coordinates: "46.9274° N, 25.3545° E",
      googleMapsUrl: "https://www.google.com/maps/place/M%C4%83n%C4%83stirea+Topl%C3%AD%C8%9Ba/@46.9274,25.3545,17z"
    },
    color: "from-indigo-500/20 to-violet-400/20",
    accent: "bg-gradient-to-r from-indigo-500 to-violet-400"
  },
  {
    id: "banffy",
    name: "Banffy Toplita",
    category: "outdoor",
    distance: "6 km",
    duration: "1-2 ore",
    difficulty: "Easy",
    description: "Descoperiți banffy Toplita, o zona deosebita situata in apropierea pensiunii noastre.",
    features: ["Equipment rental", "Fishing permits", "Cooking your catch"],
    images: [banffy],
    location: {
      address: "Castelul Bánffy, Toplița 535700",
      coordinates: "46.9294° N, 25.3525° E",
      googleMapsUrl: "https://www.google.com/maps/place/Castelul+B%C3%A1nffy/@46.9294,25.3525,17z"
    },
    color: "from-rose-500/20 to-pink-400/20",
    accent: "bg-gradient-to-r from-rose-500 to-pink-400"
  }
];

// Category filters with colors
const categories = [
  { id: "all", name: "Toate Categorile", color: "bg-gradient-to-r from-blue-500 to-purple-500" },
  { id: "outdoor", name: "Outdoor", color: "bg-gradient-to-r from-emerald-500 to-green-400" },
  { id: "winter", name: "Iarna", color: "bg-gradient-to-r from-blue-500 to-cyan-400" },
  { id: "adventure", name: "Aventura", color: "bg-gradient-to-r from-teal-500 to-cyan-400" },
  { id: "wellness", name: "Wellness", color: "bg-gradient-to-r from-purple-500 to-fuchsia-400" },
  { id: "cultural", name: "Cultural", color: "bg-gradient-to-r from-indigo-500 to-violet-400" },
];

interface Location {
  address: string;
  coordinates: string;
  googleMapsUrl: string;
}

interface IActivity {
  id: string;
  name: string;
  category: string;
  distance: string;
  duration: string;
  difficulty: string;
  description: string;
  features: string[];
  images: StaticImageData[];
  location: Location;
  color: string;
  accent: string;
}

// Decorative floating element component
const FloatingElement = ({ delay = 0, size, left, top, color, blur = false }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${blur ? 'backdrop-blur-xl' : ''} mix-blend-multiply opacity-70`}
      style={{ 
        width: size, 
        height: size, 
        left: `${left}%`, 
        top: `${top}%`,
        filter: blur ? 'blur(8px)' : 'none'
      }}
      animate={{
        y: [0, 15, 0],
        x: [0, 5, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "reverse",
        delay,
      }}
    />
  );
};

// Feature badge component
const FeatureBadge = ({ feature, index, color }) => {
  return (
    <motion.div 
      className="flex items-center text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/30"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <div className={`w-1.5 h-full self-stretch ${color} mr-2 rounded-full`}></div>
      <span className="text-sm">{feature}</span>
    </motion.div>
  );
};

const ActivitiesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });

  const filteredActivities = activeCategory === "all"
    ? activities
    : activities.filter((activity) => activity.category === activeCategory);

  const handleActivityClick = (activity: IActivity) => {
    setSelectedActivity(activity);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeActivityDetail = () => {
    setSelectedActivity(null);
  };

  // Mouse position for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // For smooth parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const springY = useSpring(y, { stiffness: 50, damping: 30 });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Hero Section with Parallax */}
      <section ref={parallaxRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: springY }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={aventuri}
            alt="Mountain activities"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        
        {/* Decorative Elements */}
        <FloatingElement delay={0} size={200} left={15} top={20} color="bg-blue-300/20" blur={true} />
        <FloatingElement delay={2} size={120} left={75} top={25} color="bg-purple-300/20" blur={true} />
        <FloatingElement delay={4} size={160} left={60} top={70} color="bg-emerald-300/20" blur={true} />
        
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Aventuri Montane
            </span>
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-200"
          >
            Descoperiți activitățile și atracțiile din jurul pensiunii noastre
          </motion.p>
        </motion.div>
      </section>

      {/* Category Filter with Modern UI */}
      <section className="py-12 px-4 bg-white/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`px-5 py-2.5 rounded-full shadow-sm text-white transition-all duration-300 ${
                  activeCategory === category.id 
                    ? `${category.color} shadow-md scale-105` 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Activities Showcase */}
      <section className="py-20 px-4 relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement delay={1} size={300} left={-5} top={20} color="bg-blue-200/10" blur={true} />
          <FloatingElement delay={3} size={250} left={85} top={40} color="bg-purple-200/10" blur={true} />
          <FloatingElement delay={5} size={200} left={50} top={80} color="bg-emerald-200/10" blur={true} />
        </div>

        <div className="max-w-7xl mx-auto">
          {selectedActivity ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="relative h-[40vh] overflow-hidden">
                <motion.div
                  style={{ 
                    scale: 1.1,
                    x: ((mousePosition.x / window.innerWidth) - 0.5) * 20,
                    y: ((mousePosition.y / window.innerHeight) - 0.5) * 10
                  }}
                  transition={{ type: "spring", stiffness: 50, damping: 30 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={selectedActivity.images[0]}
                    alt={selectedActivity.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {selectedActivity.name}
                  </motion.h2>
                  <motion.button
                    onClick={closeActivityDetail}
                    className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-4 mb-8">
                  <motion.div 
                    className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <svg className="w-5 h-5 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">{selectedActivity.distance}</span>
                  </motion.div>

                  <motion.div 
                    className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <svg className="w-5 h-5 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{selectedActivity.duration}</span>
                  </motion.div>

                  <motion.div 
                    className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <svg className="w-5 h-5 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-gray-700">{selectedActivity.difficulty}</span>
                  </motion.div>
                </div>

                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 relative inline-block">
                    Descriere
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-1 ${selectedActivity.accent} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    />
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">{selectedActivity.description}</p>
                </motion.div>

                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 relative inline-block">
                    Facilități
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-1 ${selectedActivity.accent} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    />
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedActivity.features.map((feature, index) => (
                      <FeatureBadge key={index} feature={feature} index={index} color={selectedActivity.accent} />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 relative inline-block">
                    Locație
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-1 ${selectedActivity.accent} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />
                  </h3>
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <p className="text-gray-700"><strong>Adresă:</strong> {selectedActivity.location.address}</p>
                        <p className="text-gray-700"><strong>Coordonate:</strong> {selectedActivity.location.coordinates}</p>
                      </div>
                      <motion.a
                        href={selectedActivity.location.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${selectedActivity.accent} text-white px-6 py-3 rounded-xl inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Vezi pe Google Maps
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 rounded-3xl ${activity.color} opacity-25 blur-lg transform group-hover:scale-105 transition-all duration-300`} />
                  
                  <motion.div 
                    className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-white/20 relative z-10 h-full flex flex-col transform group-hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={activity.images[0]}
                        alt={activity.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{activity.name}</h3>
                        <div className={`w-16 h-1 ${activity.accent} rounded-full`} />
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex gap-2 mb-4">
                        <div className="bg-gray-100/80 backdrop-blur-sm px-3 py-1 rounded-md text-sm text-gray-700">
                          {activity.distance}
                        </div>
                        <div className="bg-gray-100/80 backdrop-blur-sm px-3 py-1 rounded-md text-sm text-gray-700">
                          {activity.duration}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 line-clamp-3">{activity.description}</p>
                      
                      <motion.button
                        className={`mt-auto ${activity.accent} text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300`}
                        onClick={() => handleActivityClick(activity)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Descoperă Mai Mult
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
        <FloatingElement delay={2} size={300} left={80} top={20} color="bg-blue-300/10" blur={true} />
        <FloatingElement delay={4} size={200} left={10} top={60} color="bg-purple-300/10" blur={true} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Pregătit pentru aventura ta?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Rezervă-ți sejurul acum și descoperă toate aceste activități minunate din împrejurimile pensiunii noastre.
          </motion.p>
          <motion.button 
            className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Rezervă Acum
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default ActivitiesPage;
