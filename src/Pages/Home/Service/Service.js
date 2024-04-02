import React from 'react';
import './Service.css';
import { useNavigate,  } from 'react-router-dom';

const Service = ({service}) => {
    const navigate = useNavigate();
    const {id, name, img, description, price} = service;
    const handleNavigate = (id) => {
        navigate(`/services/${id}`);
        alert(id);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => {handleNavigate(id);}} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;