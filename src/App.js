import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { CssBaseline } from "@material-ui/core";
import "./App.scss";
import './fonts.css'

// components
import { Saidbar } from "./components/Saidbar";
import SaidbarContext from "./context/saidbarContext";
import { Explore } from "./components/Explore";
import { FeaturedJobs } from "./components/FeaturedJobs";
import { TopCompanies } from "./components/TopCompanies";
import { Categories } from "./components/Categories";
import { GlobalConnection } from "./components/GlobalConnetcitons";
import { PostJob } from "./components/PostJob";
import { Costumers } from "./components/Costumers";
import { Clients } from "./components/Clients1";
import { Blog } from "./components/Blog";
import { Download } from "./components/Download1";
import { Support } from "./components/Support";
import { Footer } from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(JSON.parse(localTheme));
  }, []);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    localStorage.setItem(
      "theme",
      JSON.stringify(theme === "light" ? "dark" : "light")
    );
  };

  // saidbar
  const [showSaidbar, setSaidbar] = useState(false);

  return (
    <SaidbarContext.Provider
      value={{ showSaidbar, setSaidbar, setTheme, theme }}
    >
      <div className={`App ${theme}`}>
        {/* Css global styles */}
        <CssBaseline />

        {/* Header section */}
        <Header />

        {/* main saidbar */}
        <Saidbar toggleTheme={toggleTheme} theme={theme} />

        {/* Main section */}
        <Main />

        {/* Explore section */}
        <Explore />

        {/* Featured jobs section */}
        <FeaturedJobs />

        {/* Tpp companies section width carousels  */}
        <TopCompanies />

        {/* Categories scetion */}
        <Categories />

        {/* Glebal connections */}
        <GlobalConnection />

        {/* Post job section */}
        <PostJob />

        {/* Costumer section */}
        <Costumers />

        {/* Cliennts secion */}
        <Clients />

        {/* Blog section */}
        <Blog />

        {/* Download App section */}
        <Download />

        {/* Support */}
        <Support />

        {/* Footer */}
        <Footer />
      </div>
    </SaidbarContext.Provider>
  );
}
export default App;
