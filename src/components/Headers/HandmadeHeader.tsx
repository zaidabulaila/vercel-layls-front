import React, { useEffect, useState, useRef } from "react";
import { Col, Dropdown, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import MobileHeader from "@src/components/Headers/MobileHeader";
import LoginModal from "@src/components/Headers/LoginModal";
import ShoppingCardModal from "@src/commonsections/ShoppingCardModal";
import MobileHeaderSearchModel from "@src/components/Headers/MobileHeaderSearchModel";
import ProductModal from "@src/commonsections/ProductModal";
import AddToCardModal from "@src/commonsections/AddToCardModal";
import { country2 } from "@src/common/Header/mobileHeader";
import {ProductDetail} from '@src/common/Header/headershoes'
import { Features, HeaderLayout, HomePage1, HomePage2, ShopPage, ProductLayout,  ProductSwatch, ProductFeatures, Portfolio, Lookbook, Blog, HandmadshopFeature, HandmadesaleSwiper } from '@src/common/Header/header';

import logo from '@assets/images/svg/kalles.svg'
import usd from '@assets/images/svg/usd.svg'
import pr1 from '@assets/images/home-hand-made/pr-01.jpg'
import pr2 from '@assets/images/home-hand-made/pr-02.jpg'
import pr4 from '@assets/images/home-hand-made/pr-04.jpg'

const ProductCard = ({ product, handleQulickShow, handleAddToCardModalShow }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="topbar-product-card overlay-hover"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="position-relative overflow-hidden main">
                <Image
                    src={isHovered ? product.hoverImageUrl : product.imageUrl}
                    alt={product.name}
                    className="img-fluid"
                    width={500}
                    height={500}
                />
                <OverlayTrigger overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                    <Link href="#" className="d-lg-none position-absolute" style={{ zIndex: 1, top: '10px', left: '10px' }}>
                        <i className="facl facl-heart-o text-white"></i>
                    </Link>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                    <Link href="#" className="wishlistadd d-none d-lg-flex position-absolute">
                        <i className="facl facl-heart-o text-white"></i>
                    </Link>
                </OverlayTrigger>
                <div className="product-button d-none d-lg-flex flex-column gap-2">
                    <Link href="#exampleModal" data-bs-toggle="modal" className="btn rounded-pill fs-14" onClick={handleQulickShow}>
                        <span>Quick View</span> <i className="iccl iccl-eye"></i>
                    </Link>
                    <button type="button" className="btn rounded-pill fs-14" data-bs-toggle="modal" data-bs-target="#cardModal" onClick={handleAddToCardModalShow}>
                        <span>Quick Shop</span> <i className="iccl iccl-cart"></i>
                    </button>
                </div>
                <div className="position-absolute d-lg-none bottom-0 end-0 d-flex flex-column bg-white rounded-pill m-2" style={{ zIndex: 1 }}>
                    <Link href="#exampleModal" data-bs-toggle="modal" className="btn responsive-cart rounded-pill fs-14 p-2" style={{ width: '36px', height: '36px' }}>
                        <i className="iccl iccl-eye fw-semibold"></i>
                    </Link>
                    <button type="button" className="btn responsive-cart rounded-pill fs-14 p-2" style={{ width: '36px', height: '36px' }} data-bs-toggle="modal" data-bs-target="#cardModal">
                        <i className="iccl iccl-cart fw-semibold"></i>
                    </button>
                </div>
            </div>
            <div className="mt-3">
                <h6 className="mb-1 fs-16 fw-medium font-avenir">
                    <Link href="/product-detail-layout-01" className="text-reset">{product.name}</Link>
                </h6>
                <p className="mb-0 fs-15 text-muted">
                    {product.originalPrice && <del>{product.originalPrice}</del>}
                    <span className={product.discount ? 'text-danger' : ''}>{product.price}</span>
                </p>
            </div>
        </div>
    );
};

