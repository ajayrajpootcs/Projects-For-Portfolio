import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Read() {
  let navigate = useNavigate();
  let [user, setUser] = useState([]);
  useEffect((e) => {
    // e.preventDefaut();
    axios.get("http://localhost:3000/User").then((res) => {
      // console.log(res.data);

      setUser(res.data);
    });
  });
  let deleteUser = (sno) => {
    axios.delete("http://localhost:3000/User/" + sno).then(() => {
      navigate("/read");
    });
  };
  return (
    <>
      <table class="table  col-lg-2 col-md-3 col-sm-2">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Move To Trash</th>
          </tr>
        </thead>
        {user ? (
          <tbody>
            {user.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={"/update/" + item.id}>
                      <button className="btn btn-info">
                        <span className="fa fa-edit"></span>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteUser(item.id);
                      }}
                    >
                      <span className="fa fa-trash"></span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <p>No Data</p>
        )}
      </table>
    </>
  );
}

export default Read;
