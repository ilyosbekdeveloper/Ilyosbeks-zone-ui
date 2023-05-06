import React, { useContext } from "react";
import "./Categories.scss";
import { Button, Container } from "@material-ui/core";
import SaidbarContext from "../../context/saidbarContext";
import { Category } from "../../data/categories";
import { ChevronRight } from "@material-ui/icons";

export const Categories = () => {
  const { theme } = useContext(SaidbarContext);

  //   categories
  const category = Category();
  return (
    <div className="categories">
      <Container>
        <h1 className="categories-title tac">Hot Categories</h1>
        <div className="categories-container">
          {category.map((item, index) => (
            <div
              key={index}
              className={`category ${theme !== "light" ? "hover-bg-1" : '"'}`}
            >
              <div className="category-img-section">
                <img
                  src={item.img}
                  alt=""
                  className={`${theme == "light" ? "" : "whiteImg"}`}
                />
              </div>
              <div className="category-title">{item.title}</div>
              <div className="category-job">{item.job}</div>
            </div>
          ))}
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
