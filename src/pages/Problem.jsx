import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'
import AnimatedText from '../components/AnimatedText'
import './Problem.css'

function Problem() {
  return (
    <div className="problem">
      <div className="container">
        <AnimatedText type="slideUp" delay={0.2}>
          <h1>The Problem</h1>
        </AnimatedText>
        
        <AnimatedText type="fade" delay={0.4}>
          <p className="intro">
            Numerous studies have proven that surface contamination is a major contributor to the
            transmission of pathogens like rhinovirus, norovirus, and E. coli.
          </p>
        </AnimatedText>
        
        <div className="problem-grid">
          <AnimatedCard delay={0.1} className="problem-card">
            <h3>🏥 Hospitals</h3>
            <p>
              Contamination persists on bed rails, door handles, and medical equipment even after cleaning.
            </p>
          </AnimatedCard>
          
          <AnimatedCard delay={0.2} className="problem-card">
            <h3>👴 Nursing Homes</h3>
            <p>
              90% of high-touch surfaces were contaminated, especially where residents or visitors 
              frequently make contact.
            </p>
          </AnimatedCard>
          
          <AnimatedCard delay={0.3} className="problem-card">
            <h3>🚽 Bathrooms</h3>
            <p>
              Flushing creates aerosol plumes that coat nearby surfaces—even with the lid closed.
            </p>
          </AnimatedCard>
          
          <AnimatedCard delay={0.4} className="problem-card">
            <h3>🏠 Homes</h3>
            <p>
              Germs can linger in kitchens and bathrooms and be spread through shared contact zones.
            </p>
          </AnimatedCard>
        </div>
      </div>
    </div>
  )
}

export default Problem
