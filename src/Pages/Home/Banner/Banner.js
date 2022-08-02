import React from 'react';
import { HiShoppingCart} from 'react-icons/hi';
import './Banner.css'

const Banner = () => {
    return (
        <section className='banner'>
            <div className='container text-center'>
                <h4>MID SEASON'S SALE</h4>
                <h1 className='fw-bold text-white my-4'> Now getting 5% Discount<br/> On Our all auto parts</h1>
                <button className='text-uppercase main__btn'>Shop Now</button>
            </div>
        </section>
    );
};

export default Banner;