import React from 'react';
import { Outlet } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Services;