import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import Login from './Components/Login'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/signup' element={<SignUp/>}  />
        <Route path='/login' element={<Login/>} />
      </Routes>

    </div>
  )
}

export default App