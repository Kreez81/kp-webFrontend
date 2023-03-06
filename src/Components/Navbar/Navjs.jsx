import './Navcss.css';
import pfp from '../../Assets/pfp.png';
import { MdOutlineSegment } from 'react-icons/md';



function Navjs() {
    return (
        <div className='Navtop'>

            {/* <a ><img src={pfp} className="Mylogo" alt="logo" /></a> */}
            <img src={pfp} className="Mylogo" alt="logo" />
            <div className='Myintro' >
                Hi there ..
            </div>
            <>
            
              <MdOutlineSegment className='Home' />
                <div className='Tooltiptxt'>
                     Dont click this !
                </div>
            </>

        </div>
    );
}
export default Navjs;