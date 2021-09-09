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
    <div className="">
      {filterSubject.map((subject) => {
        console.log(subject);
        return (
          <Card key={subject.id}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 text-center text-md-start">
                  <SubjectCode>{subject.code}</SubjectCode>
                  <SubjectTitle>{subject.description}</SubjectTitle>
                  <SubjectSchedule>{subject.schedule}</SubjectSchedule>
                  <SubjectSection>{subject.section}</SubjectSection>
                </div>
                <div className="col-md-8 text-center text-md-start mt-4">
                  <p className="fw-bold  text-secondary">
                    Facebook Group Link:{" "}
                    <a
                      href={subject.link}
                      target="_blank"
                      className="fw-light"
                      rel="noreferrer"
                    >
                      {subject.link}
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
