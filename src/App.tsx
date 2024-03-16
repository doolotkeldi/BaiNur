import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
      app
    </div>
  )
}

export default App
