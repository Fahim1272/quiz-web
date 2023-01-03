import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Statistic from '../Statistic/Statistic';
import Topic from '../Topic/Topic';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className='banner-part'>
                <div>
                    <h1 className='text-6xl text-black font-bold'>Welcome to Quiz Hunter</h1>
                    <p className='text-2xl font-bold'>YAY! Here you will get many Quizes about Web Development </p>
                </div>
            </div>
            <div>
                <Topics></Topics>
            </div>
            <div>
                <Statistic></Statistic>
            </div>
            <div>
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Home;