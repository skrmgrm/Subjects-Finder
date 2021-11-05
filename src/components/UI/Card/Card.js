import React from "react";

const Card = (props) => {
  return (
    <div className="container card-container mb-4 ">
      <div className="card">{props.children}</div>
    </div>
  );
};

export default Card;
