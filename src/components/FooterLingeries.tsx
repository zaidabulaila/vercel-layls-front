import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Image from 'next/image'
import Link from 'next/link'

import kalles from "@assets/images/svg/kalles.svg"
import payment from "@assets/images/home-lingerie/payment-method.png"
import ResponsiveFooter from '@src/components/ResponsiveFooter'

const FooterLingeries = () => {
    const [open, setOpen] = useState(null)
    const year = new Date().getFullYear();

    const handleClick = (id: any) => {
        if (open === id) {
            setOpen(null)
        } else {
            setOpen(id)
        }
    }

    return (
        <React.Fragment>
            <footer className="footer footer-lingerie">
                <Container>
                    <Row className="accordion" id="footer-accordion">
                        <div className="col-md-4 col-lg-3 mb-2 footer-accordion-item accordion-item">
                            <button className={`accordion-button footer-accordion-button px-0  ${open === 1 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" onClick={() => handleClick(1)}>
                                <h5>Get in touch</h5>
                            </button>
                            <h5 className="d-none d-md-block">Get in touch</h5>
                            <div id="collapseOne" className={`accordion-collapse collapse ${open === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                <Link href="#!">
                                    <Image src={kalles} alt="" height="29" />
                                </Link>

                                <div className="mt-4 pt-2">
                                    <p className="d-flex align-items-start text-muted gap-2">
                                        <i className="pegk pe-7s-map-marker fs-24"></i>
                                        <span>184 Main Rd E, St Albans <br /> <span className="pl__30">VIC 3021, Australia</span></span>
                                    </p>
                                    <p className="d-flex align-items-start text-muted gap-2">
                                        <i className="pegk pe-7s-mail fs-24"></i>
                                        <Link href="mailto:contact@company.com" className="text-reset">contact@company.com</Link>
                                    </p>
                                    <p className="d-flex align-items-start text-muted gap-2">
                                        <i className="pegk pe-7s-call fs-24"></i>
                                        <span>+001 2233 456 </span>
                                    </p>
                                    <div className="footer-social d-flex align-items-center gap-4 mt-4">
                                        <Link href="https://www.facebook.com" className="d-inline-block">
                                            <i className="facl facl-facebook"></i>
                                        </Link>
                                        <Link href="https://twitter.com" className="d-inline-block">
                                            <i className="facl facl-twitter"></i>
                                        </Link>
                                        <Link href="https://www.instagram.com" className="d-inline-block">
                                            <i className="facl facl-instagram"></i>
                                        </Link>
                                        <Link href="https://www.linkedin.com" className="d-inline-block">
                                            <i className="facl facl-linkedin"></i>
                                        </Link>
                                        <Link href="https://www.pinterest.com" className="d-inline-block">
                                            <i className="facl facl-pinterest"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 mb-2 accordion-item footer-accordion-item">
                            <button className={`accordion-button footer-accordion-button px-0  ${open === 2 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={() => handleClick(2)}>
                                <h5>Categories</h5>
                            </button>
                            <h5 className="fw-medium d-none d-md-block">Categories</h5>
                            <div id="collapseTwo" className={`accordion-collapse collapse ${open === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                <div className="mt-md-4 pt-md-2">
                                    <ul className="menu list-unstyled">
                                        <li className="menu-item">
                                            <Link href="/shop-filter-sidebar" className="text-muted">Strapless</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/shop-filter-sidebar" className="text-muted">Micro Bikini</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/shop-1600px-layout" className="text-muted">High Waisted</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/shop-1600px-layout" className="text-muted">Trikini</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/shop-1600px-layout" className="text-muted">Flounce</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/shop-1600px-layout" className="text-muted">Sling Bikini</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-2 accordion-item footer-accordion-item">
                            <button className={`accordion-button footer-accordion-button px-0  ${open === 3 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={() => handleClick(3)}>
                                <h5>Infomation</h5>
                            </button>
                            <h5 className="fw-medium d-none d-md-block">Infomation</h5>
                            <div id="collapseThree" className={`accordion-collapse collapse ${open === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                <div className="mt-md-4 pt-md-2">
                                    <ul className="menu list-unstyled">
                                        <li className="menu-item">
                                            <Link href="#!" className="text-muted">About Us</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="#!" className="text-muted">Contact Us</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="#!" className="text-muted">Terms &amp; Conditions</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="#!" className="text-muted">Returns &amp; Exchanges</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="#!" className="text-muted">Shipping &amp; Delivery</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="#!" className="text-muted">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-2 accordion-item footer-accordion-item">
                            <button className={`accordion-button footer-accordion-button px-0  ${open === 4 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" onClick={() => handleClick(4)}>
                                <h5>Useful links</h5>
                            </button>
                            <h5 className="fw-medium d-none d-md-block">Useful links</h5>
                            <div id="collapseFour" className={`accordion-collapse collapse ${open === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                <div className="mt-md-4 pt-md-2">
                                    <ul className="menu list-unstyled">
                                        <li className="menu-item">
                                            <Link href="#!" className="text-muted">Our Location</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="#!" className="text-muted">Latest News</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="#!" className="text-muted">My Account</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="#!" className="text-muted">Size Guide</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="#!" className="text-muted">FAQs 2</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="#!" className="text-muted">FAQs</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-2 col-lg-3 accordion-item footer-accordion-item mt-3">
                            <button className={`accordion-button footer-accordion-button px-0  ${open === 5 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" onClick={() => handleClick(5)}>
                                <h5>Newsletter</h5>
                            </button>
                            <h6 className="fw-medium d-none d-md-block">Newsletter</h6>
                            <div id="collapseFive" className={`accordion-collapse collapse ${open === 5 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                <div className="pt-md-2">
                                    <p className="text-muted">Subscribe to our newsletter and get 10% off your first purchase</p>
                                    <form id="contact_form" className="d-block">
                                        <div className="footer-subscribe position-relative">
                                            <input type="email" name="email" placeholder="Your email address" className="input-text form-control w-100 rounded-0 bg-transparent border-dark border-opacity-50" required />
                                            <button type="submit" className="btn btn-dark position-absolute rounded-0">
                                                <span>Subscribe</span>
                                            </button>
                                        </div>
                                    </form>
                                    <div className="mt-4">
                                        <Image src={payment} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </footer>

            <div className="footer-alt mb-5 py-4 mb-lg-0">
                <Container>
                    <Row>
                        <Col lg={6} className="text-lg-start text-center text-muted">
                            Copyright ©
                            {year} <Link href="#!" className="text-dark">Kalles</Link> all
                            rights reserved. Powered by The4
                        </Col>
                        <Col lg={6}>
                            <ul id="footer-menu" className="mt-2 mt-lg-0 list-unstyled d-flex align-items-center mb-0 justify-content-lg-end justify-content-center flex-wrap">
                                <li className="menu-item ">
                                    <Link href="/shop-filter-sidebar" className="text-muted mx-2">Shop</Link>
                                </li>
                                <li className="menu-item ">
                                    <Link href="#!" className="text-muted mx-2">About Us</Link>
                                </li>
                                <li className="menu-item ">
                                    <Link href="#!" className="text-muted mx-2">Contact</Link>
                                </li>
                                <li className="menu-item ">
                                    <Link href="#!" className="text-muted mx-2">Blog</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="position-fixed bg-white border rounded d-flex align-items-center justify-content-center shadow" id="nt_backtop">
                <i className="pr pegk pe-7s-angle-up"></i>
            </Link>


            <div className="backdrop-shadow d-none"></div>
            <ResponsiveFooter />
        </React.Fragment>
    )
}

export default FooterLingeries