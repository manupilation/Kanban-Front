import React from "react";
import PropTypes from "prop-types";

function DefaultButton(props) {
  return (
    <button
      className={ props.className }
      type={ props.type || "button" }
      onClick={ props.clickInput }
    >
      { props.text }
    </button>
  );
}

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  clickInput: PropTypes.func.isRequired,
};

export default DefaultButton;
