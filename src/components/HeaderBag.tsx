import React, { useState, useRef, useEffect } from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import LoginModal from '@src/components/Headers/LoginModal';
import SearchModal from '@src/components/Headers/SearchModal';
import ShoppingCardModal from '@src/commonsections/ShoppingCardModal';
import MainModel from '@src/commonsections/MainModel';

import Image from 'next/image'
import AUD from '@assets/images/svg/aud.svg'
import CAD from '@assets/images/svg/cad.svg'
import DKK from '@assets/images/svg/dkk.svg'
import EUR from '@assets/images/svg/eur.svg'
import GBP from '@assets/images/svg/gbp.svg'
import HKD from '@assets/images/svg/hkd.svg'
import JPY from '@assets/images/svg/jpy.svg'
import NZD from '@assets/images/svg/nzd.svg'
import SGD from '@assets/images/svg/sgd.svg'
import USD from '@assets/images/svg/usd.svg'
import logo from '@assets/images/svg/kalles.svg'
import Link from 'next/link'
import { Features, HeaderLayout, HomePage1, HomePage2, ShopPage, ShopFeatures, ProductLayout, ProductDetail, ProductSwatch, ProductFeatures, Portfolio, Lookbook, Blog } from '@src/common/Header/header'

import banner from "@assets/images/home-bags/mega-banner-01.jpg"

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import MobileHeader from './Headers/MobileHeader';
import { salesSwiperBag } from '@src/common/Header/headerbag';
import ProductModal from '@src/commonsections/ProductModal';
import AddToCardModal from '@src/commonsections/AddToCardModal';

const country = [
    {
        name: "AUD",
        image: AUD
    },
    {
        name: "CAD",
        image: CAD
    },
    {
        name: "DKK",
        image: DKK
    },
    {
        name: "EUR",
        image: EUR
    },
    {
        name: "GBP",
        image: GBP
    },
    {
        name: "HKD",
        image: HKD
    },
    {
        name: "JPY",
        image: JPY
    },
    {
        name: "NZD",
        image: NZD
    },
    {
        name: "SGD",
        image: SGD
    },
    {
        name: "USD",
        image: USD
    },
]

