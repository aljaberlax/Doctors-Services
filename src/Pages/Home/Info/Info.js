import React from 'react';
import CardInfo from './CardInfo';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  text-white'>
            <CardInfo cardTitel='Opening Hours' bgClass='bg-gradient-to-r from-secondary to-primary'  img={clock}></CardInfo>
            <CardInfo cardTitel='Visit Our Location'  bgClass='bg-accent' img={marker}></CardInfo>
            <CardInfo cardTitel='Contact Us Now' bgClass='bg-gradient-to-r from-secondary to-primary'  img={phone}></CardInfo>
        </div>
    );
};

export default Info;