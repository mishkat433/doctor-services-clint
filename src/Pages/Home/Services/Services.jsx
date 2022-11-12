import React from 'react';
import floride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import Whitening from "../../../assets/images/whitening.png";
import Service from './Service';

const servicesData = [
    {
        id: 1,
        name: "Fluoride Treatment",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: floride
    },
    {
        id: 1,
        name: "Cavity Filling",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: cavity
    },
    {
        id: 1,
        name: "Teeth Whitening",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: Whitening
    }
]

const Services = () => {
    return (
        <section className="w-11/12 mx-auto my-20">
            <div className='text-center'>
                <h3 className='text-xl font-semibold text-primary'>Our Services</h3>
                <p className='text-4xl'>Services We Provide</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14'>
                {
                    servicesData.map(service => <Service service={service} key={service.id} />)
                }
            </div>
        </section>
    );
};

export default Services;