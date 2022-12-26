import React from "react";
import { NavLink } from "react-router-dom";
import Errors from "../../assets/error.svg";

function Error() {
  return (
    <div className="py-5 text-center error">
      <img src={Errors} alt="" />
      <br />
      <NavLink to="/">
        <button className="btn">Go Back</button>
      </NavLink>
    </div>
  );
}

export default Error;
