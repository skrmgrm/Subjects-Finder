import React from "react";

const SubjectSection = (props) => {
  return <p className="card-text text-primary ">Section {props.children}</p>;
};

export default SubjectSection;
