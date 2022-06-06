import React from 'react';
import fluride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitining from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluride,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 2,
            img: cavity,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 3,
            img: whitining,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center '>
            <h3 className='text-primary text-xl font-bold uppercase'> Our Services</h3>
            <h2  className=' text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {services.map(service=><Service 
                key={service._id}
                service={service}
                >

                </Service>)}
            </div>
        </div>
    );
};

export default Services;