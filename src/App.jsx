import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import Main from './components/Main';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NotFound404 from './NotFound404';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
