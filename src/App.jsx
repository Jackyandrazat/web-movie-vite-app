// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import {
  BrowserRouter as Router, 
  Route,
  Routes,
} from  "react-router-dom";
import './App.css'
import Index from './pages/Index';
import FilmList from './pages/FilmList';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/filmlist" element={<FilmList/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
