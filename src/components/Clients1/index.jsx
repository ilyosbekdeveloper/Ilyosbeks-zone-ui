import React from "react";
import "./Clients.scss";
import { Container } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Img1 from "../../imgs/lenovo_original.svg";
import { ClientsContainerImgs } from "../../data/ClientsContainerImgs";

export const Clients = () => {
  const clients = ClientsContainerImgs();
  return (
    <div className="clients tac">
      <Container>
        <h1 className="h1 tac">Our Clients</h1>
        <p className="clients-p main-p tac">
          Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget
          lorem. Etiam vitae tortor.
        </p>

        <div className="clients-container">
          <Swiper
            slidesPerView={6}
            spaceBetween={15}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="clients-container"
            loop={true}
            autoplay={{
                delay: 1000,
            }}
          >
            {clients.map((cleint, index) => (
              <SwiperSlide key={index}>
                <img src={cleint.img} className="clients-container-img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};
