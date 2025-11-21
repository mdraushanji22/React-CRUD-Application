import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const CreateUser = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Auto-increment id based on existing users (11, 12, 13, ...)
    axios
      .get(`${BASE_URL}/users`)
      .then((res) => {
        const users = res.data || [];
        const maxId = users.length
          ? Math.max(
              ...users.map((u) =>
                typeof u.id === "number" ? u.id : Number(u.id) || 0
              )
            )
          : 0;
        const nextId = maxId + 1;

        const newUser = { ...values, id: nextId };

        return axios.post(`${BASE_URL}/users`, newUser);
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container py-4 d-flex justify-content-center bg-light">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 border bg-white shadow px-3 px-md-4 pt-3 pb-4 rounded">
        <h1 className="h3 mb-3 text-center text-md-start">Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Phone:</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter phone"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>

          <button className="btn btn-success mb-2 mb-sm-0">Submit</button>
          <Link to="/" className="btn btn-primary ms-sm-3 mt-2 mt-sm-0">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
