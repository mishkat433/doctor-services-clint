import React from 'react';
import doctor from "../../../assets/images/doctor.png";
import appointmentbd from "../../../assets/images/appointment.png";
import PrimaryButton from '../../../components/PrimaryButton';

const HomeAppointment = () => {
    return (
        <section className=" mt-32 mb-16 "
            style={{ background: `url(${appointmentbd}) no-repeat center center` }}
        >
            <div className="hero-content flex-col lg:flex-row p-0">
                <img src={doctor} className="w-3/5 rounded-lg -mt-32 hidden lg:block" alt='doctor' />
                <div className='text-white p-10 lg:p-0'>
                    <h1 className="text-xl font-bold text-primary mb-5">Appointment</h1>
                    <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get appointment</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;