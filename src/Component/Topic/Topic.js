import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topic.css';
const Topic = ({topic}) => {
    const quiztopic = useNavigate();
    const quizNavigation = (id) =>{
        quiztopic(`/quiz/${id}`);
    }
    const { logo, name, total} = topic;
    return (
        <div className='t-data bg-yellow-400'>
            <div>
                 
            <img src={logo}></img>
            <h2 className='text-4xl text-white font-bold mb-4'>{name}</h2>
            <h2 className='text-2xl text-white font-bold mb-4'>Total Question: {total}</h2>
            <button onClick={()=> quizNavigation(topic.id)}>
                Start quiz
            </button>
            </div>
        </div>
    );
};

export default Topic;