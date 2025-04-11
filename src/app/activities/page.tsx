"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];

// Category filters
const categories = [
  { id: "all", name: "Toate Categorile" },
  { id: "outdoor", name: "Outdoor" },
  { id: "winter", name: "Iarna" },
  { id: "adventure", name: "Aventura" },
  { id: "wellness", name: "Wellness" },
  { id: "cultural", name: "Cultural" },
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
}

const ActivitiesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);

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

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={aventuri}
          alt="Mountain activities"
          fill
          className="object-cover transform scale-110 motion-safe:animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Aventuri Montane
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-200">
            Descoperiți activitățile și atracțiile din jurul pensiunii noastre
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {selectedActivity ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Activity Detail */}
                <div className="relative h-[50vh]">
                  <Image
                    src={selectedActivity.images[0]}
                    alt={selectedActivity.name}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={closeActivityDetail}
                    className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedActivity.name}</h2>
                      <p className="text-gray-600">{selectedActivity.description}</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Distanță</p>
                        <p className="font-semibold">{selectedActivity.distance}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Durată</p>
                        <p className="font-semibold">{selectedActivity.duration}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Dificultate</p>
                        <p className="font-semibold">{selectedActivity.difficulty}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Facilități</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedActivity.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-600">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="border-t pt-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Locație</h3>
                        <p className="text-gray-600">{selectedActivity.location.address}</p>
                        <p className="text-gray-500 text-sm">{selectedActivity.location.coordinates}</p>
                      </div>
                      <a
                        href={selectedActivity.location.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Deschide în Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                    onClick={() => handleActivityClick(activity)}
                  >
                    <div className="relative h-64">
                      <Image
                        src={activity.images[0]}
                        alt={activity.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{activity.description}</p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{activity.distance}</span>
                        <span>{activity.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default ActivitiesPage;
