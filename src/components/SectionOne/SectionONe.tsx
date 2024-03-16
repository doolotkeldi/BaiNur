import React from 'react'
import './SectionOne.css'
import Glavnaya from '../../assets/svg/Glavnaya.svg'

function SectionONe() {
  return (
    <section>
      <div className='wrapper'>
        <h1>Главная</h1>
        <img src={Glavnaya} alt="" />
      </div>
    </section>
  )
}

export default SectionONe
