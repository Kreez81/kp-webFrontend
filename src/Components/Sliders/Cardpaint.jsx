import { Swiper, SwiperSlide } from "swiper/react";
import Scene from "../../Assets/Scene.jpg";
import Trees from "../../Assets/Trees.jpg";
import Forest from "../../Assets/Forest.jpg"

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

          <img src={Trees} alt="" />
          <a href="https://teamtrees.org/" target="_blank" rel="noopener noreferrer"><text>Trees</text></a>
          <p>YUP trees, it was easy, I saw this online i think. </p>

        </SwiperSlide>

        <SwiperSlide>

          <img src={Forest} alt="" />
          <a href="https://neal.fun/deep-sea/" target="_blank" rel="noopener noreferrer"><text>Forest</text></a>
          <p>Also saw this online, now it is with my sis, gifted her for wall decor.</p>

        </SwiperSlide>

        <SwiperSlide>

          <img src={Scene} alt="" />
          <text>Scene</text>
          <p>This is a scene from a anime where he jumps up, took screenshot, I guess it came out good. </p>

        </SwiperSlide>
        
      </Swiper>
    </>
  );
}