import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Nav from "../src/components/Nav.jsx"
import Hero from "../src/components/Hero.jsx"
import Hero4 from "../src/components/Hero4.jsx"
import Hero5 from "../src/components/Hero5.jsx"
import Hero6 from "../src/components/Hero6.jsx"
import Hero7 from "../src/components/Hero7.jsx"
import Location from "../src/components/Location.jsx"
import 'swiper/swiper-bundle.css';
import Contact from '../src/components/Contact.jsx'

function App() {
  

  return  (
    <div>

      <Nav/>
      <Hero/>
      <Hero4/>
      <Hero5/>
      <Hero6/>
      <Hero7/>
      <Location/>
      <Contact/>
      
    </div>
  )
}

export default App
