import './Installation.css'

function Installation() {
  const steps = [
    {
      number: "1",
      title: "Choose Mounting Method",
      description: "Select peel-and-stick adhesive or screw-in mounting template based on your surface type."
    },
    {
      number: "2",
      title: "Position the Unit",
      description: "Place SaniSpray™ at optimal height (typically 4-6 feet) near high-touch surfaces."
    },
    {
      number: "3", 
      title: "Secure Installation",
      description: "Follow the mounting template to ensure proper alignment and secure attachment."
    },
    {
      number: "4",
      title: "Add Sanitizer",
      description: "Fill the reservoir with alcohol, HOCl, or botanical formulas via secure cap."
    },
    {
      number: "5",
      title: "Power Setup",
      description: "Connect to power source or ensure battery is charged for wireless operation."
    },
    {
      number: "6",
      title: "Test & Adjust",
      description: "Test motion detection and adjust spray angle and timing as needed."
    }
  ]

  const maintenance = [
    "Refill via secure cap or replaceable cartridge",
    "Compatible with alcohol, HOCl, or botanical formulas", 
    "Easy battery change and charging port access",
    "Regular cleaning of spray nozzles recommended",
    "LED indicators show when refill is needed"
  ]

  return (
    <div className="installation">
      <div className="container">
        <h1>Installation & Maintenance</h1>
        <p className="intro">
          Simple installation process and easy maintenance to keep your SaniSpray™ 
          operating at peak performance.
        </p>
        
        <div className="installation-steps">
          <h2>Installation Steps</h2>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="maintenance-section">
          <h2>Maintenance</h2>
          <div className="maintenance-grid">
            {maintenance.map((item, index) => (
              <div key={index} className="maintenance-item">
                <div className="maintenance-icon">🔧</div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Installation
