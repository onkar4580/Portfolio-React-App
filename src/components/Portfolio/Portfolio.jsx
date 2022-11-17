import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
          <h4>Travel Journel</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <h4>Food Order App</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
          <h2>Todo List </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
          <h4>Business Card</h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
