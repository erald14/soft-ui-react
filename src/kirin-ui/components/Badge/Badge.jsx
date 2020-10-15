import React, { useState } from "react";
import PropTypes from "prop-types";

function Badge({ text, number }) {
  return (
    <button type="button" class="btn btn-primary">
      {text} <span class="badge badge-pill badge-success">{number}</span>
      <span class="sr-only">unread messages</span>
    </button>
  );
}
Badge.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
};
export default Badge;
