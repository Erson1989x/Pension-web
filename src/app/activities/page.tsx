"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import hiking from "../../../public/hiking.jpg";
import skiing from "../../../public/partia.jpg";
import bicig from "../../../public/bicig.jpg";
import spa from "../../../public/spa.jpg";
import cascada from "../../../public/cascada.jpg";
import manastire from "../../../public/manastire.jpg";
import banffy from "../../../public/banffy.jpg";
import aventuri from "../../../public/aventuri.jpg";

// Activity data - customize with your actual nearby activities
const activities = [
  {
    id: "hiking",
    name: "Drumeții Montane",
    category: "outdoor",
    distance: "0.5 km",
    duration: "2-6 hours",
    difficulty: "Moderate",
    description:
      "Explorați trasee pitorești cu priveliști uimitoare ale pajiștilor montane, pădurilor și vârfurilor muntoase. Rute disponibile pentru toate nivelurile de experiență",
    features: [
      "Guided tours available",
      "Trail maps provided",
      "Packed lunch option",
    ],
    images:[hiking],
  },
  {
    id: "skiing",
    name: "Skiing si Snowboarding",
    category: "winter",
    distance: "3 km",
    duration: "Full day",
    difficulty: "Varies",
    description:
      "Experimentați pârtii pentru toate nivelurile de abilitate, de la zone ușoare pentru începători până la trasee provocatoare pentru experți, cu fundaluri montane impresionante.",
    features: ["Equipment rental", "Ski school", "Free shuttle service"],
    images: [skiing],
  },
  {
    id: "cycling",
    name: "Bicigleta, ATV si E-Bike",
    category: "outdoor",
    distance: "1 km",
    duration: "2-4 hours",
    difficulty: "Moderate to Difficult",
    description:
      "Descoperiți trasee palpitante prin păduri și poteci montane, potrivite atât pentru cicliști ocazionali, cât și pentru bicicliști montani experimentați",
    features: ["Bike rental", "Guided tours", "Trail maps"],
    images: [bicig],
  },
  {
    id: "wellness",
    name: "Thermal Spa",
    category: "wellness",
    distance: "5 km",
    duration: "Flexible",
    difficulty: "Easy",
    description:
      "Relaxați-vă și revigorați-vă în apele termale cu proprietăți terapeutice, completate de o gamă de tratamente de wellness",
    features: [
      "Sauna & steam room",
      "Massage treatments",
      "Indoor and outdoor pools",
    ],
    images: [spa],
  },
  {
    id: "Cascada",
    name: "Cascada Toplita",
    category: "adventure",
    distance: "7 km",
    duration: "1-2 hours",
    difficulty: "Intermediate",
    description:
      "Descoperiți cascada Toplita, o cascada deosebita situata in apropierea pensiunii noastre.",
    features: ["Tandem flights", "Professional guides", "Photography service"],
    images: [cascada
    ],
  },
  {
    id: "village-tour",
    name: "Manastirea Toplita",
    category: "cultural",
    distance: "4 km",
    duration: "3 hours",
    difficulty: "Easy",
    description:
      "Descoperiți manastirea Toplita, o manastire deosebita situata in apropierea pensiunii noastre.",
    features: ["Local guide", "Craft demonstrations", "Food tastings"],
    images: [
      manastire
    ],
  },
  {
    id: "fishing",
    name: "Banffy Toplita",
    category: "outdoor",
    distance: "6 km",
    duration: "Half day",
    difficulty: "Easy",
    description:
      "Descoperiți banffy Toplita, o zona deosebita situata in apropierea pensiunii noastre.",
    features: ["Equipment rental", "Fishing permits", "Cooking your catch"],
    images: [
      banffy
    ],
  },
  {
    id: "climbing",
    name: "Rock Climbing",
    category: "adventure",
    distance: "8 km",
    duration: "3-5 hours",
    difficulty: "Difficult",
    description:
      "Challenge yourself on natural rock faces with routes for various skill levels. Professional instructors ensure safety and guidance.",
    features: [
      "Equipment provided",
      "Certified instructors",
      "Courses for beginners",
    ],
    images: [
      "/images/activities/climbing-1.jpg",
      "/images/activities/climbing-2.jpg",
    ],
  },
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

interface IActivity {
  id: string;
  name: string;
  category: string;
  distance: string;
  duration: string;
  difficulty: string;
  description: string;
  features: string[];
  images: string[];
  activityType?: string; // Optional since it doesn't appear in your data
}

const ActivitiesPage: React.FC<IActivity> = ({}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );

  const filteredActivities =
    activeCategory === "all"
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
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={aventuri}
          alt="Mountain activities"
          fill
          className="object-cover"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Aventuri Montane
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Descoperiți activități și experiențe captivante în și în jurul regiunii noastre montane
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Activity Detail View */}
          {selectedActivity && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={closeActivityDetail}
                  className="absolute z-10 top-4 right-4 bg-white rounded-full p-2 shadow-md"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>

                {/* Image Gallery */}
                <div className="relative h-80 md:h-96">
                  <div className="flex h-full">
                    {selectedActivity.images.map((img, index) => (
                      <div key={index} className="relative w-1/2 h-full">
                                <Image
          src={img}
          alt={`${selectedActivity.name} image ${index + 1}`}
          fill
          className="object-cover"
        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedActivity.name}
                    </h2>
                    <div className="flex items-center mt-2 md:mt-0">
                      <div className="flex items-center mr-6">
                        <svg
                          className="w-5 h-5 text-blue-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-600">
                          {selectedActivity.distance}
                        </span>
                      </div>
                      <div className="flex items-center mr-6">
                        <svg
                          className="w-5 h-5 text-blue-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-600">
                          {selectedActivity.duration}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-blue-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                        <span className="text-gray-600">
                          {selectedActivity.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {selectedActivity.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedActivity.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-green-500 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <motion.button
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Book This Activity
                      </motion.button>
                    </Link>
                    <Link href="/contact">
                      <motion.button
                        className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Inquire for Details
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <motion.div
                key={activity.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleActivityClick(activity)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64">
                  <Image
                    src={activity.images[0]}
                    alt={activity.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-2">
                      {categories.find((cat) => cat.id === activity.category)
                        ?.name || activity.category}
                    </div>
                    <h3 className="text-white text-xl font-bold">
                      {activity.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex mb-4 text-sm text-gray-600">
                    <div className="flex items-center mr-4">
                      <svg
                        className="w-4 h-4 text-blue-600 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      {activity.distance}
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-blue-600 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      {activity.duration}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {activity.description}
                  </p>

                  <div className="flex justify-end">
                    <motion.button
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      View Details
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default ActivitiesPage;
