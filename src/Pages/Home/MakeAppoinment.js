import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';
const MakeAppoinment = () => {
    return (
        <section style={{ background: `url(${appoinment})` }}
            className='flex justify-center items-center px-10 py-5'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-primary text-xl font-bold '>Appoinment</h3>
                <h2 className='text-3xl text-white'>Make an appointment Today</h2>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus dolorem, amet, est nesciunt, distinctio repellat tempore doloribus minima exercitationem commodi consequatur! Dolorum, voluptas, quae maxime est architecto ipsum, nesciunt quasi vero accusamus sequi laboriosam eum eveniet quo hic nobis.</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </section>
    );
};

export default MakeAppoinment;