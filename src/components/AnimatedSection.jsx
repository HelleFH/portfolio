// components/AnimatedSection.jsx
import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
    style={{ width: '100%', display:'flex', justifyContent:'center', alignItems:'center', }} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
