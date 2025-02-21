import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';

import home1 from "@assets/images/home-header-01/women-cat.jpg"
import home2 from "@assets/images/home-01/bn-02.jpg"
import home3 from "@assets/images/home-01/bn-03.jpg"
import home4 from "@assets/images/home-01/bn-04.jpg"

const CatSection = () => {
    return (
        <React.Fragment>
            <section className="cat-section">
                <Container>
                    <Row className="g-4 g-2">
                        <Col md={6}>
                            <Link href="/shop-right-sidebar" className="d-block position-relative cat_grid_item overflow-hidden h-100">
                                <div className="h-100 w-100 cat-grid-img" style={{ backgroundImage: `url(${home1.src})` }}></div>
                                <div className="cat-grid-button text-body">
                                    <div className="cat_grid_item__title">Women</div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={3}>
                            <Link href="/shop-right-sidebar" className="d-block position-relative cat_grid_item overflow-hidden h-300 mb-xl-4 mb-2">
                                <div className="h-100 w-100 cat-grid-img" style={{ backgroundImage: `url(${home2.src})` }}></div>
                                <div className="cat-grid-button text-body">
                                    <div className="cat_grid_item__title">Accessories</div>
                                </div>
                            </Link>
                            <Link href="/shop-right-sidebar" className="d-block position-relative cat_grid_item overflow-hidden h-300">
                                <div className="h-100 w-100 cat-grid-img" style={{ backgroundImage: `url(${home3.src})` }}></div>
                                <div className="cat-grid-button text-body">
                                    <div className="cat_grid_item__title">Footwear</div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={3}>
                            <Link href="/shop-right-sidebar" className="d-block position-relative cat_grid_item overflow-hidden h-624">
                                <div className="h-100 w-100 cat-grid-img" style={{ backgroundImage: `url(${home4.src})` }}></div>
                                <div className="cat-grid-button text-body">
                                    <div className="cat_grid_item__title">Watches</div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default CatSection