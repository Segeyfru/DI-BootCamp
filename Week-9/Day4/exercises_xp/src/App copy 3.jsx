import { useState, useEffect } from 'react'
import './App.css'
import Experiences from './components/Experiences'
import Skills from './components/Skills'
import SocialMedias from './components/SocialMedias'


// ../../public/data.json


function App() {

  return (
    <>
    <SocialMedias />
    <hr />
    <Skills />
    <hr />
    <Experiences />


    </>
  )
}

export default App
