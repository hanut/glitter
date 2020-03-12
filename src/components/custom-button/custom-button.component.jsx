import React from "react";

import "./style.scss";

const CustomButton = ({ children, className, ...otherProps }) => (
  <button className={`${className ? className : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
