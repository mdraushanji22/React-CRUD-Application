import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState(location.state || {});

  useEffect(() => {
    if (location.state) {
      return;
    }

    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id, location.state]);
  return (
    <div className="container py-4 d-flex justify-content-center bg-light">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 border shadow px-3 px-md-4 pt-3 pb-4 rounded">
        <h3 className="h4 mb-3 text-center text-md-start">Details of User</h3>
        <div className="mb-2">
          <strong style={{ color: "#555" }}>Name:{data.name}</strong>
        </div>
        <div className="mb-2">
          <strong style={{ color: "#555" }}>Mail:{data.email}</strong>
        </div>
        <div className="mb-3">
          <strong style={{ color: "#555" }}>Phone:{data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Read;
