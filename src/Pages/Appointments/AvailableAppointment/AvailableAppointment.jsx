import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOption, setAppointmentOptino] = useState([])
    const [treatment, setTreatment] = useState(null)


    useEffect(() => {
        fetch('AppointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOptino(data))
    }, [])


    return (
        <section className='w-11/12 mx-auto mb-16'>
            <p className='text-primary text-xl font-semibold text-center'>Available appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    appointmentOption.map(apOption => <AppointmentOption setTreatment={setTreatment} apOption={apOption} key={apOption._id} />)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment} />
            }
        </section>
    );
};

export default AvailableAppointment;