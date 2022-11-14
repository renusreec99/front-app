import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { addReducer } from "../reducer/front-reducer";

const AddFront = () => {
  const dispatch = useDispatch();

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [mail, setmail] = useState("");
  const [number, setnumber] = useState("");
  const [role, setrole] = useState("");

  const handlefname = (list) => setfname(list.target.value);
  const handlelname = (list) => setlname(list.target.value);
  const handlemail = (list) => setmail(list.target.value);
  const handlenumber = (list) => setnumber(list.target.value);
  const handlerole = (list) => setrole(list.target.value);

  const employeecount = useSelector((state) => state.a.length);
  const navigate = useNavigate();
  const home = () => {
    navigate("/home");
  };
  const save = () => {
    console.log("debug");
    dispatch(
      addReducer({
        id: employeecount + 100,
        fname: fname,
        lname: lname,
        role: role,
        number: number,
        mail: mail,
      })
    );
    navigate("/home");
  };

  return (
    <div>
      <div className="col-12">
        <h1 className="text-white">.</h1>
        <i
          className="bi bi-x position-absolute top-0 end-0 text-primary display-6"
          onClick={home}
        ></i>
      </div>
      <div className="p-3">
        <h4>Add a team member</h4>
        <h6 className="text-secondary">Set email, location and role.</h6>
      </div>
      <div className="p-5">
        <div>
          <h6>Info</h6>

          <input id="fname" type="text" onChange={handlefname} value={fname} />
          <br />
          <br />
          <input id="lname" type="text" onChange={handlelname} value={lname} />
          <br />
          <br />
          <input id="mail" type="text" onChange={handlemail} value={mail} />
          <br />
          <br />
          <input
            id="number"
            type="text"
            onChange={handlenumber}
            value={number}
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
              onChange={handlerole}
              value={role}
              name="addradio"
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
              onChange={handlerole}
              value={role}
              name="addradio"
            />

          </div>
        </div>
        <button className="btn btn-primary float-end" onClick={save}>
          Save
        </button>
      </div>
    </div>
  );
};
export default AddFront;
