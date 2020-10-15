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
    <div class="col-12 col-md-10">
      <div class="card bg-primary shadow-soft border-light p-2 p-md-3">
        <div class="card-header rounded pb-0">
          <div class="post-meta mb-4">
            <div class="media d-flex align-items-center justify-content-between">
              <div class="post-group">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="23k followers"
                  data-original-title="23k followers"
                >
                  <img
                    class="avatar-sm mr-2 img-fluid rounded-circle"
                    src="../../assets/img/team/profile-picture-2.jpg"
                    alt="Jose portrait"
                  />{" "}
                  {user}
                </a>
              </div>
              <div class="d-flex align-items-center">
                <div class="btn-group">
                  <button
                    class="btn btn-link border-0 dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="icon icon-sm">
                      <span class="fas fa-ellipsis-h icon-secondary"></span>
                    </span>
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      <span class="fas fa-edit mr-2"></span>
                      Edit post
                    </a>
                    <a class="dropdown-item text-danger" href="#">
                      <span class="fa fa-trash mr-2" aria-hidden="true"></span>
                      Delete post
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="../../assets/img/blog/blog-article-1.jpg"
            class="card-img-top rounded"
            alt="Webdeveloper desk"
          />
        </div>
        <div class="card-body py-4">
          <a href="#">
            <h3 class="h4 my-4">List of public corporations</h3>
          </a>
          <p class="card-text mb-4">
            All of the world's 10 largest companies as measured by market
            capitalization are American. Market capitalization is the total
            value of a company's entire purchased shares of stock...
          </p>
        </div>
        <div class="card-footer pt-0">
          <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between">
            <div class="post-details mb-3 mb-lg-0">
              <button class="btn btn-sm btn-primary animate-hover mr-2">
                <span class="fas fa-arrow-up mr-2 animate-up-2"></span>4
              </button>
              <button class="btn btn-sm btn-primary text-danger animate-hover">
                <span class="fas fa-arrow-down mr-2 animate-down-2"></span>1
              </button>
            </div>
            <div class="post-meta">
              <a class="text-dark mr-3" href="#">
                <span class="far fa-comments mr-2"></span>33.7k
              </a>
              <button class="btn mr-3 btn-link text-black border-0">
                <span class="fas fa-share mr-2"></span>Share
              </button>
              <button class="btn btn-primary">
                <span class="far fa-save mr-2"></span>Save
              </button>
            </div>
          </div>
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
