import { motion } from 'framer-motion';
import LeafletMap from '../../../components/LeafletMap/ClientLeafletMap';

const ContactMapSection = ({ mapY, mapRef }: { mapY: any, mapRef: any }) => (
  <section className="py-16 bg-gray-50">
    <div className="container-width">
      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg" ref={mapRef}>
        <motion.div 
          className="absolute inset-0"
          style={{ y: mapY }}
        >
          <LeafletMap
            lat={46.8791708}
            lng={25.457565}
            zoom={14}
            height="100%"
            popupText="Pensiunea Sărmaș - Locația noastră"
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactMapSection;
