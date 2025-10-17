import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import cars1 from '../../img/Website-Header-latest.png';
import aboutImg from '../../img/about-2.png';
import service1 from '../../img/service-1.jpg';

import prod1 from '../../img/dehydrated-garlic-flakes-supplier.jpg';
import prod2 from '../../img/DRIED-WHITE-ONION-FLAKES.jpg';
import prod3 from '../../img/91DyTnfFwtL.jpg';
import prod4 from '../../img/1-12-1.jpg';
import prod5 from '../../img/1-1.jpeg';
import prod6 from '../../img/71vlBrYw5kL.jpg';
export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  return (
    <>


    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="w-100" src={cars1} alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="title mx-5 px-5 animated slideInDown">
                        <div className="title-center">
                            <h5>Welcome</h5>
                            <h1 className="display-1">EG-CROPS</h1>
                        </div>
                    </div>
                    <p className="fs-5 mb-5 animated slideInDown">
                      EG-CROPS is a leading exporter of premium quality herbs and spices, <br /> based in Egypt and serving customers worldwide
                    </p>
                    <Link to="" className="btn btn-outline-primary border-2 py-3 px-5 animated slideInDown">
                        Explore More
                    </Link>
                </div>
            </div>
            <div className="carousel-item">
                <img className="w-100" src={cars1} alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="title mx-5 px-5 animated slideInDown">
                        <div className="title-center">
                            <h5>Welcome</h5>
                            <h1 className="display-1">EG-CROPS</h1>
                        </div>
                    </div>
                    <p className="fs-5 mb-5 animated slideInDown">
                      Our herbs and spices are grown and harvested using sustainable practices and <br /> are carefully processed to preserve their natural flavor and health benefits.



                    </p>
                    <Link to="" className="btn btn-outline-primary border-2 py-3 px-5 animated slideInDown">
                        Explore More
                    </Link>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

{/* About Start */}
<div className="container-fluid">
    <div className="container">
        <div className="row g-5 align-items-center">
            <div className="col-lg-7 pb-0 pb-lg-5 py-5">
                <div className="pb-0 pb-lg-5 py-5">
                    <div className="title wow fadeInUp" data-wow-delay="0.1s">
                        <div className="title-left">
                            <h5>History</h5>
                            <h1>About us</h1>
                        </div>
                    </div>
                    <p className="mb-4 wow fadeInUp" data-wow-delay="0.2s">
                        EG-CROPS is a leading exporter of premium quality herbs and spices, based in Egypt and serving customers worldwide. Our herbs and spices are grown and harvested using sustainable practices and are carefully processed to preserve their natural flavor and health benefits.
                    </p>
                    
                    {/* Facts Counter Integrated */}
                    <div className="row g-4 mb-5 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-6 col-sm-3">
                            <div className="counter text-center">
                                <div className="counter-icon mb-2">
                                    <i className="fas fa-passport text-primary"></i>
                                </div>
                                <div className="counter-content">
                                    <h6 className="mb-1">Satisfied Customers</h6>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <span className="counter-value fw-bold h5 mb-0">31</span>
                                        <h6 className="text-primary mb-0" style={{ fontWeight: 600, fontSize: '18px' }}>+</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="counter text-center">
                                <div className="counter-icon mb-2">
                                    <i className="fas fa-users text-primary"></i>
                                </div>
                                <div className="counter-content">
                                    <h6 className="mb-1">Team Members</h6>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <span className="counter-value fw-bold h5 mb-0">37</span>
                                        <h6 className="text-primary mb-0" style={{ fontWeight: 600, fontSize: '18px' }}>+</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="counter text-center">
                                <div className="counter-icon mb-2">
                                    <i className="fas fa-user-check text-primary"></i>
                                </div>
                                <div className="counter-content">
                                    <h6 className="mb-1">Quality of Service</h6>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <span className="counter-value fw-bold h5 mb-0">99%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="counter text-center">
                                <div className="counter-icon mb-2">
                                    <i className="fas fa-handshake text-primary"></i>
                                </div>
                                <div className="counter-content">
                                    <h6 className="mb-1">Success Rates</h6>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <span className="counter-value fw-bold h5 mb-0">98</span>
                                        <h6 className="text-primary mb-0" style={{ fontWeight: 600, fontSize: '18px' }}>%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="list-group list-group-flush mb-5 wow fadeInUp" data-wow-delay="0.4s">
                        <li className="list-group-item bg-dark text-body border-secondary ps-0">
                            <i className="fa fa-check-circle text-primary me-2"></i> 
                            Offer 100% Genuine Assistance
                        </li>
                        <li className="list-group-item bg-dark text-body border-secondary ps-0">
                            <i className="fa fa-check-circle text-primary me-2"></i> 
                            Faster & Reliable Execution
                        </li>
                        <li className="list-group-item bg-dark text-body border-secondary ps-0">
                            <i className="fa fa-check-circle text-primary me-2"></i> 
                            Accurate & Expert Advice
                        </li>
                    </ul>
                    
                    <div className="row wow fadeInUp" data-wow-delay="0.5s">
                        <div className="col-6">
                            <Link to="/about" className="btn btn-outline-primary border-2 py-3 w-100">
                                More Details
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link to="/contact" className="btn btn-primary py-3 w-100">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.6s">
                <img className="img-fluid rounded" src={aboutImg} alt="About our agency" />
            </div>
        </div>
    </div>
</div>
{/* About End */}
{/* Service Start */}
<div className="container-fluid py-5">
    <div className="container py-5">
        <div className="text-center">
            <div className="title wow fadeInUp" data-wow-delay="0.1s">
                <div className="title-center">
                    <h5>Services</h5>
                    <h1>How We Help You</h1>
                </div>
            </div>
        </div>
        
        {/* Service Item 1 */}
        <div className="service-item service-item-left">
            <div className="row g-0 align-items-center">
                <div className="col-md-5">
                    <div className="service-img p-5 wow fadeInRight" data-wow-delay="0.2s">
                        <img className="img-fluid rounded-circle" src={service1} alt="Fashion Shows" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="service-text px-5 px-md-0 py-md-5 wow fadeInRight" data-wow-delay="0.5s">
                        <h3 className="text-uppercase">
Reliable international shipping</h3>
                        <p className="mb-4">
                           We provide efficient and fast export solutions to all over the world
                        </p>
                        <Link to="/fashion-shows" className="btn btn-outline-primary border-2 px-4">
                            Read More <i className="fa fa-arrow-right ms-1"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Service Item 2 */}
        <div className="service-item service-item-right">
            <div className="row g-0 align-items-center">
                <div className="col-md-5 order-md-1 text-md-end">
                    <div className="service-img p-5 wow fadeInLeft" data-wow-delay="0.2s">
                        <img className="img-fluid rounded-circle" src={service1} alt="Corporate Events" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="service-text px-5 px-md-0 py-md-5 text-md-end wow fadeInLeft" data-wow-delay="0.5s">
                        <h3 className="text-uppercase">International export standards</h3>
                        <p className="mb-4">
                            We adhere to international standards in agriculture, storage, and shipping.
                        </p>
                        <Link to="/corporate-events" className="btn btn-outline-primary border-2 px-4">
                            Read More <i className="fa fa-arrow-right ms-1"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Service Item 3 */}
        <div className="service-item service-item-left">
            <div className="row g-0 align-items-center">
                <div className="col-md-5">
                    <div className="service-img p-5 wow fadeInRight" data-wow-delay="0.2s">
                        <img className="img-fluid rounded-circle" src={service1}alt="Commercial Photo Shots" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="service-text px-5 px-md-0 py-md-5 wow fadeInRight" data-wow-delay="0.5s">
                        <h3 className="text-uppercase">
