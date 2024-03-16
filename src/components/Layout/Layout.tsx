import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import SectionONe from '../SectionOne/SectionONe'
import Odejda from '../Odejda/Odejda'

function Layout() {
  return (
    <div>
        <Header/>
        <SectionONe/>
        <Odejda/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default Layout
