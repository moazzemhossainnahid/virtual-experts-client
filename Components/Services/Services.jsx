import React from 'react';
import Header from './Header';
import ServicesCard from './ServicesCard';
import WhatWeDo from './WhatWeDo';

const ServicesComponents = ({ whatWeDo, servicesCardData, serviceCardHeader }) => {
    return (
        <div>
            <Header />
            <WhatWeDo whatWeDo={whatWeDo} />
            <ServicesCard servicesCardData={servicesCardData} serviceCardHeader={serviceCardHeader} />
        </div>
    );
};

export default ServicesComponents;