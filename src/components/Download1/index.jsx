import React from "react";
import "./Doownload1.scss";
import { Button, Container } from "@material-ui/core";
import { Apple } from "@material-ui/icons";

export const Download = () => {
  return (
    <div className="download">
      <Container>
        <h1 className="download-title">Download App</h1>
        <p className="downolad-description">
          Now finding the new job just got even easier with our new app!
        </p>

        <div className="download-btns">
          <Button className="download-btn d-flex">
            <div className="btn-icon">
              <Apple />
            </div>
            <div className="btn-titles">
              <div className="btn-header">Dwnload On The</div>
              <div className="btn-body">Apple Store</div>
            </div>
          </Button>
          <Button className="download-btn d-flex">
            <div className="btn-icon">
              <img
                src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Icon-Logo.wine.svg"
                className="play-market-icon"
              />
            </div>
            <div className="btn-titles">
              <div className="btn-header">Dwnload On From</div>
              <div className="btn-body">Play Market</div>
            </div>
          </Button>
        </div>
      </Container>
    </div>
  );
};
