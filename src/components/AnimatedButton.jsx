import { motion } from 'framer-motion'

function AnimatedButton({ children, className = '', onClick, href, type = 'primary' }) {
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(247, 181, 0, 0.3)"
    },
    tap: { scale: 0.95 }
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const ButtonContent = (
    <motion.div
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      animate="pulse"
      variants={type === 'primary' ? { ...buttonVariants, ...pulseVariants } : buttonVariants}
      className={className}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        {ButtonContent}
      </a>
    )
  }

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton
