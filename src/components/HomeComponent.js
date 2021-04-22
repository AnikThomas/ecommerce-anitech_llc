import React from 'react';
import HomeIcon from './HomeIcons';
import HomeService from './HomeService';
import BrandSlider from './HomeBrandSlider';
import HomeOffer from './HomeOffer';
import CarouselHeader from './CarouselHeader'

function Home(props){
    return (
        
        <div>
            <CarouselHeader/>
            <HomeIcon/>
            <HomeService/>
            <BrandSlider/>
            <HomeOffer/>
        </div>
    );
}

export default Home;