import Button from "./UI/Button";
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
          <div className="col-md-2 d-flex justify-content-center align-center">
            <Button className="btn-primary w-100 my-3">JOIN</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Item;
