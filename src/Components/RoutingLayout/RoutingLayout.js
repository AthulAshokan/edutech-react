import React from 'react'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Pages/Home';
import Pricing from '../Pricing/Pricing';
import Course from '../Course/Course';
import About from '../Pages/About/About';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Support from '../Pages/Support/Support';


function RoutingLayout() {
  return (
  <>
<Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/service' element={<Pricing/>}/>
    <Route path='/cource' element={<Course/>}/>
    <Route path='/aboutus' element={<About/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/support' element={<Support/>}/>
  </Routes>
  <Footer/>
</Router>

  </>
  )
}

export default RoutingLayout