import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;