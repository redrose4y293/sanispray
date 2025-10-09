import './About.css'

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1>About Us</h1>
        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              SaniSpray™ is proudly developed by Nathan Reardon under U.S. Provisional Patent protection. 
              We aim to eliminate surface contamination in public and private spaces around the world.
            </p>
            
            <div className="mission">
              <h2>Our Mission</h2>
              <p>
                To revolutionize surface sanitization through innovative, touch-free technology that 
                provides continuous protection against harmful pathogens in healthcare, educational, 
                commercial, and residential environments.
              </p>
            </div>
            
            <div className="patent-info">
              <h2>Patent Protection</h2>
              <p>
                Filed under USPTO micro-entity SB/16 status, ensuring intellectual property protection 
                for our innovative sanitization technology.
              </p>
            </div>
          </div>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Research-Based</h3>
              <p>Developed based on extensive research into surface contamination and pathogen transmission.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Impact</h3>
              <p>Designed to improve hygiene standards in healthcare, education, and public spaces worldwide.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Innovation</h3>
              <p>Cutting-edge technology that automates surface sanitization for maximum effectiveness.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
