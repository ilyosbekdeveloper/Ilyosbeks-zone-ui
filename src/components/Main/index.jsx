import React from "react";
import "./Main.scss";
import { Button, Container } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Search } from "@material-ui/icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// brands
import Airnb from "../../imgs/airbnb.svg";
import DropBox from "../../imgs/dropbox.svg";
import Facebook from "../../imgs/facebook.svg";
import Google from "../../imgs/google.svg";

export const Main = () => {
  return (
    <div className="main">
      <Container>
        <div className="d-flex jcsb w-100">
          <div className="main-container">
            <div className="main-title">
              <Typography
                variant="h2"
                component={"div"}
                sx={{ color: "#fff", fontWeight: "bold", pb: "1rem" }}
              >
                Get The{" "}
                <Typography sx={{ color: "#fa541c" }} variant="span">
                  Career
                </Typography>{" "}
                You Deserve
              </Typography>
            </div>
            <Typography
              variant="p"
              component={"div"}
              sx={{ color: "#919EAB", fontSize: "1rem", py: "1rem" }}
            >
              Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum <br />{" "}
              laoreet sapien, quis venenatis ante odio sit amet eros.
            </Typography>
            <div className="search-section">
              <div className="left-search">
                <Typography
                  variant="span"
                  component={"div"}
                  sx={{ display: "inline-block", color: "#919eab", pr: "10px" }}
                >
                  <Search />
                </Typography>
                <input type="text" placeholder="Job title, keyw..." />
                <Typography
                  variant="span"
                  sx={{
                    color: "#919eab",
                    fontSize: "14px",
                    pr: "10px",
                    borderRight: "1px solid  #bdbdbd",
                  }}
                >
                  <ExpandMoreIcon />
                </Typography>
              </div>
              <div className="right-search">
                <Typography
                  variant="span"
                  component={"div"}
                  sx={{
                    display: "inline-block",
                    color: "#919eab",
                    pl: "10px",
                    pr: "10px",
                  }}
                >
                  <LocationOnIcon />
                </Typography>
                <input type="text" placeholder="Location" />
                <Typography
                  variant="span"
                  sx={{ color: "#919eab", fontSize: "14px" }}
                >
                  <ExpandMoreIcon />
                </Typography>
                <Button className="searchButton2">
                  <Search />
                </Button>
              </div>
            </div>
            <div className="sponsers">
              <img src={Airnb} alt="Airnb" className="sponser-img" />
              <img src={DropBox} alt="Drop box" className="sponser-img" />
              <img src={Facebook} alt="Facebook" className="sponser-img" />
              <img src={Google} alt="Google" className="sponser-img" />
            </div>
            <div className="results">
              <Typography
                variant="div"
                component={"div"}
                sx={{
                  borderRight: "1px dashed #919EAB",
                  pr: "20px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component={"div"}
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  2m+
                </Typography>
                <Typography
                  variant="p"
                  component={"div"}
                  sx={{ color: "#555", fontSize: "16px" }}
                >
                  Jobs
                </Typography>
              </Typography>
              <Typography
                variant="div"
                component={"div"}
                sx={{
                  borderRight: "1px dashed #919EAB",
                  pr: "20px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component={"div"}
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  500k+
                </Typography>
                <Typography
                  variant="p"
                  component={"div"}
                  sx={{ color: "#555", fontSize: "16px" }}
                >
                  Successful Hiring
                </Typography>
              </Typography>
              <Typography
                variant="div"
                component={"div"}
                sx={{
                  borderRight: "1px dashed #919EAB",
                  pr: "20px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component={"div"}
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  250k+
                </Typography>
                <Typography
                  variant="p"
                  component={"div"}
                  sx={{ color: "#555", fontSize: "16px" }}
                >
                  Partners
                </Typography>
              </Typography>
              <Typography
                variant="div"
                component={"div"}
                sx={{ pr: "20px", textAlign: "center" }}
              >
                <Typography
                  variant="h5"
                  component={"div"}
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  156k+
                </Typography>
                <Typography
                  variant="p"
                  component={"div"}
                  sx={{ color: "#555", fontSize: "16px" }}
                >
                  Employee
                </Typography>
              </Typography>
            </div>
          </div>

          <div className="right-div"></div>
        </div>
      </Container>
    </div>
  );
};
