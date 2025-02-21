import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link';

import pro1 from "@assets/images/products/pr-01.jpg"
import pro2 from "@assets/images/products/pr-02.jpg"
import pro4 from "@assets/images/products/pr-04.jpg"
import pro5 from "@assets/images/products/pr-05.jpg"
import pro6 from "@assets/images/products/pr-06.jpg"
import pro7 from "@assets/images/products/pr-07.jpg"
import pro8 from "@assets/images/products/pr-08.jpg"
import pro9 from "@assets/images/products/pr-09.jpg"
import pro14 from "@assets/images/products/pr-14.jpg"
import pro15 from "@assets/images/products/pr-15.jpg"
import pro17 from "@assets/images/products/pr-17.jpg"
import pro18 from "@assets/images/products/pr-18.jpg"
import pro25 from "@assets/images/products/pr-25.png"
import pro26 from "@assets/images/products/pr-26.png"
import pro27 from "@assets/images/products/pr-27.jpg"
import pro28 from "@assets/images/products/pr-28.jpg"
import pro31 from "@assets/images/products/pr-31.jpg"
import pro32 from "@assets/images/products/pr-32.jpg"
import pro33 from "@assets/images/products/pr-33.jpg"
import pro34 from "@assets/images/products/pr-34.jpg"

import metro1 from "@assets/images/home-metro/pr-q1.jpg"
import metro2 from "@assets/images/home-metro/pr-q2.jpg"

import ProductModal from '@src/commonsections/ProductModal';
import AddToCardModal from '@src/commonsections/AddToCardModal';
import 'flickity/css/flickity.css';

