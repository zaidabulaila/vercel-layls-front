import React from 'react'

import HomeSection from '@pages/main-index/HomeSection'
import CatSection from '@pages/home-header-01/CatSection'
import TrendingCard from '@src/commonsections/TrendingCard'
import LookBookCard from '@src/commonsections/LookBookCard'
import SellerCard from '@src/commonsections/SellerCard'
import LatestBlogs from '@src/commonsections/LatestBlogs'
import FollowInstagram from '@src/commonsections/FollowInstagram'
import Shipping from '@src/commonsections/Shipping'
import FooterPage from '@src/components/Footer'
import TopBanner from '@src/components/Headers/TopBanner'
import LayoutHeader from '@src/components/Headers/LayoutHeader'
import MainModel from '@src/commonsections/MainModel'
import HeadTitle from '@src/commonsections/HeadTitle'

const HomeHeader01 = () => {
    return (
        <React.Fragment>

            <HeadTitle title="Home Classic" />

            <MainModel />

            <TopBanner />

            {/* header */}

            <LayoutHeader />

            {/* main slide */}
            <HomeSection />

            {/* cat-section */}
            <CatSection />

            {/* trending - card */}
            <TrendingCard />

            {/* lookbook - card */}
            <LookBookCard />

            {/* best seller */}
            <SellerCard />

            {/* latest - blog */}
            <LatestBlogs />

            {/* instagram */}
            <FollowInstagram />

            {/* Shipping */}
            <Shipping />

            {/* Footer */}
            <FooterPage />

        </React.Fragment>
    )
}

export default HomeHeader01