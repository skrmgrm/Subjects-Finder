import React from "react";
import Card from "./UI/Card/Card";
import SubjectCode from "./UI/Card/SubjectCode";
import SubjectTitle from "./UI/Card/SubjectTitle";
import SubjectSchedule from "./UI/Card/SubjectSchedule";
import SubjectSection from "./UI/Card/SubjectSection";

const Item = (props) => {
  return (
    <Card>
      <div className="card-body">
        <div className="row">
          <div className="col-md-10 text-center text-md-start">
            <SubjectCode>{props.code}</SubjectCode>
            <SubjectTitle>{props.description}</SubjectTitle>

            <SubjectSchedule>{props.schedule}</SubjectSchedule>
            <SubjectSection>{props.section}</SubjectSection>
          </div>
          <div className="col-md-2">
            <a
              href={props.link}
              target="_blank"
              className="btn btn-primary w-100 my-3 my-md-5 "
              rel="noreferrer"
            >
              Join
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Item;
