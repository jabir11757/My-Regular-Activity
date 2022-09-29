import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { name, picture, description, age, duration } = props.activity;


    return (
        <div className='activity'>
            <div>
                <img src={picture} alt='img'></img>
                <div className='activity-content'>
                    <h4 className='name'>{name}</h4>
                    <p className='description'>{description}</p>
                    <p className='age'>Age:{age}</p>
                    <p>Time Required: {duration}</p>
                </div>
                <button onClick={() => props.getHandlerActivity(props.activity)} className='button'>Add to List</button>
            </div>
        </div>
    );
};

export default Activity;