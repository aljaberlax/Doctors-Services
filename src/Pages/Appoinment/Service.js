import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? <span> {slots[0]}</span>
                            : <span className='text-red-500 text-xl'>Try another day</span>
                    }

                </p>
                <p> {slots.length} {slots.length > 1 ? 'spaces' : 'space'} abailable</p>
                <div class="card-actions justify-center">
                    <button 
                    >
                    <label htmlFor="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} 
                    class="btn btn-secondary uppercase">Book Appoinment</label>

                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;