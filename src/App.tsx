import './App.css'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import ProgramsAndSchools from './components/pages/ProgramsAndSchools'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <div>
      <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/programsandschools" element={<ProgramsAndSchools />} />
          </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
