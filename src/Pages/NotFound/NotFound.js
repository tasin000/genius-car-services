import React from 'react';
import sleeping from '../../images/sleeping-mechanic.jpg';

const NotFound = () => {
    return (
        <div className='my-3'>
            <img height='400' src={sleeping} alt="..." />
            <h2 className='text-primary'>404! Mechanic is sleeping..</h2>
        </div>
    );
};

export default NotFound;