import React, { useState } from 'react'
import './App.css';
import {questions} from './api'
import Myaccordian from './Myaccordion'
const Accordion = () => {
    const[data, setData]= useState(questions)
    return (
        <>
        <div className='main_div'>
            <h1>React Interview Questions</h1>
            {data.map((curE, ind)=>{
                return <Myaccordian 
                key={ind} {...curE}/>
            })}

        </div>
        </>
    )
}

export default Accordion
