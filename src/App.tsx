import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/HomePage'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Cart from './components/Header/Cart'
import Registration from "./components/registration/Redistartion"




function App() {
  return (
    <div>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App
