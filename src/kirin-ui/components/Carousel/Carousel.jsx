import React, { useState } from "react";
import PropTypes from "prop-types";

function Carousel({
  indicators = false,

  items = [
    {
      img: "../../assets/img/carousel/image-1.jpg",
      caption: <div>Text here </div>,
    },
    { img: "../../assets/img/carousel/image-1.jpg" },
  ],
}) {
  const [active, setActive] = useState("0");
  return (
    <div
      id="Carousel3"
      class="carousel slide shadow-soft border border-light p-4 rounded"
      data-ride="carousel"
    >
      {indicators && (
        <ol class="carousel-indicators">
          {items.map((item, index) => {
            return (
              <li
                data-target="#Carousel3"
                data-slide-to={index}
                class={index == active ? "active" : ""}
              ></li>
            );
          })}
        </ol>
      )}
      <div class="carousel-inner rounded">
        {items.map((item, index) => {
          return (
            <div class={"carousel-item " + (index == active ? "active" : "")}>
              <img class="d-block w-100" src={item.img} alt="First slide" />
              {item.caption && (
                <div class="carousel-caption d-none d-md-block text-dark">
                  {item.caption}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <a
        class="carousel-control-prev"
        href="#Carousel3"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#Carousel3"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
Carousel.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
};
export default Carousel;
