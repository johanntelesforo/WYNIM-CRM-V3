import { useState } from 'react'
import './App.css'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import AddStudent from './components/pages/AddStudent'
import ProgramsAndSchools from './components/pages/ProgramsAndSchools'

function App() {
  return (
   <div>
      <ProgramsAndSchools />
   </div>
  )
}

export default App
