import React from 'react'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Pages/Home';
import Pricing from '../Pricing/Pricing';
import Course from '../Course/Course';


function RoutingLayout() {
  return (
  <>
<Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/service' element={<Pricing/>}/>
    <Route path='/cource' element={<Course/>}/>
  </Routes>
  <Footer/>
</Router>

  </>
  )
}

export default RoutingLayout