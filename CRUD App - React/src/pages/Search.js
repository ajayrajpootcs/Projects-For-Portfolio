import React, { useState } from "react";
import axios from "axios";

function Search() {
  let [searchdata, setsearchdata] = useState();
  let [totaldata, settotaldata] = useState();

  let searchUser = (key) => {
    axios.get("http://localhost:3000/User?name=" + key).then((res) => {
      // console.log(res.data);
      settotaldata(res.data);
    });
  };

  return (
    <>
      <div class="input-group mb-3 mt-4">
        <input
          type="text"
          class="form-control"
          placeholder="search data"
          onChange={(e) => {
            setsearchdata(e.target.value);
          }}
        />
        <span class="input-group-text" id="basic-addon2">
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              searchUser(searchdata);
            }}
          >
            Search
          </button>
        </span>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {totaldata ? (
          <tbody>
            {totaldata.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <p>No data</p>
        )}
      </table>
    </>
  );
}

export default Search;
