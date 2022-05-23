import React from 'react';
import Catagories from '../Catagories/Catagories';
import Brand from './Brand/Brand';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import NewsBanner from './NewsBanner/NewsBanner';
import TopBanner from './TopBanner/TopBanner';



const Home = () => {
    return (
        <div>
            <TopBanner/>
            <Catagories/>
            <Brand/>
            <BusinessSummary/>
            <NewsBanner/>
        </div>
    );
};

export default Home;