Competitive prices</h3>
                        <p className="mb-4">
                           We offer the best prices with high-quality assurance.
                        </p>
                        <Link to="/commercial-photos" className="btn btn-outline-primary border-2 px-4">
                            Read More <i className="fa fa-arrow-right ms-1"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Service Item 4 */}
        <div className="service-item service-item-right">
            <div className="row g-0 align-items-center">
                <div className="col-md-5 order-md-1 text-md-end">
                    <div className="service-img p-5 wow fadeInLeft" data-wow-delay="0.2s">
                        <img className="img-fluid rounded-circle" src={service1}alt="Professional Modeling" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="service-text px-5 px-md-0 py-md-5 text-md-end wow fadeInLeft" data-wow-delay="0.5s">
                        <h3 className="text-uppercase">High-quality products
</h3>
                        <p className="mb-4">
                            We ensure premium quality in all our agricultural exports.


                        </p>
                        <Link to="/professional-modeling" className="btn btn-outline-primary border-2 px-4">
                            Read More <i className="fa fa-arrow-right ms-1"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Service End */}

{/* Products Start */}
<div className="container-fluid products overflow-hidden pt-5">
    <div className="container py-5">
        <div className="section-title text-center mb-5" data-aos="fade-up" data-aos-delay="100">
            <div className="sub-style">
                <h5 className="sub-title text-primary px-3 mb-3">Our Products</h5>
                <h2 className="display-6 mb-4">Premium Quality Herbs & Spices</h2>
                <p className="lead text-muted">Discover our range of carefully sourced and processed agricultural products</p>
            </div>
        </div>
        
        <div className="row g-4">
            {/* Product 1 - Dehydrated Garlic */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="100">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod1} className="img-fluid w-100" alt="Dehydrated Garlic" />
                    </div>
                    
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Dehydrated</span>
                            </div>
                            <h5 className="product-title mb-3">Dehydrated Garlic</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Allium sativum</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Whole</li>
                                        <li>• Powder</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 2 - Dehydrated Onion */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod2} className="img-fluid w-100" alt="Dehydrated Onion" />
                    </div>
                    
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Dehydrated</span>
                            </div>
                            <h5 className="product-title mb-3">Dehydrated Onion</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Allium cepa</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Kibbled</li>
                                        <li>• Minced</li>
                                        <li>• Granules</li>
                                        <li>• Powder</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 3 - Liquorice Roots */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod3} className="img-fluid w-100" alt="Liquorice Roots" />
                    </div>
                    
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Roots</span>
                            </div>
                            <h5 className="product-title mb-3">Liquorice Roots</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Glycerriza glabra</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Whole</li>
                                        <li>• Cut</li>
                                        <li>• TBC</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 4 - Rosemary */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod4} className="img-fluid w-100" alt="Rosemary" />
                    </div>
                    
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Rosemary</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Rosmarinus officinalis</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Cut (different sizes)</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 5 - Lemon Grass */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="500">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod5} className="img-fluid w-100" alt="Lemon Grass" />
                    </div>
                    
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Lemon Grass</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Cymbopogon citratus</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Cut (different sizes)</li>
                                        <li>• TBC</li>
                                        <li>• Powder</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 6 - Verbascum */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="600">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod6} className="img-fluid w-100" alt="Verbascum (Mullein)" />
                    </div>
                    
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Flowers</span>
                            </div>
                            <h5 className="product-title mb-3">Verbascum (Mullein)</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Verbascum thapsus</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Flowers</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional (Out of Stock)</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="text-center mt-5 pt-4" data-aos="fade-up" data-aos-delay="100">
            <h4 className="mb-4">Explore All Our Premium Products</h4>
            <Link to="/products" className="btn btn-outline-primary btn-lg rounded-pill px-5">
                View All Products
            </Link>
        </div>
    </div>
