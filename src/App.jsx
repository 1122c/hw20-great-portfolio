import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import './App.css'

function App() {


  return (
    <>
    <Header/>
    <About></About>
    <Portfolio/>
    <Contact/>
    <Resume/>
    </>
  )
}

export default App
