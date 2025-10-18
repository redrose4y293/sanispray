import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SaniSpray™</h3>
          <p>Automatic surface sanitization for a safer world.</p>
        </div>
        
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#specifications">Specifications</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>
        
<div className="footer-section">
  <h4>Support</h4>
  <ul>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
    <li>
      <a
        href="/GB.pdf"     // path to your PDF (place it in /public)
        target="_blank"
        rel="noopener noreferrer"
      >
        Global Policy
      </a>
    </li>
  </ul>
</div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>info@sanispray.com</p>
          <p>Business inquiries welcome</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SaniSpray™. All rights reserved.</p>
        <p>Developed by Nathan Reardon under U.S. Provisional Patent protection.</p>
      </div>
    </footer>
  )
}

export default Footer


