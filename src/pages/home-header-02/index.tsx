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
import LayoutHeader2 from '@src/components/Headers/LayoutHeader2'
import PopupPage from '@src/components/Popup'
import HeadTitle from '@src/commonsections/HeadTitle'

const HomeHeader02 = () => {
    return (
        <React.Fragment>
            <HeadTitle title="Home Handmade" />
            <TopBanner />

            <LayoutHeader2 />

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
            <PopupPage />

        </React.Fragment>
    )
}

export default HomeHeader02