import React, { useState,useEffect } from 'react'
import './App.css'
const App = () => {
    const[advice,setAdvice] = useState('kuch');
    useEffect(()=>{
      getQuote();
    },[])
    const getQuote = ()=>{
      let url = `https://api.adviceslip.com/advice`;
      fetch(url)
        .then(res=>res.json())
        .then(data=>{
          setAdvice(data.slip.advice)
        })
    }
    const handleClick = ()=>{
      getQuote();
    }
  return (
    <div className='advice-box'>
      <h1>RANDOM ADVICE GENERATOR</h1>
      <p className='advice'>{advice}</p>
      <button onClick={handleClick} className='btn'>GET ADVICE</button>
    </div>
  )
}

export default App
