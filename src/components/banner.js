import React from 'react';
import BannerGrid from "../components/banner-grid";

function Banner() {
    const bannerDataArray = [
        {
            "link":"https://studio.pinotspalette.com/southhill/images/yourart-yourrules.jpg",
            "description":"ABOUT",
            "linkTo":"/ABOUT",
        },
        {
            "link":"https://www.gmercyu.edu/sites/default/files/styles/scaled_image_760w/public/page/header-image/cisheader.jpg?itok=u4_Q481b",
            "description":"WORK",
            "linkTo":"/WORK",
        },
    ];
    return <BannerGrid BannerList={bannerDataArray}/>;
}

export default Banner;