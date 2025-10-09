import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function AnimatedText({ children, delay = 0, className = '', type = 'fade' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.6, delay }
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    },
    slideLeft: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    },
    slideRight: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={variants[type].initial}
      animate={isInView ? variants[type].animate : variants[type].initial}
      transition={variants[type].transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedText
