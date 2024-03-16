import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import SectionONe from '../SectionOne/SectionONe'

function Layout() {
  return (
    <div>
        <Header/>
        <SectionONe/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default Layout
