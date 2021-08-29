import React from "react";
import PropTypes from "prop-types";
const Button = ({ color, text, handleClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  text: "ADD",
  handleClick: ()=>{
      alert("默认行为")
  }
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
