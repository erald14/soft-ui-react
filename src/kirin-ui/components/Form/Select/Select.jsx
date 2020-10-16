import React, { useState } from "react";
import PropTypes from "prop-types";

function Select({
  label,
  placeholder,
  multiple = true,
  onChange = () => {},

  options,
}) {
  return (
    <div class="form-group">
      {label && (
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
          {label}
        </label>
      )}
      <select
        multiple
        onChange={onChange}
        placeholder={placeholder}
        class="custom-select my-1 mr-sm-2"
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
Select.propTypes = {
  type: PropTypes.oneOf(["email", "password", "text", "number"]),
};
export default Select;
