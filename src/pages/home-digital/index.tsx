import React from 'react'
import Image from 'next/image'

import MainSlide from '@pages/home-digital/MainSlide'
import Banner from '@pages/home-digital/Banner'

import inf1 from "@assets/images/home-digital/shp-inf-01.png"
import inf2 from "@assets/images/home-digital/shp-inf-02.png"
import inf3 from "@assets/images/home-digital/shp-inf-03.png"
import BestSelling from '@pages/home-digital/BestSelling'
import CardsSection from '@pages/home-digital/CardsSection'
import BlogPost from '@pages/home-digital/BlogPost'
import FooterDigital from '@src/components/FooterDigital'
import FeaturedCollection from '@pages/home-digital/FeaturedCollection'
import HeaderHomeDigital from '@src/components/Headers/HeaderHomeDigital'
import TopBanner from '@src/components/Headers/TopBanner'
import HeadTitle from '@src/commonsections/HeadTitle'

const HomeDigital = () => {
    return (
        <React.Fragment>
            <HeadTitle title="Home Digital" />
            <TopBanner topclass="navbar-digital" />
            <HeaderHomeDigital />
            <div>

                {/* main slide */}
                <MainSlide />

                {/*  */}
                <section>
                    <div className="container border-bottom border-top py-4">
                        <div className="row g-2">
                            <div className=" col-sm-4">
                                <div className="text-center">
                                    <Image src={inf1} alt="" className="img-fluid square-sm" />
                                    <h6 className="mt-2">FREE SHIPPING</h6>
                                </div>
                            </div>
                            <div className=" col-sm-4">
                                <div className="text-center">
                                    <Image src={inf2} alt="" className="img-fluid square-sm" />
                                    <h6 className="mt-2">SUPPORT 24/7</h6>
                                </div>
                            </div>
                            <div className=" col-sm-4">
                                <div className="text-center">
                                    <Image src={inf3} alt="" className="img-fluid square-sm" />
                                    <h6 className="mt-2">30 DAYS RETURN</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* banner section */}
                <Banner />

                {/* Selling */}
                <BestSelling />

                {/* cards */}
                <CardsSection />

                {/* Featured Collection */}
                <FeaturedCollection />

                {/* Blog posts */}
                <BlogPost />

                {/* footer */}
                <FooterDigital />

            </div>
        </React.Fragment>
    )
}

export default HomeDigital