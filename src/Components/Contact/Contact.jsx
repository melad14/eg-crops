import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

export default function Contact() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
<div className="page-header pb-5">
    <div className="container text-center py-5">
        <h1 className="display-4 text-uppercase mb-3 animated slideInDown">Contact</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                <li className="breadcrumb-item">
                    <a className="text-white" href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                    <a className="text-white" href="#">Pages</a>
                </li>
                <li className="breadcrumb-item text-primary active" aria-current="page">Contact</li>
            </ol>
        </nav>
    </div>
</div>
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
                        <td>contact@eg-crops.com</td>
                    </tr>
                    <tr>
                        <td>ADDRESS</td>
                        <td>Somosta - Bani Swayf -Egypt</td>
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
    )
}