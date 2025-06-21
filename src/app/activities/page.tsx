"use client";
import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import LeafletMap from "../../components/LeafletMap/LeafletMap";
import hiking from "../../../public/hiking.jpg";
import skiing from "../../../public/partia.jpg";
import bicig from "../../../public/bicig.jpg";
import spa from "../../../public/spa.jpg";
import cascada from "../../../public/cascada.jpg";
import manastire from "../../../public/manastire.jpg";
import banffy from "../../../public/banffy.jpg";
import aventuri from "../../../public/aventuri.jpg";
import urmanczy from "../../../public/urmanczy.jpg";
import echitare from "../../../public/echitatie.webp";

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
    features: ["Trasee marcate", "Ghiduri locale", "Echipament de siguranță"],
    images: [hiking],
    location: {
      address: "Imprejurimi, Toplița 535700",
      coordinates: "46.9254° N, 25.3475° E",
      lat: 46.9254,
      lng: 25.3475
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
    description: "Domeniul schiabil Pârtia Toplița se găsește la poalele munților Gurghiu. Este alcătuit din trei pârtii de schi deservite de două instalații de teleschi și o bandă rulantă, plus o pârtie de sanie.Datorită amplasamentului potrivit pârtiile beneficiază de o frumoasă panoramă spre munții Călimani dar și spre orașul Toplița",
    features: ["Inchirieri de ski si snowboard", "Monitori de ski si snowboard", "Pârti de sanie", "Pârti de teleschi", "Bandă rulantă"],
    images: [skiing],
    location: {
      address: "Strada Murelor, Toplița 535700",
      coordinates: "46.9007923° N, 25.3296628° E",
      lat: 46.9007923,
      lng: 25.3296628
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
    features: ["Inchirieri de biciclete", "Monitori de biciclete", "Inchirieri de ATV", "Trasee marcate"],
    images: [bicig],
    location: {
      address: "Strada Sportivilor, Toplița 535700",
      coordinates: "46.9254° N, 25.3575° E",
      lat: 46.9254,
      lng: 25.3575
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
    description: "Băile Bánffy Toplița Centru Wellness SPA dispune de două bazine de înot cu apă potabilă încălzită, unul acoperit de 400 mp și unul descoperit de 220 mp care este folosit pe timp de vară. Interiorul găzduiește pe lângă bazinul de înot: vestiare separate pentru femei și bărbați, sală de fitness, saună uscată, saună umedă, cameră de sare, jacuzzi, sală de mese; Contra cost – masaj. Aerul umed din interior este schimbat permanent printr-o instalație care introduce aer uscat pentru confortul turiștilor",
    features: ["Sauna", "Tratament masaj", "Piscină interioară și exterioară", "Fitness"],
    images: [spa],
    location: {
      address: "Str. Magura, Toplița 535700",
      coordinates: "46.9391° N, 25.3604° E",
      lat: 46.9391,
      lng: 25.3604
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
    difficulty: "Usor",
    description: "Cascada de apă termală din Toplița este un loc cu adevărat special și unic în România. Situată pe strada Cascadei, în apropierea centrului orașului, această cascadă este alimentată de izvorul termal „Bradul” și are o temperatură constantă de aproximativ 27°C, chiar și în mijlocul iernii",
    features: ["Trasee naturale", "Fotografie", "Observarea naturii"],
    images: [cascada],
    location: {
      address: "Strada Cascadei 9, Toplița 535700",
      coordinates: "46.91667° N, 25.35000° E",
      lat: 46.91667,
      lng: 25.35000
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
    description: "Mănăstirea Sfântul Ilie din Toplița este un așezământ monahal ortodox cu o istorie profund legată de identitatea spirituală românească. A fost întemeiată în 1928 de Patriarhul Miron Cristea, chiar în grădina casei sale natale, prin aducerea unei biserici de lemn din satul Stânceni, construită inițial în 1847.",
    features: ["Observarea istoric", "Fotografie", "Vizitare"],
    images: [manastire],
    location: {
      address: "Strada Stefan Cel Mare 70, Toplița 535700",
      coordinates: "46.9395° N, 25.3609° E",
      lat: 46.9395,
      lng: 25.3609
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
    description: "Ștrandul Bánffy se află la altitudinea de 677 metri și la distanță de 600 m de centrul orașului; între anii 1228-1948 era parte componentă a teritoriului familiei Bánffy, până în anul 1850 ștrandul fiind vizitat doar de către membrii familiei și de invitații lor. Apa izvorului a fost captată, în trecut, într-un bazin cu pereții de scânduri și folosit pentru băi, notorietatea lui crescând an de an datorită virtuților lor curative; de jur împrejurul ștrandului erau vestiare. Aceste vestiare au fost demolate de către familia respectivă în 1937 și au construit bazinul de beton având dimensiunile de 33×20 m, care este și în prezent. Analiza chimică a apei de aici a fost făcută prima oară de un profesor din Insbruck (Leobisch) în anul 1882, iar în 1893 de Than Károly.",
    features: ["Piscina", "Apa termala", "Relaxare", "Fotografie"],
    images: [banffy],
    location: {
      address: "Strada Măgura nr. 9A, Toplița 535700",
      coordinates: "46.9393° N, 25.3615° E",
      lat: 46.9393,
      lng: 25.3615
    },
    color: "from-rose-500/20 to-pink-400/20",
    accent: "bg-gradient-to-r from-rose-500 to-pink-400"
  },
    {
    id:"Urmánczy",
    name: "Ștrandul Urmánczy",
    category: "outdoor",
    distance: "6 km",
    duration: "1-2 ore",
    difficulty: "Easy",
    description: "Este un loc cu tradiție, cu apă termală minerală la 26–27°C, ideală pentru relaxare și tratamente. Piscina olimpică (50×20 m) și bazinul cu pietre încălzite natural sunt atracții rare în zonă.",
    features: ["Piscina", "Apa termala", "Relaxare", "Fotografie"],
    images: [urmanczy],
    location: {
      address: "Strada Apelor nr. 19, Toplița 535700",
      coordinates: "46.9368° N, 25.3542° E",
      lat: 46.9368,
      lng: 25.3542
    },
    color: "from-rose-500/20 to-pink-400/20",
    accent: "bg-gradient-to-r from-rose-500 to-pink-400"
  },
  {
    id:"centrul-echitatie",
    name: "Centrul de echitatie Toplita",
    category: "outdoor",
    distance: "6 km",
    duration: "1-2 ore",
    difficulty: "Easy",
    description: "Centrul oferă lecții de călărie în manej, plimbări călare prin natură, excursii ghidate și chiar plimbări cu trăsura. Caii sunt din rase variate – de la pur-sânge arab la frizieni – și sunt bine dresați, inclusiv pentru începători. Este un loc perfect pentru a te reconecta cu natura și cu tine însuți",
    features: ["Lecții de călărie", "Plimbări călare", "Excursii ghidate", "Trăsuri"],
    images: [echitare],
    location: {
      address: "Strada Vilelor, Toplița 535700",
      coordinates: "46.9386° N, 25.3672° E",
      lat: 46.9386,
      lng: 25.3672
    },
    color: "from-rose-500/20 to-pink-400/20",
    accent: "bg-gradient-to-r from-rose-500 to-pink-400"
  },
];

// Category filters with colors
const categories = [
  { id: "all", name: "Toate Categoriile", color: "bg-gradient-to-r from-blue-500 to-purple-500" },
  { id: "outdoor", name: "Outdoor", color: "bg-gradient-to-r from-emerald-500 to-green-400" },
  { id: "winter", name: "Iarna", color: "bg-gradient-to-r from-blue-500 to-cyan-400" },
  { id: "adventure", name: "Aventura", color: "bg-gradient-to-r from-teal-500 to-cyan-400" },
  { id: "wellness", name: "Wellness", color: "bg-gradient-to-r from-purple-500 to-fuchsia-400" },
  { id: "cultural", name: "Cultural", color: "bg-gradient-to-r from-indigo-500 to-violet-400" },
];

// Interfaces
interface Location {
  address: string;
  coordinates: string;
  lat: number;
  lng: number;
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

// Floating elements animation component
const FloatingElement = ({ delay, size, left, top, color, blur = false }: { 
  delay: number; 
  size: number; 
  left: number; 
  top: number; 
  color: string; 
  blur?: boolean 
}) => (
  <motion.div
    className={`absolute w-${size} h-${size} ${color} rounded-full ${blur ? 'backdrop-blur-sm' : ''}`}
    style={{ left: `${left}%`, top: `${top}%`, width: `${size}px`, height: `${size}px` }}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
  />
);

// Modern map component with styling based on activity colors
const ActivityMap = ({ location, color, accent }: { location: Location; color: string; accent: string }) => {
  const mapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "end start"]
  });
  
  // Create parallax effect for the map
  const mapY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  
  return (
    <div 
      ref={mapRef}
      className="relative h-[250px] rounded-xl overflow-hidden shadow-lg"
    >
      {/* Gradient border with accent color */}
      <div className="absolute inset-0 border-2 border-white/20 z-20 rounded-xl pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${accent}`}></div>
      </div>
      
      {/* Map with parallax effect */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: mapY }}
      >
        <LeafletMap
          lat={location.lat}
          lng={location.lng}
          height="100%"
          className="rounded-xl"
          popupText={location.address}
        />
      </motion.div>
      
      {/* Location indicator */}
      <div className="absolute top-4 right-4 z-10">
        <div className={`${accent} text-white px-3 py-1.5 rounded-full text-sm shadow-lg flex items-center space-x-1`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Locație</span>
        </div>
      </div>
    </div>
  );
};

export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });

  // Filter activities based on selected category
  const filteredActivities = selectedCategory === "all" 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory);

  // Handle mouse movement for cursor glow effect
  const handleMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
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
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Descoperiți o gamă variată de activități în inima munților Toplița
          </p>
        </motion.div>
      </section>

      {/* Category Filters */}
      <section className="py-16 bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${
                  selectedCategory === category.id
                    ? `${category.color} scale-105`
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedActivity(activity)}
              >
                {/* Activity Card */}
                <div className={`relative h-[500px] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${activity.color} backdrop-blur-sm border border-white/20`}>
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full"
                    >
                      <Image
                        src={activity.images[0]}
                        alt={activity.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`${activity.accent} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
                        {categories.find(cat => cat.id === activity.category)?.name}
                      </span>
                    </div>
                    
                    {/* Difficulty Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {activity.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {activity.name}
                    </h3>
                    
                    <p className="text-gray-700 line-clamp-2 leading-relaxed">
                      {activity.description}
                    </p>
                    
                    {/* Activity Details */}
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
                    
                    {/* CTA Button */}
                    <motion.button
                      className={`${activity.accent} text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Vezi Detalii
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedActivity(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-80">
              <Image
                src={selectedActivity.images[0]}
                alt={selectedActivity.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                ✕
              </button>
              
              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-4xl font-bold mb-2">{selectedActivity.name}</h2>
                <div className="flex gap-4 text-sm">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {selectedActivity.distance}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {selectedActivity.duration}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {selectedActivity.difficulty}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 max-h-[calc(90vh-320px)] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Description and Features */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Descriere</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedActivity.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ce Oferim</h3>
                    <ul className="space-y-2">
                      {selectedActivity.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-700">
                          <span className={`w-2 h-2 rounded-full ${selectedActivity.accent}`}></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Location and Map */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Locație</h3>
                    
                    {/* Interactive Map */}
                    <ActivityMap 
                      location={selectedActivity.location} 
                      color={selectedActivity.color} 
                      accent={selectedActivity.accent} 
                    />
                    
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
                          <span className="ml-7">{selectedActivity.location.address}</span>
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
                          <span className="ml-7">{selectedActivity.location.coordinates}</span>
                        </p>
                      </div>
                      
                      <motion.a
                        href={`https://www.google.com/maps?q=${selectedActivity.location.lat},${selectedActivity.location.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${selectedActivity.accent} text-white px-6 py-3 rounded-xl inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300 mt-4`}
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
      )}

      {/* Cursor Glow Effect */}
      <div
        className="fixed pointer-events-none z-30 mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full opacity-50" />
      </div>
    </main>
  );
}