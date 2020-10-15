import React, { useState } from "react";
import PropTypes from "prop-types";

function Accordion({ accordions = [] }) {
  return (
    <div class="accordion shadow-soft rounded" id="accordionExample1">
      {accordions.map((accordion, index) => {
        return (
          <div class="card card-sm card-body bg-primary border-light mb-0">
            <a
              href={`#panel-${index}`}
              data-target={`#panel-${index}`}
              class="accordion-panel-header"
              data-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls={`panel-${index}`}
            >
              <span class="h6 mb-0 font-weight-bold">{accordion.title}</span>
              <span class="icon">
                <span class="fas fa-plus"></span>
              </span>
            </a>
            <div class="collapse" id={`panel-${index}`}>
              <div class="pt-3">
                <p class="mb-0">{accordion.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
Accordion.propTypes = {
  accordions: PropTypes.array,
};
export default Accordion;
