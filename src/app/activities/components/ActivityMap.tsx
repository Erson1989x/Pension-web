import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LeafletMap from "../../../components/LeafletMap/LeafletMap";

interface Location {
  address: string;
  coordinates: string;
  lat: number;
  lng: number;
}

const ActivityMap = ({ location, accent }: { location: Location; accent: string }) => {
  const mapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "end start"]
  });
  const mapY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  return (
    <div ref={mapRef} className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
      <div className="absolute inset-0 border-2 border-white/20 z-20 rounded-xl pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${accent}`}></div>
      </div>
      <motion.div className="absolute inset-0" style={{ y: mapY }}>
        <LeafletMap
          lat={location.lat}
          lng={location.lng}
          height="100%"
          className="rounded-xl"
          popupText={location.address}
        />
      </motion.div>
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

export default ActivityMap;
