import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Toast from '../Toast/Toast';
import './Cart.css'


const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let totalTime = 0;

    for (const activity of cart) {
        totalTime = totalTime + activity.duration
    }


    const [selectedNumber, setSelectedNumber] = useState(0);

    const selectNumber = e => {
        // console.log(e.target.value);
        setSelectedNumber(e.target.value);
    }

    const completedActivity = () => {
        const totalDuration = totalTime + selectedNumber;
        toast("Congratulations! You are Khan Dani", totalDuration);
    }


    return (
        <div className='cart'>
            <div>
                <h4>Sheikh Jabir</h4>
                <h6>*Bhuyanpur,Tangail</h6>
            </div>
            <div className='biography'>
                <div className='sub'>
                    <h6>Height</h6>
                    <p>5.5"</p>
                </div>
                <div className='sub'>
                    <h6>Weight</h6>
                    <p>55kg</p>
                </div>
                <div className='sub'>
                    <h6>Age</h6>
                    <p>24</p>
                </div>
            </div>

            <h6 className='break'>Add a break</h6>
            <div className='p-btn'>
                <button onClick={selectNumber} className='btn-break' value="10">10m</button>
                <button onClick={selectNumber} className='btn-break' value="15">15m</button>
                <button onClick={selectNumber} className='btn-break' value="25">25m</button>
                <button onClick={selectNumber} className='btn-break' value="30">30m</button>
            </div>


            <div className='exercise-detail'>
                <h5>Exercise Detail</h5>
                <p>Exercise Time: {totalTime}m</p>
                <p className='break-time'>Break Time: {selectedNumber}m</p>
            </div>

            <button onClick={completedActivity} className='btn-activity'>Activity Completed</button>
            <Toast completedActivity={completedActivity} ></Toast>
        </div>
    );
};

export default Cart;