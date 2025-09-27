import React from 'react';
import  {motion}  from 'framer-motion';
import BoostinganimalsHealth from './LargeAnimalspage/BoostinganimalsHealth';
import WhyBioLarge from './LargeAnimalspage/whybioLarge';

const Largemainpage = () => {
  return (
    <div className="overflow-hidden">
      {/* Boosting Animals Health Section with fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <BoostinganimalsHealth />
      </motion.div>

      {/* Why Biofactor Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <WhyBioLarge />
      </motion.div>
    </div>
  );
};

export default Largemainpage;
