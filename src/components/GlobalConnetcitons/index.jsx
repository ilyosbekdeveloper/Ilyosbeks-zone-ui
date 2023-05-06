import React, { useEffect } from "react";
import "./GlobalConnection.scss";
import { Button } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Global } from "../../data/Global";

export const GlobalConnection = () => {
  const global = Global();

  return (
    <div className="GlobalConnection">
      <div className="glabal-container d-flex">
        <div className="global-left-section">
          <h1 className="global-title">
            Gloabal <br /> Connections
          </h1>
          <p className="main-p global-description">
            Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla
            neque dolor, sagittis eget, iaculis quis.
          </p>
          <Button className="global-btn d-flex">
            <div>View All Jobs</div>
            <div>
              <ChevronRight />
            </div>
          </Button>
        </div>

        <div className="global-right-section">
          <>
            <Swiper
              slidesPerView={4}
              spaceBetween={15}
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Pagination]}
              className="swiper-2"
            >
              {global.map((item, index) => (
                <SwiperSlide className="global-category tac" key={index}>
                  <div className="global-img w-100">
                    <img src={item.img} className="w-100" />
                  </div>
                  <div className="global-title">{item.title}</div>
                  <div className="global-job main-p">{item.job}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};
