import React, { Component } from "react";
import { Link } from "react-router-dom";

var loadjs = require("loadjs");

export default class Footer extends Component {
  componentWillMount() {
    loadjs(
      [
        "./css/flexslider.css",
        "./css/style.css",
        "./js/jquery.flexisel.js",
        "./js/jquery.flexslider.js",
        "./js/minicart.min.js",
        "./images/1.jpg",
        "./images/2.jpg",
        "./images/3.jpg",
        "./images/4.jpg",
        "./images/5.jpg",
        "./js/verification.js",
        "./css/verification.css",
      ],
      function () {}
    );
  }
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-8 footer-grid text-left"
                data-aos="fade-right"
              >
                <Link className="navbar-brand" to="/"></Link>
                <Link className="logoimg mr-auto" to="/">
                  <img
                    src="images/logo.png"
                    alt="Logo Daddy Pastry"
                    className="img-fluid"
                  />{" "}
                  Daddy Pastry
                </Link>
                {/* buat tambahin logo di footer*/}
              </div>
              <div
                className="col-lg-4 subscribe-main footer-grid text-left"
                data-aos="fade-left"
              >
                <div className="footer-cpy text-left">
                  <div className="copyrighttop">
                    <ul>
                      <li className="mx-lg-3 mx-md-2 mx-1">
                        <a
                          className="facebook"
                          href="https://www.facebook.com/daddypastry"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                          <span>Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="facebook"
                          href="https://www.instagram.com/daddy_pastry"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram" />
                          <span>Instagram</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="copyrightbottom text-center">
                <p>© 2020 Daddy Pastry. All Rights Reserved</p>
              </div>
            </div>
            {/* //footer */}
          </div>
        </footer>
      </div>
    );
  }
}
