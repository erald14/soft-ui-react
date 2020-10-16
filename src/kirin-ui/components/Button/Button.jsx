import React, { useState } from "react";
import PropTypes from "prop-types";

function Button({ icon = "fas fa-book-open", text, pill = true }) {
  return (
    <button
      class={`btn btn-primary ${pill ? "btn-pill" : ""} ${
        !text ? "btn-icon-only" : ""
      } mr-3`}
      type="button"
    >
      {icon && (
        <span class="mr-1">
          <span class="fas fa-book-open"></span>
        </span>
      )}
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
};
export default Button;
