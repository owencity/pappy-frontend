import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignUpTerm from './pages/SignUpTerm'
import Story from './pages/Story'
import StoryDetail from './pages/StoryDetail'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/signupTerm" element={<SignUpTerm/>}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/story/:id" element={<StoryDetail/>}/>
      </Routes>
    </>
  )
}

export default App
