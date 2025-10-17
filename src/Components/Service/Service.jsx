import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import service1 from '../../img/service-1.jpg';

import prod1 from '../../img/dehydrated-garlic-flakes-supplier.jpg';
import prod2 from '../../img/DRIED-WHITE-ONION-FLAKES.jpg';
import prod3 from '../../img/91DyTnfFwtL.jpg';
import prod4 from '../../img/1-12-1.jpg';
import prod5 from '../../img/1-1.jpeg';
import prod6 from '../../img/71vlBrYw5kL.jpg';
export default function Service() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

  return (
    <>
    <div className="page-header pb-5">
    <div className="container text-center py-5">
        <h1 className="display-4 text-uppercase mb-3 animated slideInDown">Services</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                <li className="breadcrumb-item">
                    <a className="text-white" href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                    <a className="text-white" href="#">Pages</a>
                </li>
                <li className="breadcrumb-item text-primary active" aria-current="page">Services</li>
            </ol>
        </nav>
    </div>
</div>
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
    </>
  )
}