const HandmadeHeader = () => {
    const headerRef = useRef(null)
    const [isStickyActive, setIsStickyActive] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [showw, setShoww] = useState<number | any>(null)
    const [loginShow, setLoginShow] = useState(false);
    const [headerShow, setHeaderShow] = useState(false)
    const [shoppingShow, setShoppingShow] = useState(false);
    const [show, setShow] = useState(false);
    const [quickshow, setQuickShow] = useState(false);
    const [cardShow, setCardShow] = useState(false);


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

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])
    useEffect(() => {
        document.body.classList.add("font-futura")
        return () => {
            document.body.classList.remove("font-futura")
        }
    })

    const handleHeader = () => {
        setHeaderShow(true)
        setLoginShow(false)
    }
    const handleLoginShow = () => {
        setLoginShow(true);
        setHeaderShow(false);
    }
    const handleLoginClose = () => setLoginShow(false);
    const handleHeaderClose = () => setHeaderShow(false)

    const handleClick = (id: any) => {
        if (showw === id) {
            setShoww(null)
        } else {
            setShoww(id)
        }
    }
    const handleClickOutside = (event: any) => {
        if (
            headerRef.current &&
            !event.target.closest('.demo')
        ) {
            setShoww(null)

        }
    };

    const handleShoppingClose = () => setShoppingShow(false);
    const handleShoppingShow = () => setShoppingShow(true);
    const handleQulickShow = () => setQuickShow(true);
    const handleQulickClose = () => setQuickShow(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddToCardModalShow = () => setCardShow(true);
    const handleAddToCardModalClose = () => setCardShow(false);



    return (
        <React.Fragment>
            <div id="kalles-section-header_top" className="navbar-handmade">
                <div className="h__top d-flex align-items-center">
                    <div className="container">
                        <Row className="align-items-center py-1 py-md-0">
                            <Col md={5} xl={4}>
                                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                                    <p className="mb-0"><i className="pegk pe-7s-call fs-14 me-1 align-middle"></i> +01 23456789</p>
                                    <p className="mb-0"><i className="pe-7s-mail pegk fs-14 me-1 align-middle"></i> Kalles@domain.com</p>
                                </div>
                            </Col>
                            <Col md={5} xl={4} className="py-1 py-md-0">
                                <div className="header-text text-center fs-12">
                                    Summer sale discount off <span className="cr">50%</span>! <Link href="/shop" className="text-reset">Shop Now</Link>
                                </div>
                            </Col>
                            <Col md={2} xl={4}>
                                <div className="dropdown text-center text-md-end position-relative">
                                    <Dropdown>
                                        <Dropdown.Toggle as="a" className="fs-12 text-reset currency-button" id="dropdown-currency">
                                            <Image src={usd} alt="" height={12} className="me-1" /> USD <i className="facl facl-angle-down ms-1"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="p-3 dropdown-currency">
                                            {country2.map((item, index) => (
                                                <Dropdown.Item as="a" href="#!" key={index}>
                                                    <Image src={item.image} alt="" height={12} className="me-1" /> {item.name}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <nav className={`navbar navbar-expand-lg navbar-custom py-0 d-flex align-items-center demo ${isStickyActive === true ? 'headerFixed' : ""}`} ref={headerRef}>
                    <div className="container">
                        <Link className="d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={handleHeader}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                                <rect width="30" height="1.5"></rect>
                                <rect y="7" width="20" height="1.5"></rect>
                                <rect y="14" width="30" height="1.5"></rect>
                            </svg>
                        </Link>
                        <Link className="navbar-brand fs-14 d-none d-lg-block" href="#">Welcome to our store!</Link>
                        <Link className="navbar-brand d-lg-none nav-link" href="#"><Image src={logo} alt="" width="95" /></Link>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-none d-lg-block mx-auto">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 lingeries-header">
                                    <li className="nav-item dropdown dropdown-mega-xxl">
                                        <span className={`nav-link fw-medium ${showw === 1 ? 'show' : ''}`} data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(1)}>
                                            Demo
                                        </span>
                                        <div className={`dropdown-menu ${showw === 1 ? 'show' : ''}`}>
                                            <Row>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="#!" className="dropdown-menu-title">Home Pages</Link>
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
                                        <span className={`nav-link position-relative ${showw === 2 ? 'show' : ''}`} data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(2)}>
                                            Shop
                                        </span>
                                        <div className={`dropdown-menu p-3 ${showw === 2 ? 'show' : ''}`}>
                                            <Row className="g-0">
                                                <Col lg={5}>
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
                                                                        HandmadshopFeature.map((item: any, index: number) => {
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
                                                <Col lg={7}>
                                                    <Row className="p-4">
                                                        <Col lg={4} className="p-0">
                                                            <div className="dropdown-sub-column-item position-relative cat_grid_item overflow-hidden h-100">
                                                                <Image src={pr1} alt="" className="img-fluid" />
                                                                <Link className="mt-3" href="/product-detail-layout-01">Pendant Key Ornaments</Link>
                                                                <p className="text-muted"> $35.00</p>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} className="p-0">
                                                            <div className="dropdown-sub-column-item position-relative cat_grid_item overflow-hidden h-100">
                                                                <Image src={pr2} alt="" className="img-fluid" />
                                                                <Link className="mt-3" href="/product-detail-layout-01">Abstract Folded Pots</Link>
                                                                <p className="text-muted"> $52.00</p>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} className="p-0">
                                                            <div className="dropdown-sub-column-item position-relative cat_grid_item overflow-hidden h-100">
                                                                <Image src={pr4} alt="" className="img-fluid" />
                                                                <Link className="mt-3" href="/product-detail-layout-01">Adhesive Tape Dispenser</Link>
                                                                <p className="text-muted"> $15.00</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown dropdown-mega-xxl">
                                        <span className={`nav-link fw-medium ${showw === 3 ? 'show' : ''}`}  data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(3)}>
                                            Product
                                        </span>
                                        <div className={`dropdown-menu ${showw === 3 ? 'show' : ''}`}>
                                            <Row>
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
                                                                                <span className={item.badgeColor}>{item.badge}</span>
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
                                    <li className="nav-item">
                                        <Link className="navbar-brand nav-link" href="/index"><Image src={logo} alt="" width="95" /></Link>
                                    </li>
                                    <li className="nav-item dropdown dropdown-mega-3xl">
                                        <span className={`nav-link fs-16 position-relative fw-medium ${showw === 4 ? 'show' : ""}`}  data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(4)}>
                                            Sale
                                        </span>
                                        <div className={`dropdown-menu ${showw === 4 ? "show" : ""}`}>
                                            <Row>
                                                <Col lg={2}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="#!" className="dropdown-menu-title">Strapless</Link>
                                                        <Link href="#!" className="dropdown-menu-title">Micro Bikini</Link>
                                                        <Link href="#!" className="dropdown-menu-title">Women</Link>
                                                        <Link href="#!" className="dropdown-menu-title">High Waisted</Link>
                                                        <Link href="#!" className="dropdown-menu-title">Trikini</Link>
                                                        <Link href="#!" className="dropdown-menu-title">Flounce</Link>
                                                        <Link href="#!" className="dropdown-menu-title">Sling Bikini</Link>
                                                    </div>

                                                </Col>
                                                <Col lg={10}>
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
                                                            {HandmadesaleSwiper.map((product: any) => (
                                                                <SwiperSlide key={product.id}>
                                                                    <div>
                                                                        <ProductCard product={product} handleQulickShow={handleQulickShow} handleAddToCardModalShow={handleAddToCardModalShow} />
                                                                    </div>
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
                                        <span className={`nav-link fw-medium ${showw === 5 ? 'show' : ''}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(5)}>
                                            Portfolio
                                        </span>
                                        <ul className={`dropdown-menu dropdown-sub-column ${showw === 5 ? 'show' : ""}`}>
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
                                        <span className={`nav-link fw-medium ${showw === 6 ? 'show' : ''}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(6)}>
                                            Lookbook
                                        </span>
                                        <ul className={`dropdown-menu dropdown-sub-column ${showw === 6 ? 'show' : ''}`}>
                                            {Lookbook.map((item: any, index: number) => {
                                                return (
                                                    <li key={index}><Link className="text-muted" href={item.link}>{item.lable}</Link></li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown dropdown-mega-lg">
                                        <span className={`nav-link fw-medium ${showw === 7 ? 'show' : ''}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(7)}>
                                            Blog
                                        </span>
                                        <ul className={`dropdown-menu dropdown-sub-column ${showw === 7 ? 'show' : ''}`}>
                                            {Blog.map((item: any, index: any) => {
                                                return (
                                                    <li key={index}><Link className="text-muted" href={item.link}>{item.lable}</Link></li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <MobileHeader headerShow={headerShow}
                                handleHeaderClose={handleHeaderClose}
                                loginShow={loginShow}
                                handleLoginClose={handleLoginClose}
                                handleLoginShow={handleLoginShow} />
                        </div>

                        <div className="topbar-toolbar d-flex align-items-center gap-3 lingeries-header">
                            <Link href="#!" role="presentation" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={handleShow}>
                                <i className="iccl iccl-search"></i>
                            </Link>
                            <Link className="d-md-block d-none" data-bs-toggle="offcanvas" href="#accountOffcanvas" aria-controls="accountOffcanvas" onClick={handleLoginShow}><i className="iccl iccl-user"></i></Link>
                            <Link className="d-md-block d-none" href="/wishlist"><i className="iccl iccl-heart"></i><span className="tcount bg-danger text-white rounded-circle d-flex align-items-center justify-content-center">3</span></Link>
                            <Link data-bs-toggle="offcanvas" href="#shoppingCartOffcanvas" aria-controls="shoppingCartOffcanvas" onClick={handleShoppingShow}><i className="iccl iccl-cart"></i><span className="tcount bg-danger text-white rounded-circle d-flex align-items-center justify-content-center">5</span></Link>
                        </div>
                    </div>
                </nav>
            </div>
            <LoginModal loginShow={loginShow} handleLoginClose={handleLoginClose} />
            <ShoppingCardModal shoppingShow={shoppingShow} handleShoppingClose={handleShoppingClose} />
            <MobileHeaderSearchModel show={show} handleClose={handleClose} />
            <ProductModal show={quickshow} handleClose={handleQulickClose} />
            <AddToCardModal cardShow={cardShow} handleAddToCardModalClose={handleAddToCardModalClose} />
        </React.Fragment>
    )
}
export default HandmadeHeader