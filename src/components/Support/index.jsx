import React from "react";
import "./Support.scss";
import { Button, Container } from "@material-ui/core";
import { Typography } from "@mui/material";

export const Support = () => {
  return (
    <div className="support tac">
      <Container>
        <Typography
          variant="h1"
          component={"div"}
          sx={{
            color: "#fff",
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Get The Right Job For You
        </Typography>
        <Typography
          variant="p"
          component={"div"}
          sx={{ color: "#ffffff", fontSize: "1rem", mt: "24px" }}
        >
          Subscribe to get updated on latest and relevant career opportunities
        </Typography>

        <div className="support-input-section d-flex">
            <input type="text" placeholder="Enter your email" />
            <Button>Subscribe</Button>
        </div>
      </Container>
    </div>
  );
};
