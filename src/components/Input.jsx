import React from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  return (
    <div className={ props.className }>
      <label htmlFor={ props.name }>{ props.labelText }</label>
      <input
        type={ props.type }
        value={ props.value }
        name={ props.name }
        onChange={ props.changeInput }
      />
    </div>
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
};

export default TextInput;
