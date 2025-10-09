import './Contact.css'

function Contact() {
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID || ''
  const action = formspreeId ? `https://formspree.io/f/${formspreeId}` : undefined

  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="intro">
          Interested in wholesale, distribution, or pilots? Get in touch with our team 
          for personalized assistance and pricing information.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-content">
                  <h3>Email</h3>
                  <p>info@sanispray.com</p>
                  <a href="mailto:info@sanispray.com" className="contact-link">Send Email</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">🏢</div>
                <div className="method-content">
                  <h3>Business Inquiries</h3>
                  <p>Wholesale, distribution, partnerships</p>
                  <a href="mailto:business@sanispray.com" className="contact-link">Contact Business Team</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">🔧</div>
                <div className="method-content">
                  <h3>Technical Support</h3>
                  <p>Installation, maintenance, troubleshooting</p>
                  <a href="mailto:support@sanispray.com" className="contact-link">Get Support</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form method="POST" action={action}>
              {!formspreeId && (
                <p style={{ color: 'var(--muted)' }}>
                  Set VITE_FORMSPREE_ID in .env to enable form submissions.
                </p>
              )}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company (Optional)</label>
                <input type="text" id="company" name="company" />
              </div>
              
              <div className="form-group">
                <label htmlFor="inquiry">Type of Inquiry</label>
                <select id="inquiry" name="inquiry" required>
                  <option value="">Select an option</option>
                  <option value="wholesale">Wholesale/Distribution</option>
                  <option value="pilot">Pilot Program</option>
                  <option value="technical">Technical Support</option>
                  <option value="general">General Information</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
