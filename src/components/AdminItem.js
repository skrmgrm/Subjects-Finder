import React, { useState } from "react";
import axios from "axios";

import Card from "./UI/Card/Card";
import SubjectCode from "./UI/Card/SubjectCode";
import SubjectTitle from "./UI/Card/SubjectTitle";
import SubjectSchedule from "./UI/Card/SubjectSchedule";
import SubjectSection from "./UI/Card/SubjectSection";

const AdminItem = (props) => {
  const [onEdit, setOnEdit] = useState(false);
  const [code, setCode] = useState("");
  const [section, setSection] = useState("");
  const [schedule, setSchedule] = useState("");
  const [description, setDescription] = useState("");
  const [gClassroomCode, setGClassroomCode] = useState("");
  const [fbLink, setFbLink] = useState("");

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
            <SubjectSection>
              {props.section ? `Section  ${props.section}` : "N/A"}
            </SubjectSection>
          </div>
          <div className="col-md-8 text-center text-md-start mt-4">
            <p className="fw-bold  text-secondary">
              Facebook Group Link:{" "}
              <a
                href={props.link}
                target="_blank"
                className={`${props.link || "disabled fw-light"}`}
                rel="noreferrer"
              >
                {props.link || "N/A"}
              </a>
            </p>
            <p className="fw-bold  text-secondary">
              Google Classroom Code:{" "}
              <span className="text-primary fw-light">
                {props.gClassroomCode}
              </span>
            </p>
          </div>
          <div className="col-md-12 d-flex justify-content-center align-center gap-2">
            <button
              type="button"
              className="btn btn-success my-5"
              onClick={() => {
                setOnEdit(true);
                setCode(props.code);
                setDescription(props.description);
                setFbLink(props.link);
                setGClassroomCode(props.gClassroomCode);
                setSchedule(props.schedule);
                setSection(props.section);
              }}
            >
              <i className="bi bi-pencil-square"></i>
            </button>
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
      {onEdit && (
        <form
          className="mx-5"
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .put(
                `https://subjects-finder-default-rtdb.asia-southeast1.firebasedatabase.app/subjects/${props.id}.json`,
                {
                  code,
                  description,
                  gClassroomCode,
                  link: fbLink,
                  schedule,
                  section,
                }
              )
              .then(() => props.fetchSubjects())
              .then(() => {
                setOnEdit(false);
                setCode("");
                setDescription("");
                setFbLink("");
                setGClassroomCode("");
                setSchedule("");
                setSection("");
              });
          }}
        >
          <div className="mb-3">
            <div className="input-group my-2">
              <span className="input-group-text">Code</span>
              <input
                type="text"
                className="form-control"
                placeholder="ENM 131"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
              <span className="input-group-text">Description</span>
              <input
                type="text"
                className="form-control"
                placeholder="Engineering Calculus"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="input-group my-2">
              <span className="input-group-text">Section</span>
              <input
                type="text"
                className="form-control"
                placeholder="A"
                value={section}
                onChange={(e) => {
                  setSection(e.target.value);
                }}
              />
              <span className="input-group-text">Schedule</span>
              <input
                type="text"
                className="form-control"
                placeholder="T-TH 2:30 - 4:00 pm"
                value={schedule}
                onChange={(e) => {
                  setSchedule(e.target.value);
                }}
              />
            </div>

            <div className="input-group my-2">
              <span className="input-group-text">Google Classroom Code</span>
              <input
                type="text"
                className="form-control"
                placeholder="sczxawq"
                value={gClassroomCode}
                onChange={(e) => {
                  setGClassroomCode(e.target.value);
                }}
              />
            </div>

            <label htmlFor="groupLink" className="form-label text-primary my-2">
              Facebook Group Link :
            </label>
            <input
              type="text"
              className="form-control"
              id="groupLink"
              placeholder="https://www.facebook.com/groups/377918300514589"
              value={fbLink}
              onChange={(e) => {
                setFbLink(e.target.value);
              }}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setOnEdit(false);
              }}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      )}
    </Card>
  );
};

export default AdminItem;
