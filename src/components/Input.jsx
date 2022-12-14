import React from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  const { name, labelText, type, changeInput, value } = props;

  return (
    <div className={ props.className }>
      <label htmlFor={ name }>{ labelText }</label>
      <input
        type={ type }
        value={ value }
        name={ name }
        onChange={ changeInput }
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
