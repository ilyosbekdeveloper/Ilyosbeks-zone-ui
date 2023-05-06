import React, { useState } from "react";
import "./FeaturedJobs.scss";
import { Button, Container, Divider } from "@material-ui/core";
import { ChevronRight, LocationOnOutlined } from "@material-ui/icons";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { DatasBox } from "../../data/featuredBox";
import { HurtIcon } from "../HurtIcon";

export const FeaturedJobs = () => {
  const datasBox = DatasBox();
  return (
    <div className="featured-jobs">
      <Container>
        <div className="featured-title">
          <div className="main-p right-featured">FEATURED JOBS</div>

          <div className="left-featured">
            <h1>
              Jobs available apply to Editorial Specialist, Account <br />
              Manager, Human Resources Specialist and more!
            </h1>
          </div>
        </div>

        <div className="featured-container">
          <div className="featured-boxes">
            {datasBox.map((item, index) => (
              <div className="featured-box" key={index}>
                <div className="featured-container-title d-flex jcsb">
                  <img src={item.img} className="f-title-img" />
                  <HurtIcon />
                </div>

                <a href="#" className="featured-title2">
                  {item.fTitle2}
                </a>
                <div className="text-pr">{item.textPr}</div>
                <div className="location d-flex">
                  <LocationOnOutlined />
                  <span>{item.lacationSpan}</span>
                </div>

                <div className="date main-p">{item.date}</div>
                <Divider />

                <div className="datas main-p d-flex">
                  <div className="data d-flex">
                    <span>
                      <EqualizerOutlinedIcon />
                    </span>
                    <span>{item.data1}</span>
                  </div>
                  <div className="data d-flex">
                    <span>
                      <AccessTimeOutlinedIcon />
                    </span>
                    <span>{item.data2}</span>
                  </div>
                </div>
                <div className="datas main-p d-flex">
                  <div className="data d-flex">
                    <span>
                      <ContactMailOutlinedIcon />
                    </span>
                    <span>{item.data3}</span>
                  </div>
                  <div className="data d-flex">
                    <span>
                      <PersonOutlineOutlinedIcon />
                    </span>
                    <span>{item.data4}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="featured-footer d-flex jcc">
          <Button className="d-flex jcsb featured-btn">
            <span>View All Jobs</span>
            <span>{<ChevronRight />}</span>
          </Button>
        </div>
      </Container>
    </div>
  );
};
