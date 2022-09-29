import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { activities } = props;

    // let duration = 0;

    // for (const duration of activities) {

    // }
    return (
        <div className='cart'>
            {/* <h3>{activities.name}</h3> */}
            <h1>It is Cart:{activities.length}</h1>
        </div>
    );
};

export default Cart;