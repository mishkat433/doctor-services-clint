import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../components/Spinner';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)

    const date = format(selectedDate, "PP");

    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5200/v2/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Spinner />
    }

    return (
        <section className='w-11/12 mx-auto mb-16'>
            <p className='text-primary text-xl font-semibold text-center'>Available appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    appointmentOption.map(apOption => <AppointmentOption setTreatment={setTreatment} apOption={apOption} key={apOption._id} />)
                }
            </div>
            {
                treatment && <BookingModal refetch={refetch} treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment} />
            }
        </section>
    );
};

export default AvailableAppointment;