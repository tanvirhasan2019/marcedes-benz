import React, { useState } from 'react'
import { motion } from 'framer-motion'
import InViewComponent from './helper/InViewComponent'
export const FadeIn = ({ children }) => {
  const [controls, setControls] = useState({ start: 'hidden', opacity: 1, scale: 1 })
  return (
    <InViewComponent onLoadInView={(newControls) => setControls({ ...controls, newControls })}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        {children}
      </motion.div>
    </InViewComponent>
  )
}
