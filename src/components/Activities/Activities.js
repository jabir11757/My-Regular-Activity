import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Activities.css'

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const getHandlerActivity = (activity) => {
        console.log(activity);
        const newActivity = [...cart, activity];
        // let newActivity;
        // // const newActivity = [...activities, activity]
        setCart(newActivity)
    }
    return (
        <div className='activities-container'>

            <div className='site-activities'>
                {
                    activities.map(activity =>
                        <Activity
                            key={activity.id}
                            activity={activity}
                            getHandlerActivity={getHandlerActivity}
                        ></Activity>)
                }
            </div>

            <div className='site-cart'>
                <h4>Selected Items:{cart.length}</h4>
                {/* <Cart activities={activities}></Cart> */}
            </div>
        </div>
    );
};

export default Activities;