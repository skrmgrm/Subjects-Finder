import React, { useState, useEffect } from "react";

import Navbar from "../UI/Navbar";

import AdminItem from "../AdminItem";

import axios from "axios";

const Admin = () => {
  const [code, setCode] = useState("");
  const [section, setSection] = useState("");
  const [description, setDescription] = useState("");
  const [schedule, setSchedule] = useState("");
  const [link, setLink] = useState("");

  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);

  const [onSearch, setOnSearch] = useState(false);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get(
        "https://subjects-finder-default-rtdb.asia-southeast1.firebasedatabase.app/subjects.json"
      );

      let newSubjects = [];

      for (const key in response.data) {
        newSubjects.push({
          id: key,
          code: response.data[key].code,
          section: response.data[key].section,
          description: response.data[key].description,
          schedule: response.data[key].schedule,
          link: response.data[key].link,
        });
      }

      setSubjects(newSubjects.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSubjects();
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://subjects-finder-default-rtdb.asia-southeast1.firebasedatabase.app/subjects.json",
        {
          code,
          description,
          schedule,
          link,
          section,
        }
      );
    } catch (error) {
      console.log(error);
    }

    setCode("");
    setSection("");
    setDescription("");
    setSchedule("");
    setLink("");
  };

  const onDeleteHandler = async (key) => {
    await axios.delete(
      `https://subjects-finder-default-rtdb.asia-southeast1.firebasedatabase.app/subjects/${key}.json`
    );
  };

  const onSearchHandler = (value) => {
    const filteredSubjects = subjects.filter((subject) => {
      return (
        subject.code.toUpperCase().includes(value) ||
        subject.description.toUpperCase().includes(value) ||
        subject.code.includes(value) ||
        subject.description.includes(value) ||
        subject.code.toLowerCase().includes(value) ||
        subject.description.toLowerCase().includes(value)
      );
    });

    setFilteredSubjects(filteredSubjects);
  };

  const handleCode = (e) => {
    setCode(e.target.value);
  };

  const handleSection = (e) => {
    setSection(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSchedule = (e) => {
    setSchedule(e.target.value);
  };

  const handleLink = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="showcase">
      <Navbar onSearch={onSearchHandler} searchState={setOnSearch} />
      <div
        className="container text-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <button className="btn btn-primary">
          <i className="bi bi-plus-lg"></i> Add Subject
        </button>
      </div>

      {subjects.length === 0 || (
        <div className="container text-center mt-5">
          <p className="h5 text-secondary">No subjects found...</p>
        </div>
      )}
      {onSearch &&
        filteredSubjects.map((subject) => {
          return (
            <AdminItem
              key={subject.id}
              id={subject.id}
              code={subject.code}
              description={subject.description}
              section={subject.section}
              schedule={subject.schedule}
              link={subject.link}
              onDelete={onDeleteHandler}
            />
          );
        })}

      {!onSearch &&
        subjects.map((subject) => {
          return (
            <AdminItem
              key={subject.id}
              id={subject.id}
              code={subject.code}
              description={subject.description}
              section={subject.section}
              schedule={subject.schedule}
              link={subject.link}
              onDelete={onDeleteHandler}
            />
          );
        })}

      {/* MODAL*/}
      <div className="modal fade show" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Subject
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Modal */}
            <div className="modal-body ">
              <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                  <div className="input-group my-2">
                    <span className="input-group-text">Code</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ENM 131"
                      value={code}
                      onChange={handleCode}
                    />
                    <span className="input-group-text">Description</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Engineering Calculus"
                      value={description}
                      onChange={handleDescription}
                    />
                  </div>
                  <div className="input-group my-2">
                    <span className="input-group-text">Section</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="A"
                      value={section}
                      onChange={handleSection}
                    />
                    <span className="input-group-text">Schedule</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="T-TH 2:30 - 4:00 pm"
                      value={schedule}
                      onChange={handleSchedule}
                    />
                  </div>
                  <label
                    htmlFor="groupLink"
                    className="form-label text-primary my-2"
                  >
                    Facebook Group Link :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="groupLink"
                    placeholder="https://www.facebook.com/groups/377918300514589"
                    value={link}
                    onChange={handleLink}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL*/}
    </div>
  );
};

export default Admin;
