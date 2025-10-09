import './Features.css'

function Features() {
  const features = [
    "Fully automatic, touch-free operation",
    "Targets surface contact points (door handles, rails, toilets, etc)",
    "Minimizes labor costs and improves compliance",
    "Reduces infection risk up to 99.75%",
    "Works in high-humidity and variable light",
    "Fast wall mounting with adhesive or screw kit",
    "Reusable or disposable fluid cartridges"
  ]

  return (
    <div className="features">
      <div className="container">
        <h1>Features & Benefits</h1>
        <p className="intro">
          SaniSpray™ delivers comprehensive surface protection with advanced features 
          designed for maximum effectiveness and ease of use.
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">✓</div>
              <p>{feature}</p>
            </div>
          ))}
        </div>
        
        <div className="highlight-box">
          <h3>Key Benefits</h3>
          <div className="benefits">
            <div className="benefit">
              <span className="benefit-number">99.75%</span>
              <span className="benefit-text">Infection Risk Reduction</span>
            </div>
            <div className="benefit">
              <span className="benefit-number">100%</span>
              <span className="benefit-text">Touch-Free Operation</span>
            </div>
            <div className="benefit">
              <span className="benefit-number">24/7</span>
              <span className="benefit-text">Continuous Protection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
