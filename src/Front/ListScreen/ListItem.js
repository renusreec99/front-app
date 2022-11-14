import React from "react";
import { useNavigate } from "react-router-dom";
const ListItem = ({
  list = {
    id: 2345,
    fname: "renu",
    lname: "chava",
    role: "admin",
    number: "12345678",
    mail: "renuchava@gmail.com",
  },
}) => {
  const navigate = useNavigate();
  const edit = (id) => {
    navigate("/edit/" + id);
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img src="/images/pro.png" className="rounded-circle" height={100} />
        </div>
        <div
          className="col-11 "
          onClick={() => {
            edit(list.id);
          }}
        >
          <p>
            {list.fname} {list.lname}
            {list.role && <span>({list.role})</span>}
          </p>
          <p className="text-secondary">{list.number}</p>
          <p className="text-secondary">{list.mail}</p>
        </div>
      </div>
    </li>
  );
};
export default ListItem;
