import './FAQ.css'

function FAQ() {
  const faqs = [
    {
      question: "Is it safe to use around children or food?",
      answer: "Yes. When filled with approved HOCl or botanical formulas, SaniSpray™ is food-safe and child-safe."
    },
    {
      question: "How long does each refill last?",
      answer: "A 200ml tank can last 2-4 weeks depending on activation frequency."
    },
    {
      question: "Can it spray toward objects like toilet handles?",
      answer: "Yes. The spray angle is adjustable for directional targeting."
    },
    {
      question: "What surfaces can SaniSpray™ be installed on?",
      answer: "SaniSpray™ can be mounted on walls, doors, and other vertical surfaces using either adhesive or screw mounting options."
    },
    {
      question: "How often does the battery need to be charged?",
      answer: "The USB-C rechargeable battery lasts up to 3 months with normal usage before requiring a charge."
    },
    {
      question: "Can I use my own sanitizer solution?",
      answer: "Yes, SaniSpray™ is compatible with alcohol-based, HOCl, or botanical sanitizer formulas."
    },
    {
      question: "Is installation difficult?",
      answer: "No, installation is simple with peel-and-stick adhesive or screw mounting template included."
    },
    {
      question: "What's the warranty on SaniSpray™?",
      answer: "SaniSpray™ comes with a 1-year manufacturer warranty covering defects in materials and workmanship."
    }
  ]

  return (
    <div className="faq">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <p className="intro">
          Common questions about SaniSpray™ installation, usage, and maintenance.
        </p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-icon">+</div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="contact-cta">
          <h2>Still have questions?</h2>
          <p>Contact our support team for personalized assistance.</p>
          <a href="#contact" className="btn primary">Contact Support</a>
        </div>
      </div>
    </div>
  )
}

export default FAQ
