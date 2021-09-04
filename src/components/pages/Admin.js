import React from "react";
import Item from "../Item";
import Navbar from "../UI/Navbar";
import Button from "../UI/Button";
import Footer from "../UI/Footer";

const Admin = () => {
  return (
    <div className="showcase">
      <Navbar />

      <div
        className="container text-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <Button className="btn-primary">
          <i className="bi bi-plus-lg"></i> Add Subject
        </Button>
      </div>
      {/* DUMMY DATA */}
      <Item />
      <Item />
      <Item />
      <Item />

      {/* DUMMY DATA */}

      {/* MODAL*/}
      <div className="modal fade" id="exampleModal" tabIndex="-1">
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
            <div className="modal-body ">
              <form>
                <div className="mb-3">
                  <div className="input-group my-2">
                    <span className="input-group-text">Code</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ENM 131"
                    />
                    <span className="input-group-text">Description</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Engineering Calculus"
                    />
                  </div>
                  <div className="input-group my-2">
                    <span className="input-group-text">Section</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="A"
                    />
                    <span className="input-group-text">Schedule</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="T-TH 2:30 - 4:00 pm"
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
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL*/}
    </div>
  );
};

export default Admin;
