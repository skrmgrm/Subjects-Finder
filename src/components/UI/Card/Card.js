import React from "react";

const Card = (props) => {
  return (
    <div className="container my-4">
      <div className="card">{props.children}</div>
    </div>
  );
};

export default Card;
