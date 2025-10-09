import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedText from '../components/AnimatedText'
import AnimatedButton from '../components/AnimatedButton'
import ParallaxSection from '../components/ParallaxSection'
import './Home.css'

function Home() {
  const heroImage = new URL('../assets/first.png', import.meta.url).href

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <AnimatedText type="slideUp" delay={0.2}>
            <h1>Total Surface Protection. Automatically.</h1>
          </AnimatedText>
          
          <AnimatedText type="fade" delay={0.4}>
            <p>
              SaniSpray™ is the touch-free, wall-mounted sanitizer that targets surfaces—not
              hands—eliminating cross-contamination and providing constant peace of mind.
            </p>
          </AnimatedText>
          
          <motion.div 
            className="cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <AnimatedButton className="btn primary" href="#solution">Learn More</AnimatedButton>
            <AnimatedButton className="btn outline" href="#pricing">Buy Now</AnimatedButton>
          </motion.div>
        </div>
        
        <ParallaxSection speed={0.3}>
          <motion.div 
            className="hero-media"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <img src={heroImage} alt="SaniSpray installed on a door near a patient room" />
          </motion.div>
        </ParallaxSection>
      </section>
    </div>
  )
}

export default Home
