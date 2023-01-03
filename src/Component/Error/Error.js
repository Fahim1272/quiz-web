import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-red-700 mb-10'> 404 This page is not Found.</h1>
            <NavLink to='/'>Go Home</NavLink>
        </div>
    );
};

export default Error;