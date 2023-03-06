import "./Forth.css";
import { VscPerson } from "react-icons/vsc";
import { FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare} from "react-icons/fa";
import { ImMail } from "react-icons/im";
import{BsDiscord} from "react-icons/bs";
import {HiOutlineChevronUp,HiOutlineChevronDoubleUp} from "react-icons/hi";
import { Link } from "react-scroll";
import Slide from 'react-reveal/Slide';
import {Zoom} from 'react-reveal';

function Forth() {
    window.onanimationstart = function(){
    let toggle = document.querySelector(".toggle");
    let socialBlock = document.querySelector('.socialBlock');
      toggle.onclick = function () {
      socialBlock.classList.toggle('active');
    }};
  
  return (
    <div id="Forpage" className="forTop">
        
          <Link to="Secpage"  smooth={true} duration={1000}><button className="ButtforU"><HiOutlineChevronDoubleUp/></button></Link>
          <Link to="Thrdpage"  smooth={true} duration={1000}><button className="ButtforD"><HiOutlineChevronUp/></button></Link>
        
      <div className="infoPage">
        <section className="infoHead">
          Know more !
        </section>
        <Slide left delay="300" duration="1000" distance="70%">
          <text className='tyLine'>
            VISIT AGAIN~
          </text>
        </Slide>
        <Zoom top duration="1200" delay="200">
        <div className="socialBlock">
          <div className="toggle"><VscPerson/></div>
          <li style={{ "--i": 0 }}>
            <a href="https://instagram.com/karan.kp_?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
          </li>
          <li style={{ "--i": 1 }}>
            <a href="https://twitter.com/KaranPawar81" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
          </li>
          <li style={{ "--i": 2 }}>
            <a href="https://www.linkedin.com/in/karan-pawar-212599219/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </li>
          <li style={{ "--i": 3 }}>
            <a href='https://github.com/Kreez81' target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
          </li>
          <li style={{ "--i": 4 }}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=karan.p2001hello@gmail.com" target="_blank" rel="noopener noreferrer"><ImMail className='sologo' /></a>
          </li>
          <li style={{ "--i": 5 }}>
            <a href="https://discord.com/users/465528987750236181" target="_blank" rel="noopener noreferrer"><BsDiscord className="Dislogo"/></a>
          </li>
        </div></Zoom>
      </div>
      
    </div>
   
    
  )
}
export default Forth;