const HeaderCard = ({ product }: String | any) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageUrl, setImageUrl] = useState(product.imageUrl);

    const [show, setShow] = useState(false);
    const [cardShow, setCardShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddToCardModalShow = () => setCardShow(true);
    const handleAddToCardModalClose = () => setCardShow(false);

    return (
        <>
            <div className="topbar-product-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="position-relative overflow-hidden">
                    <Image src={isHovered ? product.hoverImageUrl : imageUrl} alt="" className="img-fluid" />
                    <Link href="#" className="wishlistadd position-absolute" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add to Wishlist">
                        <i className="facl facl-heart-o"></i>
                    </Link>
                    <div className="product-button d-none d-lg-flex flex-column gap-2">
                        <Link href="#exampleModal" onClick={handleShow} data-bs-toggle="modal" className="btn rounded-pill fs-14"><span>Quick View</span> <i className="iccl iccl-eye"></i></Link>
                        <button type="button" className="btn rounded-pill fs-14" data-bs-toggle="modal" data-bs-target="#cardModal" onClick={handleAddToCardModalShow}>
                            <span>Quick Shop</span> <i className="iccl iccl-cart"></i>
                        </button>
                    </div>
                    <div className="position-absolute d-lg-none bottom-0 end-0 d-flex flex-column bg-white rounded-pill m-2" style={{ zIndex: 1, boxShadow: '1px 1px 1px rgba(0, 0, 0, .1)' }}>
                        <Link href="#exampleModal" onClick={handleShow} data-bs-toggle="modal" className="btn responsive-cart rounded-pill fs-14 p-2" style={{ width: 36, height: 36 }}>
                            <i className="iccl iccl-eye fw-semibold"></i>
                        </Link>
                        <button type="button" className="btn responsive-cart rounded-pill fs-14 p-2" style={{ width: 36, height: 36 }} data-bs-toggle="modal" data-bs-target="#cardModal" onClick={handleAddToCardModalShow}>
                            <i className="iccl iccl-cart fw-semibold"></i>
                        </button>
                    </div>
                </div>
                <div className="mt-3">
                    <h6 className="mb-1 fs-16 fw-medium">
                        <Link href={product.productDetailLink} className="main_link_red">{product.title}</Link>
                    </h6>
                    <p className="mb-0 fs-15 text-muted">
                        <span>{product.price}</span>
                    </p>
                    {product.colorOptions && (
                        <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
                            {product.colorOptions.map((color: any, index: number) => (
                                <Link key={index} href="#!" onClick={(e) => { e.preventDefault(); setImageUrl(color.imageUrl); setIsHovered(false); }} className={`d-inline-block rounded-circle ${color.color}`}>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <ProductModal show={show} handleClose={handleClose} />
            <AddToCardModal cardShow={cardShow} handleAddToCardModalClose={handleAddToCardModalClose} />
        </>
    )
}


const HeaderBag = () => {

    const headerRef = useRef(null)
    const [headerShow, setHeaderShow] = useState(false)

    const [isStickyActive, setIsStickyActive] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const [show, setShow] = useState<number | any>(null)
    const [searchShow, setSearchShow] = useState(false);

    const [loginShow, setLoginShow] = useState(false);

    const [shoppingShow, setShoppingShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop < lastScrollTop && scrollTop > 400) {
                setIsStickyActive(true);
            } else {
                setIsStickyActive(false);
            }

            setLastScrollTop(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const handleClick = (id: any) => {
        if (show === id) {
            setShow(null)
        } else {
            setShow(id)
        }
    }

    const handleClickOutside = (event: any) => {
        if (
            headerRef.current &&
            !event.target.closest('.demo')
        ) {
            setShow(null)

        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const handleHeader = () => {
        setHeaderShow(!headerShow)
    }
    const handleHeaderClose = () => setHeaderShow(false)

    const handleClose = () => setSearchShow(false);
    const handleShow = () => setSearchShow(true);
    const handleLoginClose = () => setLoginShow(false);

    const handleLoginShow = () => {
        setLoginShow(true);
        setHeaderShow(false);
    }
    const handleShoppingClose = () => setShoppingShow(false);
    const handleShoppingShow = () => setShoppingShow(true);

    return (
        <React.Fragment>
            <MainModel />
            <div id="kalles-section-header_top" className='navbar-dark demo' ref={headerRef}>
                <div className="h__top d-flex align-items-center">
                    <Container>
                        <Row className="align-items-center justify-content-center py-3 py-xl-0">
                            <Col md={5} lg={4} className="d-none d-md-block">
                                <div className="d-flex align-items-xl-center justify-content-center justify-content-md-start gap-3">
                                    <Link href="tel:+0123456789" className="mb-0 text-muted">
                                        <i className="pegk pe-7s-call fs-14 me-1 align-middle"></i> +01 23456789
                                    </Link>
                                    <Link href="mailto:Kalles@domain.com" className="mb-0 text-muted">
                                        <i className="pe-7s-mail pegk fs-14 me-1 align-middle"></i> Kalles@domain.com
                                    </Link>
                                </div>
                            </Col>
                            <Col md={5} lg={4} sm={12}>
                                <div className="header-text text-center fs-12 py-1 py-lg-0">
                                    Summer sale discount off <span className="cr">50%</span>! <Link href="/shop" className="text-reset">Shop Now</Link>
                                </div>
                            </Col>
                            <Col md={2} lg={4} sm={12}>
                                <div className="text-md-end text-center position-relative header-dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="link" className="fs-12 text-reset currency-button p-0" id="dropdown-currency">
                                            <Image src={USD} alt="" height="12" className="me-1" /> USD <i className="facl facl-angle-down ms-1"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="p-3 dropdown-currency">
                                            {
                                                country.map((item: any, index: number) => {
                                                    return (
                                                        <Dropdown.Item href="#!" key={index}>
                                                            <Image src={item.image} alt="" height="12" className="me-1" /> {item.name}
                                                        </Dropdown.Item>
                                                    )
                                                })
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <nav className={`navbar navbar-expand-lg navbar-custom py-0 d-flex align-items-center ${isStickyActive === true ? 'headerFixed' : ""}`}>
                    <div className="container">
                        <Link className="d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={handleHeader}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                                <rect width="30" height="1.5"></rect>
                                <rect y="7" width="20" height="1.5"></rect>
                                <rect y="14" width="30" height="1.5"></rect>
                            </svg>
                        </Link>

                        <Link className="navbar-brand" href="/index">
                            <Image src={logo} alt="" width="95" />
                        </Link>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-none d-lg-block mx-auto">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown dropdown-mega-xxl">
                                        <span className={`nav-link ${show === 1 ? "show" : ""}`}  data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(1)}>
                                            Demo
                                        </span>
                                        <div className={`dropdown-menu ${show === 1 ? "show" : ""}`}>
                                            <Row>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="#" className="dropdown-menu-title">Home Pages</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                HomePage1.map((item: any, index: number) => {
                                                                    return (
                                                                        <li key={index}><Link className="text-muted position-relative d-inline-flex" href={item.link}> {item.label} <span className={item.badgeColor}>{item.badge}</span></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/home-default" className="dropdown-menu-title">Home
                                                            Pages</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                HomePage2.map((item: any, index: number) => {
                                                                    return (
                                                                        <li key={index}><Link className="text-muted position-relative d-inline-flex" href={item.link}> {item.label} <span className={item.badgeColor}>{item.badge}</span></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/home-default" className="dropdown-menu-title">Header
                                                            Layouts</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                HeaderLayout.map((item: any, index: number) => {
                                                                    return (
                                                                        <li key={index}><Link className="text-muted position-relative d-inline-flex" href={item.link}> {item.label} <span className={item.badgeColor}>{item.badge}</span></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="#!" className="dropdown-menu-title">FEATURES</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                Features.map((item: any, index: any) => {
                                                                    return (
                                                                        <li key={index}><Link className="text-muted position-relative d-inline-flex" href={item.link}> {item.label} <span className={item.badgeColor} style={item.badgeStyle}>{item.badge}</span></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown dropdown-mega-xxl">
                                        <span className={`nav-link position-relative ${show === 2 ? "show" : ""}`}  data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(2)}>
                                            Shop <span className="badge bg-teal fw-normal">New</span>
                                        </span>
                                        <div className={`dropdown-menu p-3 ${show === 2 ? "show" : ""}`}>
                                            <Row className="g-0">
                                                <Col lg={6}>
                                                    <Row className="g-0">
                                                        <Col lg={6}>
                                                            <div className="dropdown-sub-column-item">
                                                                <Link href="/shop-filter-sidebar" className="dropdown-menu-title">SHOP PAGES</Link>
                                                                <ul className="sub-column-menu">
                                                                    {
                                                                        ShopPage.map((item: any, index: number) => {
                                                                            return (
                                                                                <li key={index}>
                                                                                    <Link className="text-muted" href={item.link}>{item.label}</Link>
                                                                                </li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className="dropdown-sub-column-item">
                                                                <Link href="/shop-filter-sidebar" className="dropdown-menu-title">FEATURES</Link>
                                                                <ul className="sub-column-menu">
                                                                    {
                                                                        ShopFeatures.map((item: any, index: number) => {
                                                                            return (
                                                                                <li key={index}><Link className="text-muted position-relative d-inline-flex" href={item.link}>{item.label}
                                                                                    <span className={item.badgeColor}>{item.badge}</span></Link></li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={6} className='cat-section p-4'>
                                                    <Link href="/shop-left-sidebar" className="d-block position-relative cat_grid_item overflow-hidden " style={{ height: "350px" }}>
                                                        <div className="h-100 w-100 cat-grid-img" style={{backgroundImage: `url(${banner.src})`}}></div>
                                                        <div className="cat-grid-button text-body">
                                                            <div className="cat_grid_item__title">Travel & Luggage</div>
                                                        </div>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown dropdown-mega-xxl">
                                        <span className={`nav-link ${show === 3 ? "show" : ""}`} data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(3)}>
                                            Product
                                        </span>
                                        <div className={`dropdown-menu ${show === 3 ? "show" : ""}`}>
                                            <Row className="pe-4">
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/product-detail-layout-01" className="dropdown-menu-title">PRODUCT LAYOUT</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                ProductLayout.map((item: any, index: number) => {
                                                                    return (
                                                                        <li key={index}><Link className="text-muted position-relative d-inline-flex" href={item.link}>
                                                                            {item.label}<span className={item.badgeColor}>{item.badge}</span></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/product-detail-layout-01" className="dropdown-menu-title">PRODUCT DETAIL</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                ProductDetail.map((item: any, index: number) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link className="text-muted position-relative d-inline-flex" href={item.link}>{item.label}
                                                                                <span className={item.homebagbadgeColor}>{item.homebagbadge}</span>
                                                                            </Link>
                                                                        </li>

                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/product-detail-layout-01" className="dropdown-menu-title">PRODUCT SWATCH</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                ProductSwatch.map((item: any, index: number) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link className="text-muted" href={item.link}>{item.label}</Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/product-detail-layout-01" className="dropdown-menu-title">PRODUCT FEATURES</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                ProductFeatures.map((item: any, index: number) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link className="text-muted position-relative d-inline-flex" href={item.link} style={item.badgeStyle}>{item.lable}<span className={item.badgeColor2}>{item.badge2}</span></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown dropdown-mega-3xl">
                                        <span className={`nav-link position-relative text-danger ${show === 4 ? 'show' : ""}`}  data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(4)}>
                                            Sale <span className="badge bg-warning fw-normal">Sale</span>
                                        </span>
                                        <div className={`dropdown-menu ${show === 4 ? "show" : ""}`}>
                                            <Row>
                                                <Col lg={12}>
                                                    <Swiper
                                                        slidesPerView={1}
                                                        spaceBetween={30}
                                                        navigation={{
                                                            nextEl: ".swiper-button-next",
                                                            prevEl: ".swiper-button-prev",
                                                        }}
                                                        breakpoints={{
                                                            640: {
                                                                slidesPerView: 2,
                                                            },
                                                            768: {
                                                                slidesPerView: 3,
                                                            },
                                                            1024: {
                                                                slidesPerView: 4,
                                                            },
                                                        }}
                                                        modules={[Navigation]}
                                                        className='mySwiper'>
                                                        <div className='swiper-wrapper'>
                                                            {salesSwiperBag.map((product: any) => (
                                                                <SwiperSlide key={product.id}>
                                                                    <HeaderCard product={product} />
                                                                </SwiperSlide>
                                                            ))}
                                                        </div>
                                                        <div className="swiper-button-next"></div>
                                                        <div className="swiper-button-prev"></div>
                                                    </Swiper>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>


                                    <li className="nav-item dropdown dropdown-mega-lg">
                                        <span className={`nav-link ${show === 5 ? "show" : ""}`} role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(5)}>
                                            Portfolio
                                        </span>
                                        <ul className={`dropdown-menu dropdown-sub-column ${show === 5 ? "show" : ""}`}>
                                            {
                                                Portfolio.map((item: any, index: number) => {
                                                    return (
                                                        <li key={index}><Link className="text-muted" href={item.link}>{item.label}</Link></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown dropdown-mega-lg">
                                        <span className={`nav-link ${show === 6 ? "show" : ""}`} role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(6)}>
                                            Lookbook
                                        </span>
                                        <ul className={`dropdown-menu dropdown-sub-column ${show === 6 ? 'show' : ""}`}>
                                            {Lookbook.map((item: any, index: number) => {
                                                return (
                                                    <li key={index}><Link className="text-muted" href={item.link}>{item.lable}</Link></li>
                                                )
                                            })}
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown dropdown-mega-lg">
                                        <Link className={`nav-link ${show === 7 ? "show" : ""}`} href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(7)}>
                                            Blog
                                        </Link>
                                        <ul className={`dropdown-menu dropdown-sub-column ${show === 7 ? 'show' : ""}`}>
                                            {Blog.map((item: any, index: any) => {
                                                return (
                                                    <li key={index}><Link className="text-muted" href={item.link}>{item.lable}</Link></li>
                                                )
                                            })}

                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="topbar-toolbar d-flex align-items-center gap-3">
                            <Link data-bs-toggle="offcanvas" href="#searchOffcanvas" aria-controls="searchOffcanvas" onClick={handleShow}><i className="iccl iccl-search"></i></Link>
                            <Link className="d-md-block d-none" data-bs-toggle="offcanvas" href="#accountOffcanvas" aria-controls="accountOffcanvas" onClick={handleLoginShow}><i className="iccl iccl-user"></i></Link>
                            <Link className="d-md-block d-none" href="/wishlist"><i className="iccl iccl-heart"></i><span className="tcount bg-dark text-white rounded-circle d-flex align-items-center justify-content-center">3</span></Link>
                            <Link data-bs-toggle="offcanvas" href="#shoppingCartOffcanvas" aria-controls="shoppingCartOffcanvas" onClick={handleShoppingShow}><i className="iccl iccl-cart"></i><span className="tcount bg-dark text-white rounded-circle d-flex align-items-center justify-content-center">5</span></Link>
                        </div>
                    </div >
                </nav >
            </div >

            <div className="backdrop-shadow d-none"></div>
            <SearchModal show={searchShow} handleClose={handleClose} />
            <LoginModal loginShow={loginShow} handleLoginClose={handleLoginClose} />
            <ShoppingCardModal shoppingShow={shoppingShow} handleShoppingClose={handleShoppingClose} />

             <MobileHeader headerShow={headerShow}
                handleHeaderClose={handleHeaderClose}
                loginShow={loginShow}
                handleLoginClose={handleLoginClose}
                handleLoginShow={handleLoginShow} />

        </React.Fragment >
    )
}

export default HeaderBag