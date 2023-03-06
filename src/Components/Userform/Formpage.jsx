import React, { useState } from 'react'
import "./Form.css";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import{GiSplitCross} from "react-icons/gi";
import Axios from 'axios';
import { Alert } from 'react-bootstrap';
import {RxCross2} from "react-icons/rx";

export default function Formpage() {
  const [know,setKnow] = useState("");
  const [name,setName] = useState("");
  const [like,setLike] = useState("");
  const [recomm,setRecomm] = useState("");
  const [site,setSite] = useState("");
  const [show, setShow] = useState(false);

  // const url ='https://kp-webserver.onrender.com'

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('https://kp-webserver.adaptable.app/insert', {
      knowMe :know,
      yourName :name,
      thingLike : like,
      recommendMe : recomm,
      siteLike :site

    })
    
  }
  
  return (
    <motion.div className='Formpage'
      initial={{ opacity: .6 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: .6, transition: { duration: .5 } }}
    >
      <div className='Form'>
        <text className='Formhead'>about-あなたについて-you</text>
        <Form className='Formbox' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicSelect'>
            <Form.Label className='inputname'>You know me?</Form.Label>
            <Form.Control className='inputblock' placeholder='Yes/No' onChange={(e) => {setKnow(e.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='inputname'>Your cool name</Form.Label>
            <Form.Control className='inputblock' onChange={(e) => {setName(e.target.value)}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='inputname'>1 thing u like</Form.Label>
            <Form.Control className='inputblock' placeholder='hobbie,art,etc' onChange={(e) => {setLike(e.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='inputname'>Recommend me</Form.Label>
            <Form.Control className='inputblock' placeholder='Show,band,etc' onChange={(e) => {setRecomm(e.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='inputname'>Liked it?</Form.Label>
            <Form.Control className='inputblock'  placeholder='about this site' onChange={(e) => {setSite(e.target.value)}}/>
          </Form.Group>
          <Button className='summitbutt' variant="primary" type="submit" onClick={() => setShow(true)}>
            Submit
          </Button>
          <Button className='resetbutt' type='reset'>reset?</Button>
        </Form>
        <Alert className='Donealert' show={show} variant='success' ><text className='Alertmess'>Thank you</text>
        <button className='Alertclose' onClick={() => setShow(false)}><RxCross2/></button>
        </Alert>
      </div>
      
      <Link to="/"><button className='Closebutt'><GiSplitCross/></button></Link>
    </motion.div>
  )
}
