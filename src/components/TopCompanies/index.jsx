import React from "react";
import "./TopCompanies.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import CompanyImg1 from "../../imgs/company_1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@material-ui/core";
import { TopCompany } from "../../data/TopComapny";

export const TopCompanies = () => {
  const topCompanies = TopCompany();
  return (
    <div className="top-companies">
      <h1 className="top-companies-title">Top Companies</h1>

      <Container className="top-companies-container">
        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
              clickable: true,
              //   type: "fraction",
            }}
            navigation={true}
            modules={[Pagination]}
            className="swiper-1 tac"
          >
            {topCompanies.map((company, index) => (
              <SwiperSlide>
                <img src={company.img} className="company-img" />
                <p className="main-p jobs-in-company">{company.companyJob}</p>
                <p className="company-description">
                  {company.description}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </Container>
    </div>
  );
};
