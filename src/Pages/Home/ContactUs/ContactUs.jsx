import React, { useState } from 'react';
import bg from "../../../assets/images/appointment.png"
import PrimaryButton from '../../../components/PrimaryButton';

const ContactUs = () => {
    const [contactData, setContactData] = useState([])

    const contactSubmitHandle = (e) => {

        e.preventDefault()
    }

    const saveDataHandle = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value })
    }

    console.log(contactData);

    return (
        <div className='my-16'
            style={{ background: `url(${bg}) no-repeat center center`, backgroundSize: 'cover' }}
        >
            <div className='text-center text-white pt-10'>
                <h4 className='text-xl text-primary font-semibold'>Contact Us</h4>
                <h3 className='text-4xl'>Stay connected with us</h3>
            </div>
            <div className="hero ">
                <div className="hero-content w-full lg:w-1/2 mx-auto">
                    <form onSubmit={contactSubmitHandle} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Email</span>
                            </label>
                            <input onBlur={saveDataHandle} type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Subject</span>
                            </label>
                            <input onBlur={saveDataHandle} type="text" placeholder="subject" name='subject' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Message</span>
                            </label>
                            <textarea onBlur={saveDataHandle} className='p-3 h-32 input input-bordered resize-none' name='message' placeholder='your message' required></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;