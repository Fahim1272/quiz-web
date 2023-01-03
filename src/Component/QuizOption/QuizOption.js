import React from 'react';
import './QuizOption.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizOption = ({option, ans}) => {
    const notify = () => toast('Ans is Correct!');
    const wrongnotify = () => toast('Ans is wrong!');

    const handleClicked = (option) => {
        if(ans === option){
            notify();
        }
        else{
            wrongnotify();
        }
    }
    return (
        <div>
            <div onClick={()=> handleClicked(option)} className='option-container'>
                <h2>{option}</h2>
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuizOption;