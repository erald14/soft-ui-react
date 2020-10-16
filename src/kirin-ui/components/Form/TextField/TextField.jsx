import React, { useState } from "react";
import PropTypes from "prop-types";

function TextField({
  label = "label",
  placeholder = "...",
  type = "text",
  underInputText = " We'll never share your email with anyone else.",
  onChange = () => {},
  value,
  iconLeft,
  iconRight,
}) {
  return (
    <div class="form-group mb-3">
      {label && <label for="email">{label}</label>}
      <div class="input-group mb-4">
        {iconLeft && (
          <div class="input-group-prepend">
            <span class="input-group-text">
              <span class={iconLeft}></span>
            </span>
          </div>
        )}
        <input
          type={type}
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {iconRight && (
          <div class="input-group-append">
            <span class="input-group-text">
              <span class={iconRight}></span>
            </span>
          </div>
        )}
      </div>
      {underInputText && (
        <small id="emailHelp" class="form-text text-muted">
          {underInputText}
        </small>
      )}
    </div>
  );
}
TextField.propTypes = {
  type: PropTypes.oneOf(["email", "password", "text", "number"]),
};
export default TextField;
