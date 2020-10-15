import React, { useState } from "react";
import PropTypes from "prop-types";

function BlogCard1({
  onClick,
  buttonText = "Learn more",
  body = `  Some quick example text to build on the card title and make up the
bulk of the card's content.  Some quick example text to build on the card title and make up the
bulk of the card's content.`,
  date = "15 March 2020",
  title = "We partnered up with Google",
  user = "Jo J. Moore",
  img = "../..//assets/img/blog/blog-article-2.jpg",
}) {
  return (
    <div class="col-12 col-md-6">
      <div class="card bg-primary border-light shadow-soft">
        <div class="card-header p-3">
          <img src={img} class="card-img-top rounded" alt="Designer desk" />
        </div>
        <div class="card-body pt-2">
          <div class="media d-flex align-items-center justify-content-between">
            <div class="post-group">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="23k followers"
              >
                <img
                  class="avatar-sm mr-2 img-fluid rounded-circle"
                  src="../../assets/img/team/profile-picture-2.jpg"
                  alt="Jo portrait"
                />{" "}
                {user}
              </a>
            </div>
            <div class="d-flex align-items-center">
              <span class="small">
                <span class="far fa-calendar-alt mr-2"></span>
                {date}
              </span>
            </div>
          </div>
          <h3 class="h5 card-title mt-4">{title}</h3>
          <p class="card-text">{body}</p>
          <a onClick={onClick} class="btn btn-primary btn-sm">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
BlogCard1.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  user: PropTypes.string,
  img: PropTypes.string,
};
export default BlogCard1;
