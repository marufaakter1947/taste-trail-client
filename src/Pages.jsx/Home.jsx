import React from 'react';
import Hero from '../Components/Hero';
import HowItWorks from '../Components/HowItWorks';
import OurServices from '../Components/OurServices';
import FAQ from '../Components/FAQ';

const Home = () => {
    return (
        <div className='bg-green-400'>
            <Hero></Hero>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;