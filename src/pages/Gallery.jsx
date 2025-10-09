import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import AnimatedCard from '../components/AnimatedCard'
import './Gallery.css'

function Gallery() {
  const galleryImages = [
    new URL('../assets/2nd.png', import.meta.url).href,
    new URL('../assets/3rd.png', import.meta.url).href,
    new URL('../assets/4th.png', import.meta.url).href,
    new URL('../assets/5th.png', import.meta.url).href,
    new URL('../assets/6th.png', import.meta.url).href,
    new URL('../assets/7th.png', import.meta.url).href,
    new URL('../assets/8th.png', import.meta.url).href,
    new URL('../assets/9th.png', import.meta.url).href,
    new URL('../assets/10th.png', import.meta.url).href,
    new URL('../assets/11th.png', import.meta.url).href,
  ]

  const useCases = [
    "Hospital hallways and patient rooms",
    "Nursing home lounges and bedrooms", 
    "Public restrooms (stall and above toilet)",
    "Residential bathrooms and kitchens",
    "Daycare rooms and handwash stations",
    "Offices and building lobbies"
  ]

  return (
    <div className="gallery">
      <div className="container">
        <AnimatedText type="slideUp" delay={0.2}>
          <h1>Our Solution in Action</h1>
        </AnimatedText>
        
        <AnimatedText type="fade" delay={0.4}>
          <p className="intro">
            See SaniSpray™ installed in real-world environments, providing automatic 
            surface sanitization across various settings.
          </p>
        </AnimatedText>
        
        <div className="gallery-grid">
          {galleryImages.map((src, i) => (
            <motion.div 
              key={i} 
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <img loading="lazy" src={src} alt={`SaniSpray installation use case ${i + 1}`} />
              <motion.div 
                className="gallery-overlay"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span>Use Case {i + 1}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <AnimatedCard delay={0.6} className="use-cases">
          <h2>Installation Locations</h2>
          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index} 
                className="use-case-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ x: 5, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="use-case-icon">📍</div>
                <span>{useCase}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </div>
  )
}

export default Gallery
