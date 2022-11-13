import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const date = format(selectedDate, 'PP')

    const bookingHandle = (e) => {
        const form = e.target;
        const slot = form.slot.value;
        const date = form.date.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatmentName: treatment?.name,
            slot,
            patientName: name,
            email,
            phone,
        }

        console.log(booking);

        setTreatment(null)
        e.preventDefault()
    }

    return (
        <div className=''>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className=" font-semibold text-2xl">{treatment?.name}</h3>
                    <div className="card mt-5 w-full  ">
                        <form onSubmit={bookingHandle} className="card-body">
                            <div className="form-control">
                                <input type="text" value={date} name='date' className="input input-bordered" disabled />
                            </div>
                            <select name="slot" className="select select-bordered w-full">
                                {
                                    treatment?.slots.map((slot, i) => <option
                                        value={slot}
                                        key={i}
                                    >{slot}</option>)
                                }
                            </select>
                            <div className="form-control">
                                <input type="text" placeholder="your name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="number" placeholder="phone number" name='phone' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className='btn btn-primary text-white'>submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;