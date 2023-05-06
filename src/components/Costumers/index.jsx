import React from "react";
import "./Costumers.scss";
import { Button, Container } from "@material-ui/core";
import { ChevronLeft, ChevronRight, Star } from "@material-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Comments } from "../../data/CostumerCommnets";

export const Costumers = () => {
  const comments = Comments();
  return (
    <div className="costumers">
      <Container>
        <h1 className="costumers-title tac">What Our Customer Say</h1>

        <div className="costumers-conatainer">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="costumer-comment tac"
            loop={true}
          >
            {comments.map((comment, index) => (
              <SwiperSlide key={index}>
                <div className="costumers-container-stars tac">
                  <span className="star">
                    <Star />
                  </span>
                  <span className="star">
                    <Star />
                  </span>
                  <span className="star">
                    <Star />
                  </span>
                  <span className="star">
                    <Star />
                  </span>
                  <span className="star">
                    <Star />
                  </span>
                </div>

                <p className="costumer-comment-description tac">
                  {comment.description}
                </p>
                <h4 className="comment-from">{comment.from}</h4>
                <div className="comment-job main-p">{comment.job}</div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="costumer-comment"></div>
        </div>
      </Container>
    </div>
  );
};
