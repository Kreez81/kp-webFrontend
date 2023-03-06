import './Third.css';
import Cardgame from '../Sliders/Cardgame';
import Cardpaint from "../Sliders/Cardpaint";
import Cardanime from "../Sliders/Cardanime";
import { Link } from 'react-scroll';
import { Fade } from 'react-reveal';
import {HiOutlineChevronDown,HiOutlineChevronUp} from "react-icons/hi";

function Third() {

  return (
    <div id="Thrdpage" className="Thrdtop">
      
        <Link to="Secpage"  smooth={true} duration={1000}><button className="ButtthrU"><HiOutlineChevronUp/></button></Link>
        <Link to="Forpage"  smooth={true} duration={1000}><button className="ButtthrD"><HiOutlineChevronDown/></button></Link>
        
      <div className='hobbPage'>
        <section className='hobbHead'>
          This i like...
        </section>
        
        <Fade top distance="8%" delay="100">
        <div className='gameBlock'>
          <p className='gameHead'>:Game</p>
          <div className='gameIn'>
          < Cardgame/>
          </div>
        </div>
        <div className='paintBlock'>
          <p className='paintHead'>: Paint</p>
          <div className='paintIn'>
          < Cardpaint/>
          </div>
        </div>
        <div className='animeBlock'>
          <p className='animeHead'>: Anime</p>
          <div className='animeIn'>
          < Cardanime/>
          </div>
        </div>
        </Fade>
      </div>


    </div>


  )
}
export default Third;