import React from 'react';

const Reviews = ({ review }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p className="text-justify">{review.desc}</p>
            </div>
            <div className='flex gap-x-5 items-center px-10 mb-5'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.image} alt='avatar' />
                    </div>
                </div>
                <div>
                    <h4 className='card-title'>{review.name}</h4>
                    <p>{review.from}</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;