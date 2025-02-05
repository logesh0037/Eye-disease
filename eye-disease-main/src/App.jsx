import React from 'react'
import Navbar from './assets/Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Services from './assets/Pages/Services';
import Contact from './assets/Pages/Contact';
import Login from './assets/Pages/Login';
import Faq from './assets/Pages/Faq';
import Footer from './assets/Components/Footer';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
