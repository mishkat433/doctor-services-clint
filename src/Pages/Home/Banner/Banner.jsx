import React from 'react';
import bannerImage from "../../../assets/images/chair.png";
import backgroundImage from "../../../assets/images/bg.png";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import PrimaryButton from '../../../components/PrimaryButton';

const Banner = () => {
    return (
        <div className="" style={{ background: `url(${backgroundImage}) no-repeat center center`, backgroundSize: 'cover' }}>
            <div className="flex lg:h-[95vh] gap-14 p-4 md:p-8 flex-col justify-between w-11/12 mx-auto lg:flex-row-reverse items-center " >
                <img src={bannerImage} className=" rounded-lg shadow-2xl w-full lg:w-3/6" alt='banner' />
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mt-5 lg:mt-0">Your New Smile Starts Here</h1>
                    <p className="py-6 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla officia neque, itaque consequuntur provident odio ipsam, asperiores, quod esse eum veniam nostrum.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-5 w-11/12 mx-auto'>
                <div className='bg-gradient-to-l from-primary to-secondary text-white flex items-center gap-5 p-4 rounded-md'>
                    <img src={clock} alt="clock" />
                    <div>
                        <h4 className='text-2xl font-semibold'>Opening Hours</h4>
                        <p> 24/7 Days</p>
                    </div>
                </div>
                <div className='bg-gray-700 text-white flex items-center gap-5 p-4 rounded-md'>
                    <img src={marker} alt="clock" />
                    <div>
                        <h4 className='text-2xl font-semibold'>Visit your location</h4>
                        <p>Pekua, Cox's Bazar.</p>
                    </div>
                </div>
                <div className='bg-gradient-to-l from-secondary to-primary text-white flex items-center gap-5 p-4 rounded-md'>
                    <img src={phone} alt="clock" />
                    <div>
                        <h4 className='text-2xl font-semibold'>Contact us now</h4>
                        <p>018291698xx</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;