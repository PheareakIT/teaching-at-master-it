import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Class from './pages/Class'
import Lesson from './pages/Lesson'
import About from './pages/About'
import RootLayout from './templates/RootLayout'
import AuthLayout from './templates/AuthLayout'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* redirect root to auth */}
          <Route path="/" element={<AuthLayout to="/auth" replace />} />

          <Route path="/" element={<RootLayout />}>

            <Route path="/" element={<Home />}></Route>
            <Route path="/class" element={<Class />}></Route>
            <Route path="/lesson" element={<Lesson />}></Route>
            <Route path="/about" element={<About />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App