</div>
{/* Products End */}
{/* Contact Start */}
<div className="container-fluid py-5">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-6">
                <div className="title wow fadeInUp" data-wow-delay="0.1s">
                    <div className="title-left">
                        <h5>Contact</h5>
                        <h1>Please Contact Us</h1>
                    </div>
                </div>
             
                <table className="table table-dark mb-0 wow fadeInUp" data-wow-delay="0.3s">
                    <tr>
                        <td>PHONE</td>
                        <td>+201221813654</td>
                    </tr>
                    <tr>
                        <td>E-MAIL</td>
                        <td>info@example.com</td>
                    </tr>
                    <tr>
                        <td>ADDRESS</td>
                        <td>Somosta - Bani Swayf - Egypt</td>
                    </tr>
                    <tr className="border-dark">
                        <td>FOLLOW US</td>
                        <td>
                            <Link className="me-1" to="">
                                <i className="fab fa-x-twitter"></i>
                            </Link>
                            <Link className="me-1" to="">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="me-1" to="">
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link className="me-1" to="">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <form>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control bg-secondary border-0" id="name"
                                    placeholder="Your Name" />
                                <label htmlFor="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="email" className="form-control bg-secondary border-0" id="email"
                                    placeholder="Your Email" />
                                <label htmlFor="email">Your Email</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control bg-secondary border-0" id="subject"
                                    placeholder="Subject" />
                                <label htmlFor="subject">Subject</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control bg-secondary border-0" placeholder="Leave a message here"
                                    id="message" style={{height: "150px"}}></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-outline-primary border-2 w-100 py-3" type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
{/* Contact End */}

{/* Google Map Start */}
<div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.3s">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
        frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"
        style={{width: "100%", height: "500px", filter: "grayscale(100%) invert(92%) contrast(83%)", border: "0"}}></iframe>
</div>
{/* Google Map End */}

    </>
  );
}