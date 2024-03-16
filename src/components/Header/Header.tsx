import React from 'react'
import { Link } from 'react-router-dom'
import User from './svg/user.svg'
import Basket from './svg/basket.svg'
import Vektor from './svg/Vector.svg'
import Favorites1 from './svg/favorites1.svg'

function Header() {
  return (
    <div>

   <li><Link to='/'>Home</Link></li> 
   <li><Link to='/contact'>Contact</Link></li>
    

    </div>
  )
}

export default Header
