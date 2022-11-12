import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className="card card-compact  shadow-xl border">
            <figure><img src={img} alt="Shoes" className='mt-3' /></figure>
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold">{name} </h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;