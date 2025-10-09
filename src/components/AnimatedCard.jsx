import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function AnimatedCard({ children, delay = 0, className = '', hover = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard
