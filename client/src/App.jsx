
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home.jsx"
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import { Toaster } from 'react-hot-toast'


function App() {
  

  return (
  <>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </>
  )
}

export default App
