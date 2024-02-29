import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  let navigate = useNavigate();
  let [name, setName] = useState();
  let [age, setAge] = useState();
  let [city, setCity] = useState();
  let [email, setEmail] = useState();
  let userData = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/User", { name, age, city, email })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <>
      <form onSubmit={userData}>
        <div className="mb-3">
          <label className="form-label">NAME</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">AGE</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">CITY</label>
          <input
            type="text"
            className="form-control"
            placeholder="City Name"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3 container-fluid">
          <input
            type="submit"
            classNameName="btn btn-dark container-fluid"
          ></input>
        </div>
      </form>
    </>
  );
}

export default Create;
