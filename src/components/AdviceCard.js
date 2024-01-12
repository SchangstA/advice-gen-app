import React, { useState, useEffect } from 'react'
import dividerDesktop from '../images/pattern-divider-desktop.svg'
import dividerMobile from '../images/pattern-divider-mobile.svg'
import dice from '../images/icon-dice.svg'
import axios from 'axios'

export const AdviceCard = () => {
    const [advice, setAdvice] = useState("")

    const getAdvice = async() => {
        const res = await axios.get("https://api.adviceslip.com/advice")
        const advice = await res.data.slip;
        setAdvice(advice)
    }
    
    useEffect(() => {
        getAdvice()
    }, [])

  return (
    <div className='card'>
      <p>Advice #{advice.id}</p>
      <h2>{advice.advice}</h2>
      <img src={dividerDesktop} className='divider-desktop' alt='divider' />
      <img src={dividerMobile} className='divider-mobile' alt='divider' />
      <div className='dice'>
        <img src={dice} alt='dice' onClick={getAdvice} />
      </div>
    </div>
  )
}

export default AdviceCard
