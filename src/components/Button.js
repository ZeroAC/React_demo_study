import React from "react";
import PropTypes from "prop-types";
import ButtonME from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
const Button = ({ showAdd, handleClick }) => {
  return (
    <ButtonME
      variant = "contained"
      color = {showAdd ? 'warning':'primary'}
      startIcon = {showAdd ? <CancelPresentationIcon /> : <AddBoxIcon />}
      size = "medium"
      onClick={handleClick}
    >
      {showAdd ? 'Cancel':'ADD'}
    </ButtonME>
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
