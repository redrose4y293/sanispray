import './Specifications.css'

function Specifications() {
  const specs = [
    { label: "Dimensions", value: "6.1\" x 3.5\" x 2.7\"" },
    { label: "Material", value: "Anti-microbial ABS plastic" },
    { label: "Spray Distance", value: "8–18 inches" },
    { label: "Tank Size", value: "200ml" },
    { label: "Power", value: "USB-C rechargeable (3-month battery life) or AC/solar" },
    { label: "Indicators", value: "LED refill alert and activation indicator" }
  ]

  return (
    <div className="specifications">
      <div className="container">
        <h1>Specifications</h1>
        <p className="intro">
          Technical specifications and features of the SaniSpray™ automatic sanitizer system.
        </p>
        
        <div className="specs-grid">
          {specs.map((spec, index) => (
            <div key={index} className="spec-item">
              <div className="spec-label">{spec.label}</div>
              <div className="spec-value">{spec.value}</div>
            </div>
          ))}
        </div>
        
        <div className="additional-info">
          <h2>Additional Features</h2>
          <div className="features-list">
            <div className="feature">
              <div className="feature-icon">🔋</div>
              <div className="feature-content">
                <h3>Long Battery Life</h3>
                <p>3-month battery life with USB-C charging</p>
              </div>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🌞</div>
              <div className="feature-content">
                <h3>Solar Compatible</h3>
                <p>Optional solar power for eco-friendly operation</p>
              </div>
            </div>
            
            <div className="feature">
              <div className="feature-icon">💡</div>
              <div className="feature-content">
                <h3>Smart Indicators</h3>
                <p>LED alerts for refill needs and activation status</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specifications
