import React, { useEffect } from 'react'
import aboutImg from '../../img/about-2.png';
import service1 from '../../img/service-1.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function About() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
          <div className="page-header pb-5">
    <div className="container text-center py-5">
        <h1 className="display-4 text-uppercase mb-3 animated slideInDown">About</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                <li className="breadcrumb-item">
                    <a className="text-white" href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                    <a className="text-white" href="#">Pages</a>
                </li>
                <li className="breadcrumb-item text-primary active" aria-current="page">About</li>
            </ol>
        </nav>
    </div>
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
        </>
    )
}