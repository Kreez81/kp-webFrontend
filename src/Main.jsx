import React from 'react'
import './App.css';
import Firstbody from './Components/Firstbody/First';
import Secbody from './Components/Secbody/Second';
import Thrdbody from './Components/Thrdbody/Third';
import GoToTop from './Components/Scrollbtns/goToTop';
import Forthbody from './Components/Zforbody/Forth';
import Form from "./Components/Userform/Form";
import { motion } from 'framer-motion';

function Main() {
  
  return (
    <motion.div 
      className='Apptop' 
      initial={{ opacity:.6}}
      animate={{ opacity:1}}
      exit={{ opacity:.6 ,transition:{duration:.5}}}
      
      >
      <Form/>
      <GoToTop />
      <Firstbody />
      <Secbody />
      <Thrdbody />
      <Forthbody />
      
    </motion.div >
  );
}

export default Main;