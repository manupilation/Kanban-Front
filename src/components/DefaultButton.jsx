import React from "react";
import PropTypes from "prop-types";

function DefaultButton(props) {
  const { type, clickButton, text } = props;

  return (
    <button
      className={ props.className }
      type={ type || "button" }
      onClick={ clickButton }
    >
      { text }
    </button>
  );
}

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  clickButton: PropTypes.func,
};

export default DefaultButton;
