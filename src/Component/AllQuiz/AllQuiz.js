import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQues from '../QuizQues/QuizQues';

const AllQuiz = () => {
    const quizs = useLoaderData();
    const {data} = quizs;
    const {questions} = data;
    console.log(questions);
    return (
        <div className='text-center mt-5 rounded-t-lg'>
            <div className='quiz-head text-center bg-lime-400 m-5 p-5'>
            <h1 className='text-3xl font-bold'>Quiz on: {data.name}</h1>
            <h1 className='text-3xl font-bold'>Total question: {data.total}</h1>
            </div>
            
            <div>
                {
                    questions.map(question => <QuizQues
                    key={question.id}
                    question={question}
                    ></QuizQues>)
                }
            </div>
        </div>
    );
};

export default AllQuiz;