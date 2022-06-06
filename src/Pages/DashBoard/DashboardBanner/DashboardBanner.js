import React from 'react';
import './DashboardBanner.css'
import progress from '../../../Images/progress.png'
import banner from '../../../Images/Luxury-Car-dashboard-banner.png'

const DashboardBanner = () => {
    return (
        <div className='dashboard-container'>
            <div className='service-add'>
                <div>
                    <h2 className='text-xl font-semibold'>Service</h2>
                    <div className='service-1'>
                        <img src={progress} alt="" srcset="" />
                        <div className='progress-info'>
                            <p>Your last check-in was at <span className='font-bold'>12345 Km</span></p>
                            <button className='btn hero-btn mt-3'>Schedule Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                    <h2 className='text-xl font-semibold'>Add-ons</h2>
                    <div class="badge">+99</div>
                    </div>
                    <div>
                    <div class="avatar">
                    <div class="w-8 rounded">
                        <img src="https://api.lorem.space/image/face?hash=33791" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                    </div>
                    <p className='text-xl'>ECU Tester</p>
                    </div>
                    <div>
                    <div class="avatar">
                    <div class="w-8 rounded">
                        <img src="https://api.lorem.space/image/face?hash=33791" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                    </div>
                    <p className='text-xl'>ECU Tester</p>
                    </div>
                    <p className='text-center'>More</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold text-gray-300'>Insurance</h2>
                    <div>
                        <h2 className='text-xl font-bold'>Insurance Expired</h2>
                        <div>
                            <button className='btn hero-btn'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner-progress'>
                <div className='dashboard-banner'>
                    <img src={banner} alt="" srcset="" />
                </div>
                <div className='progress'>
                    <div className='progress-detail'>
                        <p>Year of Make</p>
                        <h2>1998</h2>
                    </div>
                    <div className='progress-detail'>
                        <p>ARAI Miloge</p>
                        <h2>11.3 Kmpl</h2>
                    </div>
                    <div className='progress-detail'>
                        <p>Engine Cap</p>
                        <h2 >3.5L V6</h2>
                    </div>
                    <div className='progress-detail'>
                        <p>Fuel Type</p>
                        <h2>Petrol</h2>
                    </div>
                    <div className='progress-detail'>
                        <p>Gear Transmission</p>
                        <h2>8 Auto</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DashboardBanner;