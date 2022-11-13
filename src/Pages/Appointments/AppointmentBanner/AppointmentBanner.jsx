import React from 'react';
import bannerImage from "../../../assets/images/chair.png";
import backgroundImage from "../../../assets/images/bg.png";
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className="mb-16 " style={{ background: `url(${backgroundImage}) no-repeat center center`, backgroundSize: 'cover' }}>
            <div className="flex  gap-14 p-4 md:p-8 flex-col justify-evenly w-11/12 mx-auto lg:flex-row-reverse items-center " >
                <img src={bannerImage} className=" rounded-lg shadow-2xl w-full lg:w-3/6" alt='banner' />
                <div className='shadow-lg p-5 rounded-md'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;