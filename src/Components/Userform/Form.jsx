import React from 'react'
import "./Form.css";
import { Link } from 'react-router-dom';

function Form() {

  return (

    <div >
      <button className='Formline'>
        <Link className='Formlink' to="/Formpage">
          Hey, I have some questions !
        </Link>
      </button>
    </div>


  )
}

export default Form;