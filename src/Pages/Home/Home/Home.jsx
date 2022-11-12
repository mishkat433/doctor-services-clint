import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import Services from '../Services/Services';
import Terms from '../Terms/Terms';
import Testimonial from '../Testemonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Terms />
            <HomeAppointment />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default Home;