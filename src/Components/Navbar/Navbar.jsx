import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';

// Navbar & Hero Start
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top px-lg-5 custom-navbar">
      <div className="container-fluid">
        {/* Logo Section */}
        <Link to="/" className="navbar-brand ms-4 ms-lg-0 d-flex align-items-center">
          <div className="logo-wrapper me-3">
            <img src={logo} className="logo img-fluid" alt="EG-CROPS Logo"/>
          </div>
          <div className="brand-text">
            <h2 className="mb-0 text-white fw-bold brand-title">
              EG<span className="text-primary">-CROPS</span>
            </h2>
            <small className="text-light slogan-text d-none d-sm-block">
              Global Standards, <span className="text-warning">Egyptian Roots</span>
            </small>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button 
          type="button" 
          className="navbar-toggler custom-toggler me-4" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link ">
              <i className="fas fa-home me-2"></i>Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              <i className="fas fa-info-circle me-2"></i>About
            </Link>
            <Link to="/service" className="nav-item nav-link">
              <i className="fas fa-cogs me-2"></i>Services
            </Link>
            <Link to="/products" className="nav-item nav-link">
              <i className="fas fa-seedling me-2"></i>Products
            </Link>
            <Link to="/oils" className="nav-item nav-link">
              <i className="fas fa-flask me-2"></i>Essential Oils
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              <i className="fas fa-envelope me-2"></i>Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="d-none d-lg-flex align-items-center">
            <a className="btn btn-sm-square btn-primary me-2 social-btn" href="https://wa.me/201221813654">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a className="btn btn-sm-square btn-primary me-2 social-btn" href="https://www.facebook.com/share/1FkHx8enY8/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-sm-square btn-primary me-2 social-btn" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="btn btn-sm-square btn-primary social-btn" href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
// Navbar & Hero End

export default Navbar;