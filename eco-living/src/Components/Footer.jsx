import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from 'react-icons/fa';
 
const Footer = () => {
  return (
    <footer className="py-5 mt-5" style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
      <div className="container">
        <div className="row g-4">
          
          {/* Brand Section */}
          <div className="col-md-4">
            <h5 className="fw-bold d-flex align-items-center gap-2 mb-3" style={{ color: 'var(--primary-color)' }}>
              <FaLeaf size={20} /> EcoLiving
            </h5>
            <p className="text-muted small">
              Your one-stop destination for sustainable products, zero-waste guides, and green living solutions. Let's make the Earth a better place together.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-muted"><FaFacebook size={20} /></a>
              <a href="#" className="text-muted"><FaTwitter size={20} /></a>
              <a href="#" className="text-muted"><FaInstagram size={20} /></a>
            </div>
          </div>
 
          {/* Quick Links */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/products" className="text-muted text-decoration-none">Products</Link></li>
              <li className="mb-2"><Link to="/blog" className="text-muted text-decoration-none">Blog</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-muted text-decoration-none">Contact</Link></li>
            </ul>
          </div>
 
          {/* Categories */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled">
              <li className="mb-2 text-muted">Sustainable Fashion</li>
              <li className="mb-2 text-muted">Zero-Waste Living</li>
              <li className="mb-2 text-muted">Green Energy</li>
              <li className="mb-2 text-muted">Eco-Friendly Products</li>
            </ul>
          </div>
 
          {/* Contact Info */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-2">📍 123 Green Street, Eco City</li>
              <li className="mb-2">📞 +91 98765 43210</li>
              <li className="mb-2">✉️ hello@ecoliving.com</li>
            </ul>
          </div>
 
        </div>
 
        <hr className="my-4 text-muted" />
        
        <div className="text-center text-muted small">
          <p className="m-0">© 2026 EcoLiving. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;