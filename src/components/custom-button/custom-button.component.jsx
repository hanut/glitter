import React from "react";

import "./style.scss";

const CustomButton = ({ children, className, inverted, ...otherProps }) => (
  <button className={`${className ? className : ''} custom-button${inverted ? ' inverted':''}`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
