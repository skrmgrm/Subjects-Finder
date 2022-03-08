import React from "react";
import Card from "./UI/Card/Card";
import SubjectCode from "./UI/Card/SubjectCode";
import SubjectTitle from "./UI/Card/SubjectTitle";
import SubjectSchedule from "./UI/Card/SubjectSchedule";
import SubjectSection from "./UI/Card/SubjectSection";

import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Card>
      <div className="card-body p-0">
        <SubjectCode>{props.code}</SubjectCode>
        <div className="row  p-3">
          <div className="col text-center text-md-start">
            <SubjectTitle>{props.description}</SubjectTitle>
            <SubjectSchedule>{props.schedule}</SubjectSchedule>
            <SubjectSection>
              {props.section ? `Section  ${props.section}` : "N/A"}
            </SubjectSection>
          </div>
          <div className="col-md-12 d-flex">
            <Link
              to={`/subjects/${props.id}`}
              className="btn btn-primary w-100 my-3 my-md-2 "
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Item;
