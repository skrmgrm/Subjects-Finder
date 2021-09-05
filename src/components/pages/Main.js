import React, { useState, useEffect } from "react";
import Item from "../Item";
import Navbar from "../UI/Navbar";

import axios from "axios";

const Main = () => {
  const [subjects, setSubjects] = useState([]);
  const [onSearch, setOnSearch] = useState(false);
  const [filteredSubjects, setFilteredSubjects] = useState([]);

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

  return (
    <div className="showcase">
      <Navbar onSearch={onSearchHandler} searchState={setOnSearch} />
      <div className="container pt-4">
        {subjects.length === 0 ||
          (filteredSubjects.length === 0 && (
            <div className="container text-center mt-5">
              <p className="h5 text-secondary">No subjects found...</p>
            </div>
          ))}
        {onSearch &&
          filteredSubjects.map((subject) => {
            return (
              <Item
                key={subject.id}
                id={subject.id}
                code={subject.code}
                description={subject.description}
                section={subject.section}
                schedule={subject.schedule}
                link={subject.link}
              />
            );
          })}

        {!onSearch &&
          subjects.map((subject) => {
            return (
              <Item
                key={subject.id}
                id={subject.id}
                code={subject.code}
                description={subject.description}
                section={subject.section}
                schedule={subject.schedule}
                link={subject.link}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Main;
