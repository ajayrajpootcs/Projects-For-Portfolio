import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Update() {
  let { id } = useParams();
  let [name, setname] = useState();
  let [age, setage] = useState();
  let [city, setcity] = useState();
  let [email, setemail] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/User/" + id).then((res) => {
      console.log(res.data);
      setname(res.data.name);
      setage(res.data.age);
      setcity(res.data.city);
      setemail(res.data.email);
    });
  }, [id]);
  let submitUser = () => {
    axios
      .put("http://localhost:3000/User/" + id, {
        name,
        age,
        city,
        email,
      })
      .then((res) => {});
  };

  return (
    <>
      <form onSubmit={submitUser}>
        <div className="mb-3">
          <label className="form-label">NAME</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">AGE</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => {
              setage(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">CITY</label>
          <input
            type="text"
            className="form-control"
            placeholder="City Name"
            value={city}
            onChange={(e) => {
              setcity(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3 container-fluid">
          <input
            type="submit"
            classNameName="btn btn-info container-fluid"
            value="update"
          ></input>
        </div>
      </form>
    </>
  );
}

export default Update;
