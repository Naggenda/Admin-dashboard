import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserAccounts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/member")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 justify-content-center">
      <div>
        <h2>Member List</h2>
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">Create</Link>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Member Name</th>
              <th>Gender</th>
              <th>Savings</th>
              <th>Development</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((m, index) => {
              return (
                <tr key={index}>
                  <td>{m.id}</td>
                  <td>{m.fullname}</td>
                  <td>{m.gender}</td>
                  <td>{m.savings}</td>
                  <td>{m.development}</td>
                  <td>
                    <button className="btn btn-sm btn-info">View</button>
                    <button className="btn btn-sm btn-primary mx-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserAccounts;
