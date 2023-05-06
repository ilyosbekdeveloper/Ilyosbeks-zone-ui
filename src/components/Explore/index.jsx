import React, { useContext } from "react";
import "./Explore.scss";
import { Button, Container } from "@material-ui/core";
import { Jobs } from "../../data/Jobs";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SaidbarContext from "../../context/saidbarContext";

export const Explore = () => {
  const jobs = Jobs();
  const { theme } = useContext(SaidbarContext);
  return (
    <div className="explore">
      <Container>
        <div className="main-title">FOR CANDIDATES</div>
        <h1 className="explore-title">Explore Thousands of Jobs</h1>
        <p className="main-p tac explore-p">
          Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
          <br />
          Morbi mattis ullamcorper velit.
        </p>

        <div className="jobs d-flex jcsb">
          {jobs.map((item, index) => (
            <div className="job tac" key={index}>
              <img
                src={item.img}
                alt="Img"
                className={`${theme === "light" ? "" : "whiteImg"}`}
              />
              <p className="main-p">{item.step}</p>
              <div className="job-title">{item.title}</div>
              <p className="job-description">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="d-flex jcc">
          <Button startIcon={<CloudUploadOutlinedIcon />}>
            Upload Your CV
          </Button>
        </div>
      </Container>
    </div>
  );
};
