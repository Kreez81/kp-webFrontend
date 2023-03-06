import React from 'react'
import './App.css';
import Main from "./Main";
import Formpage from "./Components/Userform/Formpage";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className='Apptop'>
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element = {<Main />} />
       <Route path="/Formpage" element={<Formpage />} />
      </Routes>
      </AnimatePresence>
    </div >
  );
}

export default App;
