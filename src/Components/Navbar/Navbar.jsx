import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg'
// Navbar & Hero Start
const Navbar = () => {
  return (


    <nav className="navbar navbar-expand-lg navbar-dark sticky-top px-lg-5 bg-dark">
        <Link to="/" className="navbar-brand ms-4 ms-lg-0">
            <h2 className="mb-0 text-primary text-uppercase">
                <img src={logo} className="logo"/>EG-CROPS
            </h2>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/service" className="nav-item nav-link">Services</Link>
                <Link to="/products" className="nav-item nav-link">products</Link>
              
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <div className="d-none d-lg-flex">
                <a className="btn btn-sm-square btn-outline-primary border-2 ms-1  d-flex flex-column align-items-center justify-content-center" href="">
                    <i className="fab fa-x-twitter"></i>
                </a>
                <a className="btn btn-sm-square btn-outline-primary border-2 ms-1  d-flex flex-column align-items-center justify-content-center" href="">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-sm-square btn-outline-primary border-2 ms-1  d-flex flex-column align-items-center justify-content-center" href="">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
        </div>
    </nav>

  );
};
// Navbar & Hero End

export default Navbar;