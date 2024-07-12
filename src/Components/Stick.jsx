import React from 'react';
import './Stick.css';
import { easeInOut, motion } from "framer-motion";

function Stick() {
  return (
    <div className='new' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <motion.div 
        initial={{ x: 0 }}
        animate={{ x: [0, 500, 0] }}
        transition={{ duration: 2, ease: easeInOut }}
        whileInView={{ x: 500 }}
        style={{ marginRight: '10px' }}
        className='stick'>
      </motion.div>  


      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -500, 0] }}
        transition={{ duration: 2, ease: easeInOut }}
        whileInView={{ x: -500 }}
        style={{ marginLeft: '10px' }}
        className='stick1'>
      </motion.div>  

      <motion.h1 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={easeInOut}
        viewport={{ once: true }}
        className='fw'>
        JOIN US TO OPEN THE DOORS TO OPPORTUNITIES

        <motion.h1 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={easeInOut}
          viewport={{ once: true }}
          className='begin'>
          Your Pathway to Success Begins Here
        </motion.h1>

      </motion.h1>
    </div>
  );
}

export default Stick;
