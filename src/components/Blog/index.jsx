import { Button, Container } from "@material-ui/core";
import React from "react";
import "./Blog.scss";
import { ChevronRight } from "@material-ui/icons";
import BlogImg2 from "../../imgs/career_2.jpg";
import BlogImg3 from "../../imgs/career_3.jpg";
import BlogImg4 from "../../imgs/career_4.jpg";
import BlogImg5 from "../../imgs/career_5.jpg";

export const Blog = () => {
  return (
    <div className="blog">
      <Container>
        <div className="blog-title d-flex jcsb">
          <div className="blog-1">
            <div className="main-title" style={{ textAlign: "left" }}>
              BLOG
            </div>
            <h1 className="h1" style={{ margin: "24px 0" }}>
              Read Our Lates News
            </h1>
            <p className="main-p blog-description">
              Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit et,
              volutpat molestie, porta ut, ligula.
            </p>
          </div>
          <div className="blog-2">
            <Button className="d-flex jcsb">
              <span>View All</span>
              <div className="d-flex">
                <ChevronRight />
              </div>
            </Button>
          </div>
        </div>

        <div className="blog-container d-flex a-start">
          <div className="blog-left">
            <div className="blog-left-box">
              <div className="read">6 May 2023 ● 8 minutes read</div>
              <div className="aa">
                <a href="#" className="blog-left-link">
                  The A - Z Of Event
                </a>
              </div>
              <p className="blog-left-description">
                Occaecati est et illo quibusdam accusamus qui. Incidunt aut et
                molestiae ut facere aut. Est quidem iusto praesentium excepturi
                harum nihil tenetur facilis. Ut omnis voluptates nihil
                accusantium doloribus eaque debitis.
              </p>
            </div>
          </div>

          <div className="blog-right d-flex a-start">
            <div className="blog-right-box blog-right-box-1">
              <img src={BlogImg2} className="blog-right-img-section" />
              <div className="read blog-right-comment">05 May 2023 ● 8 minutes read</div>
              <div className="blog-right-title">
                <a href="#" className="main-h1">
                  Believing These 7 Myths About Event Keeps You From Growing
                </a>
              </div>
            </div>
            <div className="blog-right-box blog-right-box-2">
              <img src={BlogImg3} className="blog-right-img-section" />
              <div className="read blog-right-comment">05 May 2023 ● 8 minutes read</div>
              <div className="blog-right-title">
                <a href="#" className="main-h1">
                  Believing These 7 Myths About Event Keeps You From Growing
                </a>
              </div>
            </div>
            <div className="blog-right-box blog-right-box-3">
              <img src={BlogImg4} className="blog-right-img-section" />
              <div className="read blog-right-comment">05 May 2023 ● 8 minutes read</div>
              <div className="blog-right-title">
                <a href="#" className="main-h1">
                  Believing These 7 Myths About Event Keeps You From Growing
                </a>
              </div>
            </div>
            <div className="blog-right-box blog-right-box-4">
              <img src={BlogImg5} className="blog-right-img-section" />
              <div className="read blog-right-comment">05 May 2023 ● 8 minutes read</div>
              <div className="blog-right-title">
                <a href="#" className="main-h1">
                  Believing These 7 Myths About Event Keeps You From Growing
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
