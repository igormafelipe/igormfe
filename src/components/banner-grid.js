import React from 'react';
import TopicBox from './topic-box';

function BannerGrid({ BannerList }) {
    return (
        <div className="flex flex-auto flex-row overflow-hidden h-screen absolute top-0 left-0">
            {BannerList.map((banner, index) => <TopicBox image={banner["link"]} description={banner["description"]} linkTo={banner["linkTo"]} key={index}/>)}
        </div>
    )
}

export default BannerGrid;