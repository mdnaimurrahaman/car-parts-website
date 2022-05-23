import React from 'react';
import Catagories from '../Catagories/Catagories';
import Brand from './Brand/Brand';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Items from './Items/Items';
import NewsBanner from './NewsBanner/NewsBanner';
import TopBanner from './TopBanner/TopBanner';



const Home = () => {
    return (
        <div>
            <TopBanner/>
            <Catagories/>
            <Items/>
            <Brand/>
            <NewsBanner/>
            <BusinessSummary/>
        </div>
    );
};

export default Home;