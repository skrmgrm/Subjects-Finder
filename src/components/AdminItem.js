import React from "react";

import Card from "./UI/Card/Card";
import SubjectCode from "./UI/Card/SubjectCode";
import SubjectTitle from "./UI/Card/SubjectTitle";
import SubjectSchedule from "./UI/Card/SubjectSchedule";
import SubjectSection from "./UI/Card/SubjectSection";

const AdminItem = (props) => {
  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <Card>
      <div className="card-body p-0">
        <SubjectCode>{props.code}</SubjectCode>
        <div className="row p-3">
          <div className="col-md-10 text-center text-md-start">
            <SubjectTitle>{props.description}</SubjectTitle>

            <SubjectSchedule>{props.schedule}</SubjectSchedule>
            <SubjectSection>{props.section}</SubjectSection>
          </div>
          <div className="col-md-2 d-flex justify-content-center align-center">
            <button
              type="button"
              className="btn btn-danger my-5"
              onClick={onDeleteHandler}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AdminItem;
