import React, { useContext, useState } from "react";
import "./Saidbar.scss";
import ReplayIcon from "@mui/icons-material/Replay";
import { Button, Container, Divider } from "@material-ui/core";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import SaidbarContext from "../../context/saidbarContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const Saidbar = ({ toggleTheme, theme }) => {
  const { showSaidbar, setSaidbar, setTheme } = useContext(SaidbarContext);

  // saidbar's position
  const [isRightSaidbar, setRightSaidbar] = useState(true);
  const rightSaidbar = () => {
    setRightSaidbar(isRightSaidbar ? false : true);
  };
  // reset btn
  const resetAll = () => {
    setRightSaidbar(true);
  };

  return (
    <>
      <div className={`saidbar ${showSaidbar ? "" : "toggle-saidbar"}`}>
        <div
          className={`saidbar-container ${
            isRightSaidbar ? "right-saidbar" : "left-saidbar"
          }`}
        >
          <Container>
            <div className="saidbar-title jcsb">
              <h2>Settings</h2>
              <div className="saidbar-title-icons ">
                <Button
                  className={`reset-icon saidbar-title-icon ${
                    theme == "dark" ? "reset2" : ""
                  }`}
                  title="Reset"
                  onClick={() => {
                    resetAll();
                    setTheme("light");
                  }}
                >
                  <ReplayIcon style={{ transform: "rotate(-55deg)" }} />
                </Button>
                <Button
                  className="thme-change-icon saidbar-title-icon"
                  onClick={() => setSaidbar(false)}
                >
                  x
                </Button>
              </div>
            </div>
          </Container>
          <Divider />
          <div className="settings2">
            <div
              className="mode d-flex jcsb"
              onClick={() => {
                toggleTheme();
              }}
            >
              <h3>Mode</h3>
              {(theme == "light" && <DarkModeOutlinedIcon />) || (
                <DarkModeIcon />
              )}
            </div>
            <div className="mode d-flex jcsb" onClick={rightSaidbar}>
              <h3>Direction</h3>
              <MoveDownIcon />
            </div>
          </div>

          <div className="parsets">
            <Container>
              <p className="par-t">Parsets</p>
              <div className="boxs">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </Container>
          </div>
        </div>
        <div className="overlay" onClick={() => setSaidbar(false)}></div>
      </div>
    </>
  );
};
