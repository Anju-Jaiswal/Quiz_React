import React, { useState } from 'react';
import { data } from './data';
import './stylequiz.css';

export default function QuizApp() {
    const[index, setIndex] = useState(0);
    const[score, setScore] = useState(0);
    const[option, setOption] = useState('');
    const[finished , setFinish] = useState('');
    const correctAnswers = ['Option1','Option1','Option1','Option1','Option1',
        'Option1','Option1','Option1','Option1','Option1']

    const handleNext = ()=>{
    if(index < data.length-1){
       if(correctAnswers[index] === option) {
                setScore(score+1);
             }
         setIndex(index+1);
         setOption('');
    } else {
        setFinish(true);
    } 

    }
    if(finished) {
        return(
        <>
        <h1>Quiz Finished</h1>
        <h3>Your Score is {score} out of {data.length}</h3>
        </>
        )
    }


    const handleSelect =(optn)=>{
           setOption(optn);
    }
  return (
    <div className='quiz'>
        <h1>KodQuiz</h1>
        <h3>{data[index].Question}</h3>
        <ul>
            <li className={option === 'Option1'? 'selected':''}
            onClick={()=>{handleSelect('Option1')}}
            >{data[index].option1}</li>
            
            <li className={option === 'Option2'? 'selected':''}
            onClick={()=>{handleSelect('Option2')}}
            >{data[index].option2}</li>

            <li className={option === 'Option3'? 'selected':''}
            onClick={()=>{handleSelect('Option3')}}
            >{data[index].option3}</li>

            <li className={option === 'Option4'? 'selected':''}
            onClick={()=>{handleSelect('Option4')}}
            >{data[index].option4}</li>
        </ul>

        <button onClick={handleNext} disabled={!option}>Next</button>
        <h5>Question {index+1} of {data.length}</h5>
    </div>
  )
}
