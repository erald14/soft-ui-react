import React, { useState } from "react";
import PropTypes from "prop-types";

function TextArea({
  multiple = true,
  label,

  onChange = () => {},
  rows,
  value,
}) {
  return (
    <div class="form-group">
      {label && <label for="exampleFormControlTextarea2">{label}</label>}
      <textarea
        onChange={onChange}
        class="form-control"
        id="exampleFormControlTextarea2"
        rows={rows}
      ></textarea>
    </div>
  );
}
TextArea.propTypes = {};
export default TextArea;
