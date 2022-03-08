import React from "react";
import { useParams } from "react-router-dom";

import Card from "../UI/Card/Card";
import SubjectCode from "../UI/Card/SubjectCode";
import SubjectTitle from "../UI/Card/SubjectTitle";
import SubjectSchedule from "../UI/Card/SubjectSchedule";
import SubjectSection from "../UI/Card/SubjectSection";

const Subject = ({ subjects }) => {
  const { id } = useParams();

  const filterSubject = subjects.filter((subject) => subject.id === id);

  return (
    <div className="subject-container">
      {filterSubject.map((subject) => {
        return (
          <Card key={subject.id}>
            <div className="card-body p-0">
              <SubjectCode>{subject.code}</SubjectCode>
              <div className="row p-3">
                <div className="col-lg-4 text-center text-lg-start ">
                  <SubjectTitle>{subject.description}</SubjectTitle>
                  <SubjectSchedule>{subject.schedule}</SubjectSchedule>
                  <SubjectSection>
                    {subject.section ? `Section  ${subject.section}` : "N/A"}
                  </SubjectSection>
                </div>
                <div className="col-lg-8 text-center text-lg-start mx-auto mt-lg-1 ">
                  <p className="fw-bold  text-secondary">
                    Facebook Group Link:{" "}
                    <a
                      href={subject.link}
                      target="_blank"
                      className={`${subject.link || "disabled fw-light"}`}
                      rel="noreferrer"
                    >
                      {subject.link || "N/A"}
                    </a>
                  </p>
                  <p className="fw-bold  text-secondary">
                    Google Classroom Code:{" "}
                    <span className="text-primary fw-light">
                      {subject.gClassroomCode}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Subject;
