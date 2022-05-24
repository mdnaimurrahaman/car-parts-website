import React from 'react';
import './Catagories.css'
import icon1 from '../../Images/Services icon/icon1.png'
import icon2 from '../../Images/Services icon/icon2.png'
import icon3 from '../../Images/Services icon/icon3.png'
import icon4 from '../../Images/Services icon/icon4.png'
import icon5 from '../../Images/Services icon/icon5.png'
import icon6 from '../../Images/Services icon/icon6.png'

const Catagories = () => {
    return (
        <div className=''>
            <h1 className='catagories-title text-center'>All Catagories</h1>
            <div className='catagories-container'>
                <div className='catagories'>
                    <img src={icon1} alt="" srcset="" />
                    <h3 className=''>Spare Parts</h3>
                </div>
                <div className='catagories'>
                    <img src={icon2} alt="" srcset="" />
                    <h3 className=''>Tyres nd Wheels</h3>
                </div>
                <div className='catagories'>
                    <img src={icon3} alt="" srcset="" />
                    <h3 className=''>Engine</h3>
                </div>
                <div className='catagories'>
                    <img src={icon4} alt="" srcset="" />
                    <h3 className=''>Car Accessories</h3>
                </div>
                <div className='catagories'>
                    <img src={icon5} alt="" srcset="" />
                    <h3 className=''>Car Glass</h3>
                </div>
                <div className='catagories'>
                    <img src={icon6} alt="" srcset="" />
                    <h3 className=''>Car Batteries</h3>
                </div>
            </div>
        </div>
    );
};

export default Catagories;