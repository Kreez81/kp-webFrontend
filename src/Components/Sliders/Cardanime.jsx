import { Swiper, SwiperSlide } from "swiper/react";
import Durarara from "../../Assets/Durarara.jpg";
import HxH from "../../Assets/HxH1.jpg";
import Naruto from "../../Assets/Naruto.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./card.css";

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>

          <img src={HxH} alt="" />
          <a href="https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011" target="_blank" rel="noopener noreferrer"><text>HxH</text></a>
          <p>One of the best to start, excellent story with good humor.</p>

        </SwiperSlide>

        <SwiperSlide>

          <img src={Naruto} alt="" />
          <a href="https://naruto-official.com/en" target="_blank" rel="noopener noreferrer"><text>Naruto</text></a>
          <p>This is long but the story will get you, it has some crazy characters to watch.</p>

        </SwiperSlide>

        <SwiperSlide>

          <img src={Durarara} alt="" />
          <a href="https://myanimelist.net/anime/6746/Durarara" target="_blank" rel="noopener noreferrer"><text>Durarara</text></a>
          <p>I dont know why it is not popular, I def recommend it 10/10.</p>

        </SwiperSlide>

        <SwiperSlide>


          <text><br /><br /> Never ending</text>
          <p>It will be 100 pages to add, so these will be the ones i wanted to share. It is not based on rankings, 
            i will make Animelist page and add it later Ty. ✌️</p>

        </SwiperSlide>
        
      </Swiper>
    </>
  );
}