import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { deleteReducer, editReducer } from "../reducer/front-reducer";

const EditFront = () => {
  const employee = useSelector((state) => state.a);
  let { ID } = useParams();
  const filter = employee.filter((dataParam) => dataParam.id === Number(ID));
  const [emp, update] = useState(filter[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = () => {
    dispatch(editReducer(emp));
    navigate("/home");
  };
  const dlt = () => {
    dispatch(deleteReducer(emp));
    navigate("/home");
  };

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div className="p-5">
      <div className="col-12">
        <h1 className="text-white">.</h1>
        <i
          className="bi bi-x position-absolute top-0 end-0 text-primary display-6"
          onClick={goToHome}
        ></i>
      </div>
      <div>
        <h4>Edit team member</h4>
        <h6 className="text-secondary">
          Edit contact info, location and role.
        </h6>
      </div>
      <div>
        <div>
          <h6>Info</h6>
          <input
            id="fname"
            type="text"
            value={emp.fname}
            onChange={(event) => {
              update((prevState) => {
                return { ...prevState, fname: event.target.value };
              });
            }}
          />
          <br />
          <br />
          <input
            id="lname"
            type="text"
            value={emp.lname}
            onChange={(event) => {
              update((prevState) => {
                return { ...prevState, lname: event.target.value };
              });
            }}
          />
          <br />
          <br />
          <input
            id="mail"
            type="text"
            value={emp.mail}
            onChange={(event) => {
              update((prevState) => {
                return { ...prevState, mail: event.target.value };
              });
            }}
          />
          <br />
          <br />
          <input
            id="number"
            type="text"
            value={emp.number}
            onChange={(event) => {
              update((prevState) => {
                return { ...prevState, number: event.target.value };
              });
            }}
          />
          <br />
          <br />
          <h6>Role</h6>

          <div>
            <label htmlFor="regular"> Regular - Can't delete members</label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="regular"
              name="role"
              checked={emp.role !== "admin" ? "checked" : ""}
              onClick={(event) => {
                update((prevState) => {
                  return { ...prevState, role: "" };
                });
              }}
            />
            <br />
            <br />
          </div>

          <div>
            <label htmlFor="admin"> Admin - Can delete members</label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="admin"
              name="role"
              checked={emp.role === "admin" ? "checked" : ""}
              onClick={(event) => {
                update((prevState) => {
                  return { ...prevState, role: "admin" };
                });
              }}
            />
            <br />
            <br />
          </div>
          <div className="row">
            <div className="col-6">
              <button
                className="btn btn-white border-dark text-danger float-start"
                onClick={dlt}
              >
                Delete
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-primary float-end" onClick={save}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditFront;
