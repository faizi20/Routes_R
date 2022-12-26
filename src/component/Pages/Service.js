import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../store/context";

function Service() {
  const { service } = useContext(AppContext);
  console.log(service);
  return (
    <div className="section">
      <h2 className="common-heading">Our Service</h2>
      <div className="container">
        <div className="row">
          {service.map((currElm) => {
            const { id, title, body } = currElm;
            return (
              <div className="col-lg-4 col-md-6 mb-4">
                <div key={id} className="card">
                  <div className="card-data">
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <NavLink to="/service">
                      <button className="btn">Read More</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;
