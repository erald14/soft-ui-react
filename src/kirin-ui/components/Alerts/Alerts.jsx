import React, { useState } from "react";
import PropTypes from "prop-types";

function Alert({
  type = "info",
  text = "Warning text here: Pass a text prop to the component",
}) {
  const getAlert = (type) => {
    switch (type) {
      case "warning":
        return { class: "alert-secondary", icon: "fas fa-exclamation-circle" };
      case "success":
        return { class: "alert-success", icon: "far fa-thumbs-up" };
      case "info":
        return { class: "alert-info", icon: "far fa-bell" };
      case "danger":
        return { class: "alert-danger", icon: "fas fa-fire" };
      default:
        return { class: "alert-danger", icon: "fas fa-fire" };
    }
  };
  let alertProperties = getAlert(type);
  return (
    <div
      class={`alert ${alertProperties.class} alert-dismissible shadow-soft fade show`}
      role="alert"
    >
      <span class="alert-inner--icon">
        <span class={alertProperties.icon}></span>
      </span>
      <span class="alert-inner--text">{text}</span>
      <button
        type="button"
        class="close text-dark"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
Alert.propTypes = {
  type: PropTypes.oneOf(["success", "info", "warning", "danger"]),
  text: PropTypes.string,
};
export default Alert;
