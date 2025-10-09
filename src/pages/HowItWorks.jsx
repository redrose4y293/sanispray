import './HowItWorks.css'

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Motion Detection",
      description: "Infrared motion sensor detects proximity when someone approaches the surface."
    },
    {
      number: "2", 
      title: "Smart Activation",
      description: "Smart controller activates mist spray automatically without any touch required."
    },
    {
      number: "3",
      title: "Controlled Dispensing",
      description: "Refillable, sealed reservoir holds alcohol- or HOCl-based sanitizers for effective cleaning."
    },
    {
      number: "4",
      title: "Power Options",
      description: "Optional battery, solar, or wired power options for different installation needs."
    },
    {
      number: "5",
      title: "Customizable Settings",
      description: "Adjustable spray angle and dose timing for optimal coverage and efficiency."
    }
  ]

  return (
    <div className="how-it-works">
      <div className="container">
        <h1>How It Works</h1>
        <p className="intro">
          SaniSpray™ uses advanced technology to provide automatic surface sanitization 
          in 5 simple steps.
        </p>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
