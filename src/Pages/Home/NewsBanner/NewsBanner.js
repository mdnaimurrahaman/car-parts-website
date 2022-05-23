import React from 'react';
import banner from '../../../Images/Banner2.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const NewsBanner = () => {
    return (
        <div className="top-banner">
        <div className="w-100 banner-info">
          <div className="">
            <h1 class="text-4xl font-bold">Subscribe Our News..!</h1>
            <p class="py-2">
            Good Deals and Quality Parts Every Day.
            </p>
            <div>
            <div className='d-flex'>
              <input className='' type="text" placeholder="Your Mail Address" class="input input-bordered w-full max-w-xs" />
            </div>
            <div className='mt-2'>
              <PrimaryButton>Subscribed</PrimaryButton>
            </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={banner} alt="" srcset="" />
        </div>
      </div>
    );
};

export default NewsBanner;