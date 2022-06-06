
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const { name, _id, slots } = treatment;
    const formatedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;


        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,

        }

        fetch('https://pacific-brushlands-52330.herokuapp.com/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appointment is set, ${formatedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch()
                //to close modal
                setTreatment(null);
            })


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-secondary py-2 text-lg">Booking For:{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) =>
                                    <option key={index} value={slot}>
                                        {slot}</option>)
                            }

                        </select>
                        <input type="name" name='name' disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone No" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' class="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;