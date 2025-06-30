"use client";

import React, { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import LeafletMap from "../../../components/LeafletMap/ClientLeafletMap";
import aventuri from "../../../../public/aventuri.jpg";
import ActivityGrid from "./ActivityGrid";
import CategoryFilters from "./CategoryFilters";
import ActivityDetailModal from "./ActivityDetailModal";
import HeroSection from "./HeroSection";
import CursorGlow from "./CursorGlow";
import FloatingElement from "./FloatingElement";
import { useFocusePosition } from "@/hooks/useFocusePosition";

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

interface ActivitiesPageClientProps {
  activities: IActivity[];
}

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

export default function ActivitiesPageClient({ activities }: ActivitiesPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const mousePosition = useFocusePosition();
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });

  // Filter activities based on selected category
  const filteredActivities = selectedCategory === "all"
    ? activities
    : activities.filter(activity => activity.category === selectedCategory);

  // For smooth parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const springY = useSpring(y, { stiffness: 50, damping: 30 });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <HeroSection image={aventuri} springY={springY} />

      {/* Category Filters */}
      <section className="py-16 bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4">
          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <ActivityGrid
            activities={filteredActivities}
            onActivityClick={setSelectedActivity}
            categories={categories}
          />
        </div>
      </section>

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <ActivityDetailModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}

      {/* Cursor Glow Effect */}
      <CursorGlow mousePosition={mousePosition} />
    </main>
  );
}
