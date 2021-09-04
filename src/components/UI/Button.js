import React from "react";

const Button = (props) => {
  let classes = `btn ${props.className}`;
  return <button className={classes}>{props.children}</button>;
};

export default Button;
