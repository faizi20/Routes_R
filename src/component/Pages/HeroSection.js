import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import { AppContext } from "../store/context";

function HeroSection() {
  const { name, image } = useContext(AppContext);
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-hero-data">
              <p className="hero-top-data">THIS IS ME</p>
              <h1 className="hero-heading">{name}</h1>
              <p className="hero-para">I'm {name}. A Frontend Developer</p>
            </div>
            <Button className="btn hire-btn">
              <NavLink to="/contact">Hire Me</NavLink>
            </Button>
          </div>
          <div className="col-md-6">
            <div className="section-hero-image text-center">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
