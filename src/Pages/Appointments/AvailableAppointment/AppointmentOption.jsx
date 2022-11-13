import React from 'react';


const AppointmentOption = ({ apOption, setTreatment }) => {
    const { name, slots } = apOption;
    return (
        <div className="card  bg-base-100 shadow-xl border">
            <div className="card-body text-center ">
                <h2 className="text-2xl font-semibold text-center text-primary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p> {slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available </p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(apOption)}
                        className='btn bg-gradient-to-r from-primary to-secondary text-white border-none hover:bg-gradient-to-l duration-300'>
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;