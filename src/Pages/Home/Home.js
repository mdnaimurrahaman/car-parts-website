import React from 'react';
import Catagories from '../Catagories/Catagories';
import Brand from './Brand/Brand';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Items from './Items/Items';
import NewsBanner from './NewsBanner/NewsBanner';
import Reviews from './Reviews/Reviews';
import TopBanner from './TopBanner/TopBanner';
import Banner from './Banner/Banner'



const Home = () => {
    return (
        <div className='px-6'>
            <TopBanner/>
            <Catagories/>
            <Brand/>
            <Items/>
            <Banner/>
            <Reviews/>
            <NewsBanner/>
            <BusinessSummary/>
        </div>
    );
};

export default Home;