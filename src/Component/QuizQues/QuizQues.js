import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import { EyeIcon } from '@heroicons/react/24/solid';
import './QuizQues.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQues = ({question}) => {
    const notify = () => toast(`correct Ans: ${question.correctAnswer}`);
    const handelcorrectans = ()=>{
        notify();
    }
   
    return (
        <div className='ques-container text-white'>
            <div className='flex justify-between'>
                <div>
                <h1 className='text-lg font-semibold'>Question: <span className='text-white font-bold text-lg'>{question.question}</span></h1>
                </div>
                <div>
                <EyeIcon onClick={handelcorrectans} className="ques-icon h-8 w-8 text-white"/>
                </div>
            </div>
            <ToastContainer />
            <h1>option: </h1>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
                {
                    question.options.map(option => <QuizOption
                        option = {option}
                        ans={question.correctAnswer}
                        ></QuizOption>)
                }
           </div>
        </div>
    );
};

export default QuizQues;