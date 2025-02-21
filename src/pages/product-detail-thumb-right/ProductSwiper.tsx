import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { Navigation, Thumbs } from "swiper/modules";
import ShoppingCardModal from "@src/commonsections/ShoppingCardModal";
import { SizeGuideModal, DeliveryAndReturnModal, Question } from '@src/components/ProductModal/ProductModals'
import { useMediaQuery } from 'react-responsive';

import thumbpro10 from '@assets/images/single-product/thumb-right/pr-10.jpg'
import thumb2 from '@assets/images/single-product/thumb-right/thumb-02.jpg'
import thumb3 from '@assets/images/single-product/thumb-right/thumb-03.jpg'
import thumb5 from '@assets/images/single-product/thumb-right/thumb-05.jpg'
import thumb6 from '@assets/images/single-product/thumb-right/thumb-06.jpg'
import thumb7 from '@assets/images/single-product/thumb-right/thumb-07.jpg'
import thumb8 from '@assets/images/single-product/thumb-right/thumb-08.jpg'
import thumb9 from '@assets/images/single-product/thumb-right/pr-09.jpg'
import thumb10 from '@assets/images/single-product/thumb-right/thumb-10.jpg'
import trust from '@assets/images/single-product/trust_img2.png'
import pro1 from '@assets/images/products/thumb-01.jpg'
import pro2 from '@assets/images/products/thumb-02.jpg'
import pro3 from '@assets/images/products/thumb-03.jpg'
import pro4 from '@assets/images/products/thumb-04.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const ProductSwiper = () => {
    const isMobile = useMediaQuery({ maxWidth: 1025 });
    const [thumbsSwiper, sethumbsSwiper] = useState<any>(null)
    const [size, setSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [shoppingShow, setShoppingShow] = useState(false);


    const handleSizeClick = (newSize: string) => {
        setSize(newSize);
    };
    const handleQuantityChange = (change: number) => {
        setQuantity((prev) => Math.max(0, prev + change));
    };
    const handleChange = (event: any) => {
        const value = Math.max(0, Math.min(100, Number(event.target.value)));
        setQuantity(value);
    };

    const handleShoppingClose = () => setShoppingShow(false);
    const handleShoppingShow = () => setShoppingShow(true);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    return (
        <React.Fragment>
            <section className="py-4">
                <div className="container">
                    <Row className="py-3 gx-xl-1">
                        <Col md={6}>
                            <Row className="g-2 g-lg-0">
                                <Col xl={9} className="mt-3">

                                    <Swiper
                                        navigation={true}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[Thumbs, Navigation]}
                                        className="productMain">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="position-relative topbar-product-card overflow-hidden h-100">
                                                        <Image src={thumbpro10} alt="" className="img-fluid w-100" priority />
                                                        <span className="new-label bg-danger text-white rounded-circle"> -34% </span>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src={thumb2} alt="" className="img-fluid w-100" priority />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src={thumb3} alt="" className="img-fluid w-100" priority />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src={thumb9} alt="" className="img-fluid w-100" priority />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src={thumb5} alt="" className="img-fluid w-100" priority />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src={thumb6} alt="" className="img-fluid w-100" priority />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src={thumb7} alt="" className="img-fluid w-100" priority />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src={thumb8} alt="" className="img-fluid w-100" priority />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src={thumb9} alt="" className="img-fluid w-100" priority />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src={thumb10} alt="" className="img-fluid w-100" priority />
                                                </SwiperSlide>
                                            </div>
                                            <div className="swiper-button-next"></div>
                                            <div className="swiper-button-prev"></div>
                                        </div>
                                    </Swiper>
                                </Col>
                                <Col xl={2} className="mt-xl-3 mt-2 ms-2">
                                    <Swiper
                                        className="swiper productSmall"
                                        direction={isMobile ? 'horizontal' : 'vertical'}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        navigation={true}
                                        modules={[Thumbs, Navigation]}
                                        slidesPerView={4}
                                        spaceBetween={10}
                                        freeMode
                                        watchSlidesProgress
                                    >
                                        <div className="swiper-wrapper">
                                            <SwiperSlide>
                                                <Image src={thumbpro10} alt="" className="object-fit-cover" priority />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image src={thumb2} alt="" className="img-fluid w-100" priority />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image src={thumb3} alt="" className="img-fluid w-100" priority />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image src={thumb9} alt="" className="img-fluid w-100" priority />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image src={thumb5} alt="" className="img-fluid w-100" priority />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image src={thumb6} alt="" className="img-fluid w-100" priority />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image src={thumb7} alt="" className="img-fluid w-100" priority />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image src={thumb8} alt="" className="img-fluid w-100" priority />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image src={thumb9} alt="" className="img-fluid w-100" priority />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image src={thumb10} alt="" className="img-fluid w-100" priority />
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-button-next"></div>
                                        <div className="swiper-button-prev"></div>
                                    </Swiper>
                                </Col>

                            </Row>
                        </Col>

                        <Col md={6} className="mt-5 mt-md-0">
                            <h4 className="mb-3">High Waist Skinny Jean</h4>
                            <div className="d-flex flex-wrap justify-content-between">
                                <p className="text-muted fs-18 mb-4"><del>$45.00</del><span className="text-danger ms-2">$30.00</span>
                                </p>
                                <div id="#tab_reviews_product">
                                    <div className="kalles-rating-result">
                                        <span className="kalles-rating-result__pipe">
                                            <span className="kalles-rating-result__start kalles-rating-result__start--big"></span>&nbsp;
                                            <span className="kalles-rating-result__start kalles-rating-result__start--big"></span>&nbsp;
                                            <span className="kalles-rating-result__start kalles-rating-result__start--big"></span>&nbsp;
                                            <span className="kalles-rating-result__start kalles-rating-result__start--big active"></span>&nbsp;
                                            <span className="kalles-rating-result__start kalles-rating-result__start--big de-active"></span>
                                        </span>&nbsp;
                                        <Link href="#!">(06 reviews)</Link>
                                    </div>
                                </div>
                            </div>

                            <p className="text-muted mb-2">
                                Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike.
                                Perfect for pairing with denim and white kicks for a stylish kalles vibe.
                            </p>

                            <div className="pt-2 mb-4 pb-3">
                                <h6 className="text-uppercase fw-bold mt-3">
                                    Size: <span>{size}</span>
                                </h6>
                                <div className="product-color-list size mt-2 gap-2 d-flex align-items-center">
                                    <Link
                                        href="#!"
                                        className={`d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ${size === 'S' ? 'active' : ''}`}
                                        onClick={() => handleSizeClick('S')}
                                    >
                                        S
                                    </Link>
                                    <Link
                                        href="#!"
                                        className={`d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ${size === 'M' ? 'active' : ''}`}
                                        onClick={() => handleSizeClick('M')}
                                    >
                                        M
                                    </Link>
                                    <Link
                                        href="#!"
                                        className={`d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ${size === 'L' ? 'active' : ''}`}
                                        onClick={() => handleSizeClick('L')}
                                    >
                                        L
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap align-items-center gap-2 mt-4">
                                <div className="input-step border border-dark rounded-pill">
                                    <button className="minus material-shadow text-dark fw-bold" onClick={() => handleQuantityChange(-1)}>–</button>
                                    <input type="number" className="product-quantity fw-bold fs-6" value={quantity} min="0" max="100" onChange={handleChange} />
                                    <button className="plus material-shadow text-dark fw-bold" onClick={() => handleQuantityChange(1)}>+</button>
                                </div>
                                <Button variant="teal" className="text-uppercase rounded-pill min-w-150" onClick={handleShoppingShow}>
                                    Add to Cart
                                </Button>

                                <div className="product_wishlist square-40 rounded-circle border border-dark bg-transparent text-center" style={{ lineHeight: '40px' }}>
                                    <div><i className="facl facl-heart-o"></i></div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Image src={trust} alt="" className="img-fluid" />
                            </div>

                            <div className="mt-4 d-flex gap-3 text-nowrap flex-wrap row-gap-1">
                                <Link href="#sizeGuidModal" data-bs-toggle="modal" className="text-black fw-semibold" onClick={handleShow}>Size Guide</Link>
                                <Link href="#deliveyReturnModal" data-bs-toggle="modal" className="text-black fw-semibold mx-2" onClick={handleShow2}>Delivery and Return</Link>
                                <Link href="#askQuesitionModal" data-bs-toggle="modal" className="text-black fw-semibold" onClick={handleShow3}>Ask a
                                    Question</Link>
                            </div>

                            <div className="mt-4">
                                <p className="mb-2"><span>SKU :</span><span className="text-muted"> P15-2</span></p>
                                <p className="mb-2">
                                    <span>Categories:</span>
                                    <span className="text-muted">
                                        <Link href="#!" className="text-muted"> All, </Link>
                                        <Link href="#!" className="text-muted">Best seller, </Link>
                                        <Link href="#!" className="text-muted">Bottom, </Link>
                                        <Link href="#!" className="text-muted">Dress, </Link>
                                        <Link href="#!" className="text-muted">New Arrival, </Link>
                                        <Link href="#!" className="text-muted">Women</Link>
                                    </span>
                                </p>
                                <p className="mb-2">
                                    <span>Tags :</span>
                                    <span className="text-muted">
                                        <Link href="#!" className="text-muted"> Color Black, </Link>
                                        <Link href="#!" className="text-muted">Color Grey, </Link>
                                        <Link href="#!" className="text-muted">Color Pink, </Link>
                                        <Link href="#!" className="text-muted">Price $7-$50, </Link>
                                        <Link href="#!" className="text-muted">Size L, </Link>
                                        <Link href="#!" className="text-muted">Size M, </Link>
                                        <Link href="#!" className="text-muted">Size S,</Link>
                                    </span>
                                </p>
                            </div>

                            <div className="social-share mt-5">
                                <div className="d-flex align-items-center gap-2">
                                    <Link href="https://www.facebook.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                            <g>
                                                <path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fillRule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </Link>
                                    <Link href="https://twitter.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                            <g>
                                                <path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fillRule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </Link>
                                    <Link href="https://www.google.com/gmail/about">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                            <g>
                                                <g fillRule="evenodd"></g>
                                                <path d="M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z">
                                                </path>
                                                <path d="M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z">
                                                </path>
                                            </g>
                                        </svg>
                                    </Link>
                                    <Link href="https://www.pinterest.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                            <g>
                                                <path d="M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z" fillRule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </Link>
                                    <Link href="https://www.messenger.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                            <g>
                                                <path d="M16 6C9.925 6 5 10.56 5 16.185c0 3.205 1.6 6.065 4.1 7.932V28l3.745-2.056c1 .277 2.058.426 3.155.426 6.075 0 11-4.56 11-10.185C27 10.56 22.075 6 16 6zm1.093 13.716l-2.8-2.988-5.467 2.988 6.013-6.383 2.868 2.988 5.398-2.987-6.013 6.383z" fillRule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>

                <div className="container mt-4">
                    <div>
                        <div>
                            <h5 className="mb-4">Frequently Bought Together</h5>
                        </div>
                        <div>
                            <form method="" action="#" id="">
                                <Row className="align-items-center mb-5">
                                    <Col xl={6}>
                                        <ul className="list-unstyled m-0 p-0 d-flex flex-wrap align-items-center gap-2">
                                            <li className="d-inline-block">
                                                <Link href="/product-detail-layout-01">
                                                    <Image src={pro1} alt="" style={{ width: "115px", height: "147px", objectFit: "cover" }} />
                                                </Link>
                                            </li>
                                            <li className="d-inline-block fs-4 text-muted">
                                                +
                                            </li>
                                            <li className="d-inline-block">
                                                <Link href="/product-detail-layout-01">
                                                    <Image src={pro2} alt="" style={{ width: "115px", height: "147px", objectFit: "cover" }} />
                                                </Link>
                                            </li>
                                            <li className="d-inline-block fs-4 text-muted">
                                                +
                                            </li>
                                            <li className="d-inline-block">
                                                <Link href="/product-detail-layout-01">
                                                    <Image src={pro3} alt="" style={{ width: "115px", height: "147px", objectFit: "cover" }} />
                                                </Link>
                                            </li>
                                            <li className="d-inline-block fs-4 text-muted">
                                                +
                                            </li>
                                            <li className="d-inline-block">
                                                <Link href="/product-detail-layout-01">
                                                    <Image src={pro4} alt="" style={{ width: "115px", height: "147px", objectFit: "cover" }} />
                                                </Link>
                                            </li>
                                        </ul>
                                    </Col>
                                    <div className="col-xl-6 mt-4 mt-xl-0">
                                        <p className="text-muted fs-18">
                                            <span className="fs-14">Total price:</span><span><del>$117.00</del> <span className="text-danger">$75.50</span></span>
                                        </p>
                                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCartOffcanvas" aria-controls="shoppingCartOffcanvas" className="btn btn-teal rounded-pill text-uppercase fw-semibold px-4" onClick={handleShoppingShow}>Add selected to
                                            cart</button>
                                    </div>
                                </Row>
                                <div className="row">
                                    <div className="col-12">
                                        <ul className="list-unstyled m-0 p-0 vstack gap-3">
                                            <li className="d-flex flex-wrap align-items-center">
                                                <input type="checkbox" defaultChecked className="form-check-input checkbox-product me-2" id="kl_fbt_ck_1" />

                                                <span className="text-muted"><strong>This item:</strong> Striped Long Sleeve
                                                    Top</span>
                                                <select className="form-select w-auto d-inline-block ps-2 pe-4 py-1 mx-2" style={{ backgroundPosition: "right .5rem center; background-size: 12px 10px" }}>
                                                    <option defaultValue="Black">Black / S</option>
                                                    <option>Black / M</option>
                                                    <option >Black / L</option>
                                                </select>
                                                <span className="text-muted"><del>$45.00</del> <span className="text-danger">$20.00</span></span>
                                            </li>
                                            <li>
                                                <input type="checkbox" defaultChecked className="form-check-input checkbox-product me-2" id="kl_fbt_ck_2" />

                                                <Link href="/product-detail-layout-01">Ritson Original Mom Jeans</Link>
                                                <span className="text-danger">$22.00</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" defaultChecked className="form-check-input checkbox-product me-2" id="kl_fbt_ck_3" />

                                                <Link href="/product-detail-layout-01">Organza Hair Scrunchie</Link>
                                                <span className="text-muted"><del>$5.00</del> <span className="text-danger">$3.50</span></span>
                                            </li>
                                            <li className="d-flex flex-wrap align-items-center">
                                                <input type="checkbox" defaultChecked className="form-check-input checkbox-product me-2" id="kl_fbt_ck_4" />

                                                <Link href="/product-detail-layout-01">Retro Lace Up Sneakers</Link>
                                                <select className="form-select product-form-select w-auto d-inline-block ps-2 pe-4 py-1 mx-2" style={{ backgroundPosition: "right .5rem center; background-size: 12px 10px" }}>
                                                    <option defaultValue="UK 2">UK 2</option>
                                                    <option >UK 3</option>
                                                    <option >UK 4</option>
                                                </select>
                                                <span className="text-muted"><del>$45.00</del> <span className="text-danger">$30.00</span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ShoppingCardModal shoppingShow={shoppingShow} handleShoppingClose={handleShoppingClose} />
                <SizeGuideModal show={show} handleClose={handleClose} />
                <DeliveryAndReturnModal show2={show2} handleClose2={handleClose2} />
                <Question show3={show3} handleClose3={handleClose3} />
            </section >
        </React.Fragment>
    )
}
export default ProductSwiper;