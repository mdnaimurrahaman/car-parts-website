import React from 'react';
import './NotFound.css'
import notfound from '../../../Images/404.png'

const NotFound = () => {
    return (
        <div className='container'>
            <img className='notfound mt-5' src={notfound} alt="" srcset="" />
        </div>
    );
};

export default NotFound;