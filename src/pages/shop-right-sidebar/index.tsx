import React from "react";
import ShopNavbar from "@src/commonsections/ShopNavbar";
import WomenColting from "@src/commonsections/WomenCloting";
import FilterTab from "@pages/shop-right-sidebar/FilterTab";
import FooterPage from "@src/components/Footer";
import TopBanner from "@src/components/Headers/TopBanner";
import Header from "@src/components/Headers/Header";
import PopupPage from "@src/components/Popup";
import HeadTitle from "@src/commonsections/HeadTitle";

const ShopRightSidebar = () => {
    return (
        <React.Fragment>
            <HeadTitle title="Home Default" />
            <TopBanner />

            {/* header */}
            <Header />

            <ShopNavbar />
            <WomenColting />

            <FilterTab />
            <FooterPage />
            <PopupPage />
        </React.Fragment>
    )
}
export default ShopRightSidebar