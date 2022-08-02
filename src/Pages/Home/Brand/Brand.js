import React from 'react';
import './Brand.css'
import logo1 from '../../../Images/Car logo/logo1.png'
import logo2 from '../../../Images/Car logo/logo2.png'
import logo3 from '../../../Images/Car logo/logo3.png'
import logo4 from '../../../Images/Car logo/logo4.png'
import logo5 from '../../../Images/Car logo/logo5.png'
import logo6 from '../../../Images/Car logo/logo6.png'
import logo7 from '../../../Images/Car logo/logo7.png'
import logo8 from '../../../Images/Car logo/logo8.png'
import logo9 from '../../../Images/Car logo/logo9.png'
import logo10 from '../../../Images/Car logo/logo10.png'
import logo11 from '../../../Images/Car logo/logo11.png'
import logo12 from '../../../Images/Car logo/logo12.png'
import car4 from '../../../Images/car images/car4.png'
import car1 from '../../../Images/car images/car1.png'
import car3 from '../../../Images/car images/car3.png'
import car2 from '../../../Images/car images/car2.png'



const Brand = () => {
    return (
       <div>
            <h1 className='text-center auto-title'>Your Best Car Parts & Auto News</h1>
            <div className='brand-container'>
                <div className='brand-logo'>
                    <div className='logo'>
                        <img src={logo1} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={logo2} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={logo3} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={logo4} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={logo5} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={logo6} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={logo7} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={logo8} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={logo9} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={logo10} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={logo11} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={logo12} alt="" srcset="" />
                    </div>
                </div>
                <div className='car-container'>
                    <div className='car-info'>
                        <div>
                            <img src={car4} alt="" srcset="" />
                        </div>
                        <div className='car-detail'>
                            <h2 className=''>Mini Cooper s 5 door 2019 long-term review</h2>
                            <p>Rent your dream car in Dubai. We currently have a discount on all cars. Sports & Luxury. Our Luxury Rental Cars Are New and Maintained to Make You Enjoy Your Driving Experience.</p>
                        </div>
                    </div>
                    <div className='car-info'>
                        <div>
                            <img src={car1} alt="" srcset="" />
                        </div>
                        <div className='car-detail'>
                            <h2 className=''>Mini Cooper s 5 door 2019 long-term review</h2>
                            <p>Rent your dream car in Dubai. We currently have a discount on all cars. Sports & Luxury. Our Luxury Rental Cars Are New and Maintained to Make You Enjoy Your Driving Experience.</p>
                        </div>
                    </div>
                    <div className='car-info'>
                        <div>
                            <img src={car3} alt="" srcset="" />
                        </div>
                        <div className='car-detail'>
                            <h2 className=''>Mini Cooper s 5 door 2019 long-term review</h2>
                            <p>Rent your dream car in Dubai. We currently have a discount on all cars. Sports & Luxury. Our Luxury Rental Cars Are New and Maintained to Make You Enjoy Your Driving Experience.</p>
                        </div>
                    </div>
                   
                </div>
            </div>
       </div>
    );
};

export default Brand;