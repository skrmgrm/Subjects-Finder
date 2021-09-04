import Button from "./UI/Button";
import React from "react";
import Card from "./UI/Card/Card";
import SubjectCode from "./UI/Card/SubjectCode";
import SubjectTitle from "./UI/Card/SubjectTitle";
import SubjectSchedule from "./UI/Card/SubjectSchedule";

const Item = () => {
  return (
    <Card>
      <div className="card-body">
        <div className="row">
          <div className="col-md-10 text-center text-md-start">
            <SubjectCode>COE344</SubjectCode>
            <SubjectTitle>Feedback Control System</SubjectTitle>
            <SubjectSchedule>M-W-F 8:00-10:00 am</SubjectSchedule>
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
