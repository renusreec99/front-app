import React from "react";


import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ListFront = () => {
  const navigate = useNavigate();
  const listArray = useSelector((store) => store.a);
  const countList = useSelector((state) => state.a);
  const add = () => {
    navigate("/add");
  };
  return (
    <div>
      <div className="col-12">
        <h1 className="text-white">.</h1>
        <i
          className="bi bi-plus position-absolute top-0 end-0 text-primary display-6"
          onClick={add} 
        ></i>
      </div>
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <h3>Team Members</h3>
            <h6 className="text-secondary">
              {" "}
              You have {countList.length} Team Members.
            </h6>
          </li>
          {listArray.map((list) => (
            <ListItem key={list._id} list={list} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ListFront;
