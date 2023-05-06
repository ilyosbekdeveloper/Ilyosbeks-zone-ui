import React from "react";
import "./PostJob.scss";
import { Button, Container } from "@material-ui/core";
import { Typography } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PostImg from "../../imgs/illustration_recruitment.svg";

export const PostJob = () => {
  return (
    <div className="post-job">
      <Container>
        <div className="d-flex jcsb">
          <div className="post-left-section">
            <Typography
              sx={{
                color: "#FA541C",
                fontSize: "14px",
                fontWeight: "bold",
                paddingBottom: "30px",
              }}
              className="mini-title"
            >
              FOR RECRUITERS
            </Typography>
            <Typography
              component={"div"}
              variant="h1"
              sx={{
                color: "#fff",
                fontSize: "2.75rem",
                fontWeight: "bold",
                width: "450px",
                pb: "30px",
              }}
            >
              Do You Have A Position To Post Job?
            </Typography>
            <Typography sx={{ color: "#c2bec1", width: "450px", pb: "35px" }}>
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
              Morbi mattis ullamcorper velit.
            </Typography>
            <Button
              style={{
                color: "#fff",
                padding: "7px 20px",
                background: "#FA541C",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  paddingRight: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ArticleOutlinedIcon />
              </p>
              <p style={{ fontWeight: "bold" }}>Post A Job</p>
            </Button>
          </div>
          <div className="post-right-scetion">
            <img src={PostImg} className="post-img" />
          </div>
        </div>
      </Container>
    </div>
  );
};
