import { useState } from 'react'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [isLogedIn, setIsLogedIn] = useState(false)


  return (
    <BrowserRouter>
      <Route>
        <Route path='/' element={Login} />
      </Route>
    </BrowserRouter>
  )
}

export default App
