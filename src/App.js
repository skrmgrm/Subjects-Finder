import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Admin from "./components/pages/Admin";

import Main from "./components/pages/Main";

import axios from "axios";
import Subject from "./components/pages/Subject";

function App() {
  const [code, setCode] = useState("");
  const [gClassroomCode, setGclassroomCode] = useState("");
  const [section, setSection] = useState("");
  const [description, setDescription] = useState("");
  const [schedule, setSchedule] = useState("");
  const [link, setLink] = useState("");

  const [subjects, setSubjects] = useState([]);

  const fetchSubjects = useCallback(async () => {
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
          gClassroomCode: response.data[key].gClassroomCode,
        });
      }

      setSubjects(newSubjects.reverse());
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://subjects-finder-default-rtdb.asia-southeast1.firebasedatabase.app/subjects.json",
        {
          code,
          gClassroomCode,
          description,
          schedule,
          link,
          section,
        }
      );
    } catch (error) {
      console.log(error);
    }

    fetchSubjects();
  };

  const onDeleteHandler = (key) => {
    axios
      .delete(
        `https://subjects-finder-default-rtdb.asia-southeast1.firebasedatabase.app/subjects/${key}.json`
      )
      .then(() => {
        fetchSubjects();
      });
  };

  const handleSubmitCode = (e) => {
    setCode(e);
  };

  const handleSubmitSection = (e) => {
    setSection(e);
  };

  const handleSubmitDescription = (e) => {
    setDescription(e);
  };

  const handleSubmitSchedule = (e) => {
    setSchedule(e);
  };

  const handleSubmitLink = (e) => {
    setLink(e);
  };

  const handleSubmitGclassroom = (e) => {
    setGclassroomCode(e);
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Main subjects={subjects} />
          </Route>
          <Route path="/admin" exact>
            <Admin
              subjects={subjects}
              onSubmitHandler={onSubmitHandler}
              handleSubmitCode={handleSubmitCode}
              handleSubmitLink={handleSubmitLink}
              handleSubmitDescription={handleSubmitDescription}
              handleSubmitSection={handleSubmitSection}
              handleSubmitSchedule={handleSubmitSchedule}
              handleSubmitGclassroom={handleSubmitGclassroom}
              onDelete={onDeleteHandler}
              fetchSubjects={fetchSubjects}
            />
          </Route>
          <Route path="/subjects/:id" exact>
            <Subject subjects={subjects} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
