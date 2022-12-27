import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";

function Footer() {
  return (
    <>
      <section className="contact-short">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9">
              <div>
                <h3>Ready to get started?</h3>
                <h3>Talk to us Today</h3>
              </div>
            </div>
            <div className="col-md-3">
              <NavLink to="/">
                <Button>Get started</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h3>Logo</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Email"
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3>Follow Us</h3>
              <div className="row">
                <div className="col-md-4 col-3">
                  <NavLink to="/">
                    <i class="fab fa-discord icons"></i>
                  </NavLink>
                </div>
                <div className="col-md-4 col-3">
                  <NavLink to="/">
                    <i class="fab fa-instagram icons"></i>
                  </NavLink>
                </div>
                <div className="col-md-4 col-3">
                  <NavLink to="/">
                    <i class="fab fa-youtube icons"></i>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3>Call Us</h3>
              <h4>+92 963258741</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <p>@{new Date().getFullYear()} ALl Right Reserved</p>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-between">
                <p>Privacy Policy</p>
                <p>Terms & Condition</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
