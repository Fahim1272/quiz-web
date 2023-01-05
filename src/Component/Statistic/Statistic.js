
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistic = () => {
    const totalques = useLoaderData();
    const data = totalques.data;
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold mb-10 mt-10'>Total Question Statictis.</h1>

            <div className='flex justify-center sm:mr-5'>
                <LineChart width={300} height={300} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>

        </div>
    );
};

export default Statistic;