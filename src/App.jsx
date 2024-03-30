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
import DetailFilm from './pages/DetailFilm';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/filmlist" element={<FilmList/>} />
          <Route path="/movies/:id" element={<DetailFilm/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
