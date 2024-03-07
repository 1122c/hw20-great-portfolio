// import { useState } from 'react'
import Header from './components/Header/Header'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {


  return (
    <>
    <Header/>
    <About></About>
    <Portfolio/>
    <Contact/>
    <Resume/>
    <Footer/>
    </>
  )
}

export default App
