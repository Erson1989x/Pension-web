import { motion, useTransform } from 'framer-motion';

const GalleryDecorativeBackground = ({ scrollYProgress, y }: { scrollYProgress: any, y: any }) => (
  <>
    <motion.div 
      className="fixed top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
    ></motion.div>
    <motion.div 
      className="fixed bottom-1/4 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      style={{ y }}
    ></motion.div>
  </>
);

export default GalleryDecorativeBackground;
