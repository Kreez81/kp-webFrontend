import './Second.css';
import {RiRoadMapFill,RiComputerFill,RiPaintFill} from "react-icons/ri";
import {GiComputerFan} from "react-icons/gi";
import Fade from "react-reveal/Fade";
import { Link } from 'react-scroll';
import {HiOutlineChevronDown,HiOutlineChevronDoubleDown} from "react-icons/hi";

function Second() {
    

    return(
    <div id="Secpage" className="Sectop">
        
        <Link to="Thrdpage"  smooth={true} duration={1000}><button className="ButtsecU"><HiOutlineChevronDown/></button></Link>
        <Link to="Forpage"  smooth={true} duration={1000}><button className="ButtsecD"><HiOutlineChevronDoubleDown/></button></Link>
        
        <section className='About'>
        
         <h1>Hello, <br/> I am Karan.</h1>
         
         <ul>
         <Fade left duration="1500" distance="8%" delay="300">
            <li><RiRoadMapFill className='Iconsli'/>- I dont go out much but i like <strong className='Strong'> travelling</strong>.</li>
            <li><RiComputerFill className='Iconsli'/>- 21 year old doing <strong className='Strong'> computer</strong> science.</li>
            <li><RiPaintFill className='Iconsli'/>- <strong className='Strong'>Creative</strong> and excited.</li>
            <li><GiComputerFan className='Iconsli'/>- PC <strong className='Strong'> hardware</strong> stuff.</li>
            </Fade>
         </ul>
         
         </section>
         
    </div>
    )
}
export default Second;