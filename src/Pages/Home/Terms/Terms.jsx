import React from 'react';
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from '../../../components/PrimaryButton';

const Terms = () => {
    return (
        <section className="hero ">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img src={treatment} className="w-full lg:w-3/6 h-[400px] md:h-[500px] lg:h-[600px] rounded-lg shadow-2xl" alt='treatment' />
                <div className='w-full lg:w-3/6'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Terms;