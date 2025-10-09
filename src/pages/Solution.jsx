import './Solution.css'

function Solution() {
  return (
    <div className="solution">
      <div className="container">
        <h1>Our Solution: SaniSpray™</h1>
        <p className="intro">
          SaniSpray™ is a smart, wall-mounted spray sanitizer that automatically dispenses a controlled
          mist onto surfaces when motion is detected. It can be installed in hospitals, bathrooms,
          nursing homes, schools, restaurants, homes, and public facilities.
        </p>
        
        <div className="solution-features">
          <div className="feature">
            <div className="feature-icon">🎯</div>
            <h3>Smart Detection</h3>
            <p>Infrared motion sensor detects proximity and activates automatically</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">💧</div>
            <h3>Controlled Mist</h3>
            <p>Dispenses precise amount of sanitizer for maximum effectiveness</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🏥</div>
            <h3>Multi-Location</h3>
            <p>Perfect for hospitals, schools, restaurants, homes, and public facilities</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🔧</div>
            <h3>Easy Installation</h3>
            <p>Quick wall mounting with adhesive or screw kit</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
