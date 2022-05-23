import React from 'react';
import Catagories from '../Catagories/Catagories';
import Brand from './Brand/Brand';
import NewsBanner from './NewsBanner/NewsBanner';
import TopBanner from './TopBanner/TopBanner';



const Home = () => {
    return (
        <div>
            <TopBanner/>
            <Catagories/>
            <Brand/>
            <NewsBanner/>
        </div>
    );
};

export default Home;