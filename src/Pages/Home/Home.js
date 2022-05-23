import React from 'react';
import Catagories from '../Catagories/Catagories';
import NewsBanner from './NewsBanner/NewsBanner';
import TopBanner from './TopBanner/TopBanner';



const Home = () => {
    return (
        <div>
            <TopBanner/>
            <Catagories/>
            <NewsBanner/>
        </div>
    );
};

export default Home;