const Trending = () => {

    // first row
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const [imageUrl, setImageUrl] = useState(pro4);
    const [imageUrl1, setImageUrl1] = useState(pro6);

    // second row
    const [imageUrl3, setImageUrl3] = useState(pro15);
    const [isHovered3, setIsHovered3] = useState(false);

    const [isHovered4, setIsHovered4] = useState(false);

    const [isHovered5, setIsHovered5] = useState(false);

    const [isHovered6, setIsHovered6] = useState(false);

    const flickityRef = useRef<Flickity | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Initialize Flickity
            const FlickityClass = require('flickity');
            flickityRef.current = new FlickityClass('.tranding-card', {
                cellAlign: 'left',
                imagesLoaded: 0,
                wrapAround: false,
                autoPlay: 0,
                pauseAutoPlayOnHover: true,
                rightToLeft: false,
                prevNextButtons: true,
                pageDots: false,
                contain: 1,
                adaptiveHeight: 1,
                groupCells: '100%',
                dragThreshold: 5,
                percentPosition: 1,
            });
            // Initialize AOS (Animate On Scroll)
            // AOS.init();
        }

        // Cleanup Flickity on unmount
        return () => {
            if (flickityRef.current) {
                flickityRef.current.destroy();
            }
        };
    }, []);

    const [show, setShow] = useState(false);
    const [cardShow, setCardShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddToCardModalShow = () => setCardShow(true);
    const handleAddToCardModalClose = () => setCardShow(false);

    return (
        <React.Fragment>
            <section>
                <Container dir="ltr">
                    <Row className="justify-content-center ">
                        <Col lg={7}>
                            <div className="text-center">
                                <div className="mb-2">
                                    <h3 className="section-title position-relative flex">
                                        <span>TRENDING</span>
                                    </h3>
                                </div>
                                <span className="section-subtitle sub-title font-secondary fst-italic fs-14 text-muted">Top view in
                                    this week</span>
                            </div>
                        </Col>
                    </Row>

                    <Row className='my-4 py-2 tranding-card'>
                        {/* first row */}
                        <Col md={3} className="col-6 px-lg-12 px-2">
                            <div
                                className="topbar-product-card pb-3"
                                onMouseEnter={() => setIsHovered1(true)}
                                onMouseLeave={() => setIsHovered1(false)}
                            >
                                <div className="position-relative overflow-hidden">
                                    <span className="new-label bg-success text-white rounded-circle text-center">New</span>
                                    <Image
                                        src={isHovered1 ? pro2 : pro1}
                                        alt=""
                                        className="img-fluid w-100 object-fit-cover"
                                        style={{ zIndex: 1 }}
                                    />
                                    <Link
                                        href="#"
                                        className="d-lg-none position-absolute"
                                        style={{ zIndex: 1, top: '10px', left: '10px' }}
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="wishlistadd d-none d-lg-flex position-absolute"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>

                                    <div className="product-button d-none d-lg-flex flex-column gap-2">
                                        <Link href="#exampleModal" data-bs-toggle="modal" className="btn rounded-pill fs-14" onClick={handleShow}>
                                            <span>Quick View</span> <i className="iccl iccl-eye"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn rounded-pill fs-14"
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <span>Quick Shop</span>
                                            <i className="iccl iccl-cart"></i>
                                        </button>
                                    </div>

                                    <div
                                        className="position-absolute d-lg-none bottom-0 end-0 d-flex flex-column bg-white rounded-pill m-2"
                                        style={{ zIndex: 1 }}
                                    >
                                        <Link
                                            href="#exampleModal"
                                            data-bs-toggle="modal"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            onClick={handleShow}
                                        >
                                            <i className="iccl iccl-eye fw-semibold"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <i className="iccl iccl-cart fw-semibold"></i>
                                        </button>
                                    </div>

                                    <p className="product-size mb-0 text-center text-white fw-medium">XS, S, M, L, XL</p>
                                </div>

                                <Link href="/product-detail-layout-01" className="mt-3 d-block">
                                    <h6 className="mb-1">Analogue Resin Strap</h6>
                                    <p className="mb-0 fs-14 text-muted">
                                        <span>$30.00</span>
                                    </p>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3} className="col-6 px-lg-12 px-2">
                            <div
                                className="topbar-product-card pb-3"
                                onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)}
                            >
                                <div className="position-relative overflow-hidden">
                                    <Image
                                        src={isHovered2 ? pro34 : pro33}
                                        alt=""
                                        className="img-fluid w-100 object-fit-cover"
                                    />
                                    <Link
                                        href="#"
                                        className="d-lg-none position-absolute"
                                        style={{ zIndex: 1, top: '10px', left: '10px' }}
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="wishlistadd d-none d-lg-flex position-absolute"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>

                                    <div className="product-button d-none d-lg-flex flex-column gap-2">
                                        <Link href="#exampleModal" data-bs-toggle="modal" className="btn rounded-pill fs-14" onClick={handleShow}>
                                            <span>Quick View</span> <i className="iccl iccl-eye"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn rounded-pill fs-14"
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <span>Quick Shop</span>
                                            <i className="iccl iccl-cart"></i>
                                        </button>
                                    </div>

                                    <div
                                        className="position-absolute d-lg-none bottom-0 end-0 d-flex flex-column bg-white rounded-pill m-2"
                                        style={{ zIndex: 1 }}
                                    >
                                        <Link
                                            href="#exampleModal"
                                            data-bs-toggle="modal"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            onClick={handleShow}
                                        >
                                            <i className="iccl iccl-eye fw-semibold"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <i className="iccl iccl-cart fw-semibold"></i>
                                        </button>
                                    </div>

                                    <p className="product-size mb-0 text-center text-white fw-medium">S, M, L</p>
                                </div>

                                <Link href="/product-detail-layout-01" className="mt-3 d-block">
                                    <h6 className="mb-1">Ridley High Waist</h6>
                                    <p className="mb-0 fs-14 text-muted">
                                        <span>$36.00</span>
                                    </p>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3} className="col-6 px-lg-12 px-2">
                            <div className="topbar-product-card pb-3">
                                <div className="position-relative overflow-hidden">
                                    <Image src={imageUrl} alt="" className="img-fluid w-100 object-fit-cover" />
                                    <Link
                                        href="#"
                                        className="d-lg-none position-absolute"
                                        style={{ zIndex: 1, top: '10px', left: '10px' }}
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="wishlistadd d-none d-lg-flex position-absolute"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>

                                    <div className="product-button d-none d-lg-flex flex-column gap-2">
                                        <Link href="#exampleModal" className="btn rounded-pill fs-14" data-bs-toggle="modal" onClick={handleShow}>
                                            <span>Quick View</span> <i className="iccl iccl-eye"></i>
                                        </Link>
                                        <button type="button" className="btn rounded-pill fs-14" data-bs-toggle="modal" data-bs-target="#cardModal" onClick={handleAddToCardModalShow}>
                                            <span>Quick Shop</span>
                                            <i className="iccl iccl-cart"></i>
                                        </button>
                                    </div>

                                    <div className="position-absolute d-lg-none bottom-0 end-0 d-flex flex-column bg-white rounded-pill m-2"
                                        style={{ zIndex: 1 }}>
                                        <Link
                                            href="#exampleModal"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            onClick={handleShow}
                                        >
                                            <i className="iccl iccl-eye fw-semibold"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <i className="iccl iccl-cart fw-semibold"></i>
                                        </button>
                                    </div>

                                    <p className="product-size mb-0 text-center text-white fw-medium">S, M, L</p>
                                </div>

                                <div className="mt-3">
                                    <h6 className="mb-1">
                                        <Link href="#!" className="product-title">
                                            Blush Beanie
                                        </Link>
                                    </h6>
                                    <p className="mb-0 fs-14 text-muted">
                                        <span>$15.00</span>
                                    </p>
                                    <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
                                        <Link
                                            href="#!"
                                            onMouseOver={() => setImageUrl(pro5)}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setImageUrl(pro5);
                                            }}
                                            className="d-inline-block bg-body-tertiary rounded-circle"
                                        ></Link>
                                        <Link
                                            href="#!"
                                            onMouseOver={() => setImageUrl(pro31)}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setImageUrl(pro31);
                                            }}
                                            className="d-inline-block bg_color_pink rounded-circle"
                                        ></Link>
                                        <Link
                                            href="#!"
                                            onMouseOver={() => setImageUrl(pro32)}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setImageUrl(pro32);
                                            }}
                                            className="d-inline-block bg-dark rounded-circle"
                                        ></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="col-6 px-lg-12 px-2">
                            <div className="topbar-product-card pb-3">
                                <div className="position-relative overflow-hidden">
                                    <span className="new-label bg-danger text-white rounded-circle"> -25% </span>
                                    <Image src={imageUrl1} alt="" className="img-fluid w-100 object-fit-cover" />
                                    <Link
                                        href="#"
                                        className="d-lg-none position-absolute"
                                        style={{ zIndex: 1, top: '10px', left: '10px' }}
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="wishlistadd d-none d-lg-flex position-absolute"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>

                                    <div className="product-button d-none d-lg-flex flex-column gap-2">
                                        <Link href="#exampleModal" className="btn rounded-pill fs-14" data-bs-toggle="modal" onClick={handleShow}>
                                            <span>Quick View</span> <i className="iccl iccl-eye"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn rounded-pill fs-14"
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <span>Quick Shop</span>
                                            <i className="iccl iccl-cart"></i>
                                        </button>
                                    </div>

                                    <div
                                        className="position-absolute d-lg-none bottom-0 end-0 d-flex flex-column bg-white rounded-pill m-2"
                                        style={{ zIndex: 1 }}
                                    >
                                        <Link
                                            href="#exampleModal"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            onClick={handleShow}
                                        >
                                            <i className="iccl iccl-eye fw-semibold"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <i className="iccl iccl-cart fw-semibold"></i>
                                        </button>
                                    </div>

                                    <p className="product-size mb-0 text-center text-white fw-medium">XS, S, M</p>
                                </div>

                                <div className="mt-3">
                                    <h6 className="mb-1">
                                        <Link href="#!" className="product-title">
                                            Cluse La Boheme Rose Gold
                                        </Link>
                                    </h6>
                                    <p className="mb-0 fs-14 text-muted">
                                        <del>$60.00</del>
                                        <span className="text-danger">$45.00</span>
                                    </p>
                                    <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
                                        <Link
                                            href="#!"
                                            onMouseOver={() => setImageUrl1(pro7)}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setImageUrl1(pro7);
                                            }}
                                            className="d-inline-block bg_color_green rounded-circle"
                                        ></Link>
                                        <Link
                                            href="#!"
                                            onMouseOver={() => setImageUrl1(pro8)}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setImageUrl1(pro8);
                                            }}
                                            className="d-inline-block bg-body-secondary rounded-circle"
                                        ></Link>
                                        <Link
                                            href="#!"
                                            onMouseOver={() => setImageUrl1(pro9)}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setImageUrl1(pro9);
                                            }}
                                            className="d-inline-block bg_color_blue rounded-circle"
                                        ></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* second row */}
                        <Col md={3} className="col-6 px-lg-12 px-2">
                            <div
                                className="topbar-product-card pb-3"
                                onMouseEnter={() => setIsHovered3(true)}
                                onMouseLeave={() => setIsHovered3(false)}
                            >
                                <div className="position-relative overflow-hidden">
                                    <Image
                                        src={isHovered3 ? pro14 : imageUrl3}
                                        alt=""
                                        className="img-fluid w-100 object-fit-cover"
                                    />
                                    <Link
                                        href="#"
                                        className="d-lg-none position-absolute"
                                        style={{ zIndex: 1, top: '10px', left: '10px' }}
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="wishlistadd d-none d-lg-flex position-absolute"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>

                                    <div className="bg-overlay"></div>
                                    <div className="product-button d-none d-lg-flex flex-column gap-2">
                                        <Link href="#exampleModal" className="btn rounded-pill fs-14" data-bs-toggle="modal" onClick={handleShow}>
                                            <span>Quick View</span> <i className="iccl iccl-eye"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn rounded-pill fs-14"
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <span>Quick Shop</span>
                                            <i className="iccl iccl-cart"></i>
                                        </button>
                                    </div>

                                    <div
                                        className="position-absolute d-lg-none bottom-0 end-0 d-flex flex-column bg-white rounded-pill m-2"
                                        style={{ zIndex: 1 }}
                                    >
                                        <Link
                                            href="#exampleModal"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            onClick={handleShow}
                                        >
                                            <i className="iccl iccl-eye fw-semibold"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <i className="iccl iccl-cart fw-semibold"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <h6 className="mb-1">
                                        <Link href="#!" className="product-title">
                                            Mercury Tee
                                        </Link>
                                    </h6>
                                    <p className="mb-0 fs-14 text-muted">
                                        <span className="text-muted">$68.00</span>
                                    </p>
                                    <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
                                        <Link
                                            href="#!"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setImageUrl3(metro1);
                                                setIsHovered3(false);
                                            }}
                                            style={{ backgroundImage: `url(${metro1.src})`, backgroundSize: 'cover' }}
                                            className="d-inline-block bg-body-tertiary rounded-circle"
                                        ></Link>
                                        <Link
                                            href="#!"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setImageUrl3(metro2);
                                                setIsHovered3(false);
                                            }}
                                            style={{ backgroundImage: `url(${metro2.src})`, backgroundSize: 'cover' }}
                                            className="d-inline-block bg_color_pink rounded-circle"
                                        ></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="col-6 px-lg-12 px-2">
                            <div
                                className="topbar-product-card pb-3"
                                onMouseEnter={() => setIsHovered4(true)}
                                onMouseLeave={() => setIsHovered4(false)}
                            >
                                <div className="position-relative overflow-hidden">
                                    <span className="new-label bg-danger text-white rounded-circle"> -34% </span>
                                    <Image
                                        src={isHovered4 ? pro28 : pro27}
                                        alt=""
                                        className="img-fluid w-100 object-fit-cover"
                                    />
                                    <Link
                                        href="#"
                                        className="d-lg-none position-absolute"
                                        style={{ zIndex: 1, top: '10px', left: '10px' }}
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="wishlistadd d-none d-lg-flex position-absolute"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>

                                    <div className="bg-overlay"></div>
                                    <div className="product-button d-none d-lg-flex flex-column gap-2">
                                        <Link href="#exampleModal" className="btn rounded-pill fs-14" data-bs-toggle="modal" onClick={handleShow}>
                                            <span>Quick View</span> <i className="iccl iccl-eye"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn rounded-pill fs-14"
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <span>Quick Shop</span>
                                            <i className="iccl iccl-cart"></i>
                                        </button>
                                    </div>

                                    <div
                                        className="position-absolute d-lg-none bottom-0 end-0 d-flex flex-column bg-white rounded-pill m-2"
                                        style={{ zIndex: 1 }}
                                    >
                                        <Link
                                            href="#exampleModal"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            onClick={handleShow}
                                        >
                                            <i className="iccl iccl-eye fw-semibold"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <i className="iccl iccl-cart fw-semibold"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <h6 className="mb-1">
                                        <Link href="#!" className="product-title">
                                            Mercury Tee
                                        </Link>
                                    </h6>
                                    <p className="mb-0 fs-14 text-muted">
                                        <span className="text-muted">$68.00</span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="col-6 px-lg-12 px-2">
                            <div
                                className="topbar-product-card pb-3"
                                onMouseEnter={() => setIsHovered5(true)}
                                onMouseLeave={() => setIsHovered5(false)}
                            >
                                <div className="position-relative overflow-hidden">
                                    <Image
                                        src={isHovered5 ? pro17 : pro18}
                                        alt=""
                                        className="img-fluid w-100 object-fit-cover"
                                    />
                                    <Link
                                        href="#"
                                        className="d-lg-none position-absolute"
                                        style={{ zIndex: 1, top: '10px', left: '10px' }}
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="wishlistadd d-none d-lg-flex position-absolute"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>

                                    <div className="product-button d-none d-lg-flex flex-column gap-2">
                                        <Link href="#exampleModal" className="btn rounded-pill fs-14" data-bs-toggle="modal" onClick={handleShow}>
                                            <span>Quick View</span> <i className="iccl iccl-eye"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn rounded-pill fs-14"
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <span>Quick Shop</span>
                                            <i className="iccl iccl-cart"></i>
                                        </button>
                                    </div>

                                    <div
                                        className="position-absolute d-lg-none bottom-0 end-0 d-flex flex-column bg-white rounded-pill m-2"
                                        style={{ zIndex: 1 }}
                                    >
                                        <Link
                                            href="#exampleModal"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            onClick={handleShow}
                                        >
                                            <i className="iccl iccl-eye fw-semibold"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <i className="iccl iccl-cart fw-semibold"></i>
                                        </button>
                                    </div>
                                    <p className="product-size mb-0 text-center text-white fw-medium">S, M, L</p>
                                </div>

                                <Link href="/product-detail-layout-01" className="mt-3 d-block">
                                    <h6 className="mb-1">Cream Women Pants</h6>
                                    <p className="mb-0 fs-14 text-muted">
                                        <span>$35.00</span>
                                    </p>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3} className="col-6 px-lg-12 px-2">
                            <div
                                className="topbar-product-card pb-3"
                                onMouseEnter={() => setIsHovered6(true)}
                                onMouseLeave={() => setIsHovered6(false)}
                            >
                                <div className="position-relative overflow-hidden">
                                    <Image
                                        src={isHovered6 ? pro26 : pro25}
                                        alt=""
                                        className="img-fluid w-100 object-fit-cover"
                                    />
                                    <Link
                                        href="#"
                                        className="d-lg-none position-absolute"
                                        style={{ zIndex: 1, top: '10px', left: '10px' }}
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="wishlistadd d-none d-lg-flex position-absolute"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add to Wishlist"
                                    >
                                        <i className="facl facl-heart-o text-white"></i>
                                    </Link>

                                    <div className="product-button d-none d-lg-flex flex-column gap-2">
                                        <Link href="#exampleModal" className="btn rounded-pill fs-14" data-bs-toggle="modal" onClick={handleShow}>
                                            <span>Quick View</span> <i className="iccl iccl-eye"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn rounded-pill fs-14"
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <span>Quick Shop</span>
                                            <i className="iccl iccl-cart"></i>
                                        </button>
                                    </div>

                                    <div
                                        className="position-absolute d-lg-none bottom-0 end-0 d-flex flex-column bg-white rounded-pill m-2"
                                        style={{ zIndex: 1 }}
                                    >
                                        <Link
                                            href="#exampleModal"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            onClick={handleShow}
                                        >
                                            <i className="iccl iccl-eye fw-semibold"></i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn responsive-cart rounded-pill fs-14 p-2"
                                            style={{ width: '36px', height: '36px' }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#cardModal"
                                            onClick={handleAddToCardModalShow}
                                        >
                                            <i className="iccl iccl-cart fw-semibold"></i>
                                        </button>
                                    </div>
                                    <p className="product-size mb-0 text-center text-white fw-medium">S, M, L</p>
                                </div>

                                <Link href="/product-detail-layout-01" className="mt-3 d-block">
                                    <h6 className="mb-1">Black Mountain Hat</h6>
                                    <p className="mb-0 fs-14 text-muted">
                                        <span>$50.00</span>
                                    </p>
                                </Link>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>

            <ProductModal show={show} handleClose={handleClose} />
            <AddToCardModal cardShow={cardShow} handleAddToCardModalClose={handleAddToCardModalClose} />
        </React.Fragment>
    )
}

export default Trending