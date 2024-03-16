import React from 'react'
import { Link } from 'react-router-dom'
import corzina from '../../assets/svg/basket.svg'
import heart from '../../assets/svg/favorites1.svg'
import Man from '../../assets/svg/user.svg'
import Search from '../../assets/svg/Vector.svg'
import BaiNur from '../../assets/svg/BAINUR.svg'

import './Header.css'





function Header() {
  return (
    <header>
      <div className='container'>
        <div>
          <img src={BaiNur} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>О нас</Link>
            </li>
            <li>
              <Link to='/'>Для Мужчин</Link>
            </li>
            <li>
              <Link to='/'>Для Женщин</Link>
            </li>
            <li>
              <Link to='/'>Для Детей</Link>
            </li>
          </ul>
          <div className='image-info'>
            <img className='man' src={Man} alt="" />
            <select className='select' name="" id="">
              <option className='option' value="">Ru</option>
            </select>
            <img className='corzina' src={corzina} alt="" />
            <img className='search' src={Search} alt="" />
            <img className='heart' src={heart} alt="" />

          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
