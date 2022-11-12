import React from 'react';
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Reviews from './Reviews';

const reviewsData = [
    {
        id: 1,
        desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        name: "Winson Herry",
        from: "California",
        image: people1
    },
    {
        id: 2,
        desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        name: "Winson Herry",
        from: "California",
        image: people2
    },
    {
        id: 3,
        desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        name: "Winson Herry",
        from: "California",
        image: people3
    },
]

const Testimonial = () => {

    return (
        <div className='w-11/12 mx-auto mb-16'>
            <div className='flex justify-between gap-10'>
                <div>
                    <h5 className='text-primary text-xl font-semibold'>Testimonial</h5>
                    <h2 className='text-3xl lg:text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-40' src={quote} alt="quote" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10'>
                {
                    reviewsData.map(review => <Reviews review={review} key={review.id} />)
                }
            </div>
        </div>
    );
};

export default Testimonial;