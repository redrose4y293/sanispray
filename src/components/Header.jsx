import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedButton from './AnimatedButton'
import './Header.css'

function Header() {
  const [open, setOpen] = useState(false)
  const isActive = (hash) => typeof window !== 'undefined' && window.location.hash === hash

  useEffect(() => {
    const closeOnResize = () => { if (window.innerWidth > 768) setOpen(false) }
    const closeOnNavigate = () => setOpen(false)
    window.addEventListener('resize', closeOnResize)
    window.addEventListener('hashchange', closeOnNavigate)
    return () => {
      window.removeEventListener('resize', closeOnResize)
      window.removeEventListener('hashchange', closeOnNavigate)
    }
  }, [])

  return (
    <motion.header 
      className="site-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#home" className="brand">SaniSpray™</a>
      </motion.div>
      
      <button 
        className={`menu-toggle ${open ? 'open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${open ? 'open' : ''}`}>
        {[
          { href: '#problem', label: 'Problem' },
          { href: '#solution', label: 'Solution' },
          { href: '#how-it-works', label: 'How It Works' },
          { href: '#features', label: 'Features' },
          { href: '#gallery', label: 'Gallery' },
          { href: '#specifications', label: 'Specs' },
          { href: '#installation', label: 'Install' },
          { href: '#faq', label: 'FAQ' },
          { href: '#about', label: 'About' }
        ].map((item, index) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ y: -2 }}
          >
            <a href={item.href} className={isActive(item.href) ? 'active' : ''} onClick={() => setOpen(false)}>{item.label}</a>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          <AnimatedButton className="btn primary" href="#pricing">Buy Now</AnimatedButton>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header
