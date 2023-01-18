import React from 'react';
import Header from './Header';
import WhatWeDo from './WhatWeDo';

const ServicesComponents = ({ whatWeDo }) => {
    return (
        <div>
            <Header />
            <WhatWeDo whatWeDo={whatWeDo} />
        </div>
    );
};

export default ServicesComponents;