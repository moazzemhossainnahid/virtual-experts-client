import React from 'react';
import BestProduct from './BestProduct';
import Header from './Header';
import ServicesCard from './ServicesCard';
import WhatWeDo from './WhatWeDo';

const ServicesComponents = ({ whatWeDo, servicesCardData, serviceCardHeader }) => {
    return (
        <div>
            <Header />
            <WhatWeDo whatWeDo={whatWeDo} />
            <BestProduct/>
            <ServicesCard servicesCardData={servicesCardData} serviceCardHeader={serviceCardHeader} />
        </div>
    );
};

export default ServicesComponents;