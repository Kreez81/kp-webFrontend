// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import valo from "../../Assets/valo1.jpeg";
import AC from "../../Assets/AC.jpg";
import COC from "../../Assets/COC2.jpg";

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

          <img src={valo} alt="" />
          <a href="https://playvalorant.com/en-gb/" target="_blank" rel="noopener noreferrer"><text> Valorant </text> </a>
          <p>A online FPS game, playing with friends and my most played game.</p>

        </SwiperSlide>

        <SwiperSlide>

          <img src={AC} alt="" />
          <a href="https://www.ubisoft.com/en-gb/game/assassins-creed" target="_blank" rel="noopener noreferrer"><text>Assassins Creed</text></a>
          <p>A story mode RPG , best of all. My favourite series to play : ) </p>

        </SwiperSlide>

        <SwiperSlide>

          <img src={COC} alt="" />
          <a href="https://supercell.com/en/games/clashofclans/" target="_blank" rel="noopener noreferrer"><text>CoC</text></a>
          <p>Cant leave this out, spent so much time on this, was so adictive.</p>

        </SwiperSlide>
        
      </Swiper>
    </>
  );
}