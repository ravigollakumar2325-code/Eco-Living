import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from "./Appcontext";
import { FaMoon, FaSun, FaBell, FaGlobe, FaLeaf } from 'react-icons/fa';
 
const Navbar = () => {
  const { theme, toggleTheme, direction, toggleDirection, notifications, showNotifications, toggleNotifications, clearNotifications } = useContext(AppContext);
 
  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/" style={{ color: 'var(--primary-color)' }}>
          <FaLeaf size={24} /> EcoLiving
        </Link>
        
        <div className="d-flex align-items-center gap-3">
          {/* Navigation Links */}
          <div className="d-none d-md-flex gap-3 me-3">
            <Link to="/" className="text-decoration-none" style={{ color: 'var(--text-color)' }}>Home</Link>
            <Link to="/products" className="text-decoration-none" style={{ color: 'var(--text-color)' }}>Products</Link>
            <Link to="/blog" className="text-decoration-none" style={{ color: 'var(--text-color)' }}>Blog</Link>
            <Link to="/contact" className="text-decoration-none" style={{ color: 'var(--text-color)' }}>Contact</Link>
          </div>
 
          {/* Icons */}
          <button className="btn btn-sm btn-outline-secondary border-0" onClick={toggleDirection} title="Change Direction">
            <FaGlobe size={18} />
          </button>
          
          <button className="btn btn-sm btn-outline-secondary border-0" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>
 
          {/* Notification Bell */}
          <div className="position-relative">
            <button className="btn btn-sm btn-outline-secondary border-0 position-relative" onClick={toggleNotifications}>
              <FaBell size={18} />
              {notifications.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {notifications.length}
                </span>
              )}
            </button>
            
            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="notification-dropdown p-3 mt-2">
                <div className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2">
                  <h6 className="m-0 fw-bold">Notifications</h6>
                  <button className="btn btn-sm text-danger p-0" onClick={clearNotifications}>Clear All</button>
                </div>
                {notifications.length === 0 ? (
                  <p className="text-muted small m-0">No new notifications</p>
                ) : (
                  <ul className="list-unstyled m-0">
                    {notifications.map(n => (
                      <li key={n.id} className="mb-2 pb-2 border-bottom" style={{ fontSize: '0.85rem' }}>
                        <p className="m-0">{n.text}</p>
                        <small className="text-muted">{n.time}</small>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
 
export default Navbar;