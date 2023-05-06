import React, { useContext, useEffect, useState } from "react";
import "./Header.scss";
import { Button, Container, Grid } from "@material-ui/core";
import { Search, Settings } from "@material-ui/icons";
import SaidbarContext from "../../context/saidbarContext";

export const Header = ({ toggleTheme, ...props }) => {
  const [isShowSearchSection, setShowSearchSection] = useState(false);
  const showSearchSection = () => setShowSearchSection(true);
  const SearchSection = isShowSearchSection ? "top-0" : "";

  // scroll
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);
  const scrolled = scroll ? "header-scrolled" : "";

  // saidbar
  const { showSaidbar, setSaidbar, theme } = useContext(SaidbarContext);

  return (
    <header className={`normalll-header ${scrolled}`} {...props}>
      <div className={`header-input-section d-flex ${SearchSection}`}>
        <div className="left-search-section">
          <span>
            <Search />
          </span>
          <input type="text" placeholder="Search..." />
        </div>

        <div className="right-search-section">
          <button
            className="search-button"
            onClick={() => setShowSearchSection(false)}
          >
            Search
          </button>
        </div>
      </div>
      <Container maxWidth="lg" className="h-100">
        <Grid className="h-100" container>
          <Grid lg={6} className="h-100">
            <div className="col-6 h-100 d-flex">
              <div className="d-flex">
                <a href="#" className="logo">
                  ZONE
                </a>

                <ul className="header-ul d-flex">
                  <li>
                    <a className="dot" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="dot" href="#">
                      Components
                    </a>
                  </li>
                  <li>
                    <a className="dot" href="#">
                      Pages
                    </a>
                  </li>
                  <li>
                    <a className="dot" href="#">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>

          <Grid lg={6} className="h-100">
            <div className="col-6 h-100 d-flex flex-end">
              <div className="flex-end">
                <ul className="d-flex settings-section">
                  <li onClick={showSearchSection} className="settings-icon">
                    <Search />
                  </li>
                  <li
                    className={`settings-icon ${
                      theme == "dark" ? "reset2" : ""
                    }`}
                    onClick={() => {
                      setSaidbar(true);
                    }}
                  >
                    <span
                      className={`rotated-icon settings-icon ${
                        !showSaidbar ? "" : "not-rotate"
                      }`}
                    >
                      <Settings />
                    </span>
                  </li>
                  <li>
                    <Button>BUy Now</Button>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
