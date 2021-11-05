import React from "react";

const SubjectCode = (props) => {
  return (
    <h5 className="card-title text-white bg-primary fs-5 p-3">
      {props.children}
    </h5>
  );
};

export default SubjectCode;
