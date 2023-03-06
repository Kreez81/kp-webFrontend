import './First.css';
import Navbar from '../Navbar/Navjs';
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from 'react';
import { CgArrowLongLeft,CgArrowLongRight} from "react-icons/cg";
import { Link } from 'react-scroll';
import {Fade} from "react-reveal";

function First() {

    const [width, setWidth] = useState(0);
    const Sliderbox = useRef();
    useEffect(() => {
        setWidth(Sliderbox.current.scrollWidth - Sliderbox.current.offsetWidth)
    }, [])


    return (

        <div className="Firsttop">
            <Navbar />
            <Fade top distance="18%" delay="300">
               <h1 className="Line1" >Its Me and This is a Site </h1>
            </Fade>
            <motion.div ref={Sliderbox} className='Sliderbox'>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='Insideslider'>
                    <button className='Butts'> <Link to="Secpage" className='FPlink' smooth={true} duration={800} >Mee</Link></button>
                    <button className='Butts'><Link to="Thrdpage" className='FPlink' smooth={true} duration={800}>Hobb</Link></button>
                    <button className='Butts'><Link to="Forpage" className='FPlink' smooth={true} duration={800}>infu</Link></button>
                    {/* <Link className='Butts' to="Secpage" smooth={true} duration={200}>Mee</Link>
                    <Link className='Butts' to="Thrdpage" smooth={true} duration={200}>Hobb</Link>
                    <Link className='Butts' to="Forpage" smooth={true} duration={200}>infu</Link> */}
                </motion.div>
            </motion.div>

            <div className='Dragicon'><CgArrowLongLeft /><CgArrowLongRight /></div>

        </div>
    )
}
export default First;