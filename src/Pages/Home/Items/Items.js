import React, { useEffect, useState } from 'react';
import useItems from '../../Hooks/useItems';
import Loading from '../../Shared/Loading';

// import Item from '../Home/Item/Item';
import Item from '../Item/Item'
import './Items.css'

const Items = () => {

    const [items, setItems] = useItems();
    if(items.length === 0){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='container mb-5'>
                <div className=' row items-section'>
                    {
                        items.map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;