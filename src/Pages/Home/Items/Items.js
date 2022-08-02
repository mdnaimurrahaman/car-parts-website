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
        <section>
             <h2 className='catagories-title'>Products</h2>
            <p className='text-center uppercase '>Our regular products</p>
            <div className='hr-line line-1'>
                <hr/>
            </div>
            <div className='container mt-12'>
                <div className='items-section'>
                    {
                        items.map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Items;