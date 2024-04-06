import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='mx-auto d-flex justify-content-center align-items-center my-auto'>
            <Spinner style={{width: '50px', height: '50px'}} animation="border" variant="primary" />
        </div>
    );
};

export default Loading;