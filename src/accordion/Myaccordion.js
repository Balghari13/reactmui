import React, { useState } from 'react'

const Myaccordion = ({question,answer}) => {
    const[show, setList]=useState(false)
    return (
        <>
        <div className='main_heading'>
            <p onClick={()=>setList(!show)}>{show?"-":"+"}</p>
            <h3>{question}</h3>  
        </div>
        {show && <p className='answer'>{answer}</p>}
    </>
    )
}

export default Myaccordion
