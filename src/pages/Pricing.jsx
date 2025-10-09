import './Pricing.css'

function Pricing() {
  const pricingTiers = [
    {
      name: "Base Model",
      price: "$29.99 – $39.99",
      description: "Standard plastic housing, USB‑C rechargeable",
      features: [
        "Touch-free operation",
        "200ml tank capacity", 
        "3-month battery life",
        "LED indicators",
        "Easy installation"
      ],
      popular: false
    },
    {
      name: "Premium Model", 
      price: "$49.99 – $69.99",
      description: "Brushed metal finish, long battery life, optional app integration",
      features: [
        "All Base Model features",
        "Premium metal housing",
        "Extended battery life",
        "Smart app integration",
        "Advanced settings"
      ],
      popular: true
    },
    {
      name: "Multi‑Pack",
      price: "2‑Pack: ~$69.99 • 4‑Pack: ~$129.99",
      description: "Ideal for homes, clinics, and facilities",
      features: [
        "Bulk pricing savings",
        "Perfect for facilities",
        "Consistent installation",
        "Volume discounts",
        "Bulk support"
      ],
      popular: false
    }
  ]

  return (
    <div className="pricing">
      <div className="container">
        <h1>Pricing</h1>
        <p className="intro">
          Choose the perfect SaniSpray™ model for your needs. All models include 
          our core sanitization technology with different features and pricing tiers.
        </p>
        
        <div className="pricing-grid">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`pricing-card ${tier.popular ? 'popular' : ''}`}>
              {tier.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="card-header">
                <h3>{tier.name}</h3>
                <div className="price">{tier.price}</div>
                <p className="description">{tier.description}</p>
              </div>
              
              <div className="card-features">
                <h4>Features:</h4>
                <ul>
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="card-cta">
                <a href="#contact" className="btn primary">Get Quote</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="wholesale-info">
          <h2>Wholesale & Distribution</h2>
          <div className="wholesale-grid">
            <div className="wholesale-item">
              <h3>Manufacturing Cost</h3>
              <p>$6–$12 per unit</p>
            </div>
            <div className="wholesale-item">
              <h3>Wholesale Price</h3>
              <p>$18–$24</p>
            </div>
            <div className="wholesale-item">
              <h3>MSRP</h3>
              <p>$39.99 (standard) or $59.99 (premium)</p>
            </div>
            <div className="wholesale-item">
              <h3>Retailer Margin</h3>
              <p>40–50%</p>
            </div>
          </div>
          <div className="wholesale-cta">
            <a href="#contact" className="btn outline">Contact for Wholesale</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
