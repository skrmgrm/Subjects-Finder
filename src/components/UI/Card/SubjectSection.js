import React from "react";

const SubjectSection = (props) => {
  return (
    <p className="card-text text-primary mt-md-5">Section {props.children}</p>
  );
};

export default SubjectSection;
