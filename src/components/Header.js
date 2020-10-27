import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      login: false,
      email: "",
    };

    //this.changeState = this.changeState.bind(this);
  }

  componentWillMount() {
    var self = this;

    let jwtToken = cookies.get("jwtToken");

    if (jwtToken !== undefined) {
      this.setState({
        login: true,
      });
    }

    axios
      .post("http://localhost:3002/admindata", {
        token: cookies.get("jwtToken"),
      })
      .then(function (response) {
        console.log(response);
        self.setState({
          email: response.data.return.email,
        });
      })
      .catch(function (err) {
        console.log(err);

        self.setState({
          success_flag: 2,
        });
      });
  }

  // changeState = () => {
  //   this.setState({
  //     login: !this.state.login
  //   });
  // };

  login() {
    console.log("LOGIN");
    if (this.state.login === false) {
      return <Link to="/login" />;
    }
  }

  logout() {
    cookies.remove("jwtToken");
    console.log("LOGOUT");

    this.state.login = false;

    return <Link to="/" />;
  }

  render() {
    console.log(this.state.login);

    return (
      <div>
        <header>
          <div className="top-bar_sub container-fluid">
            <div className="row">
              <div className="col-md-4 logo text-left" data-aos="fade-up">
                <Link className="navbar-brand" to="/">
                  {/* <i class="fab fa-gitkraken"></i>  */}
                  {/* Daddy Pastry</a> */}
                  {/* buat tambahin logo di header*/}
                </Link>
                <Link
                  className="navbar-brand mr-auto"
                  to="/"
                  meta
                  charSet="UTF-8"
                >
                  <img
                    src="images/logo.png"
                    alt="Logo Daddy Pastry"
                    className="img-fluid"
                    meta
                    charSet="UTF-8"
                  />{" "}
                  Daddy Pastry
                </Link>
                {/* buat tambahin logo di header*/}
              </div>
              <div
                className="col-md-8 top-forms text-right mt-4"
                data-aos="fade-up"
              >
                <span>Welcome Back! {this.state.email}</span>
                <span className="mx-lg-4 mx-md-2  mx-1">
                  <Link
                    onClick={!this.state.login ? "" : () => this.logout()}
                    to={!this.state.login ? "/login" : "/"}
                  >
                    <i
                      className="fas fa-lock"
                      onClick={!this.state.login ? "" : () => this.logout()}
                    />{" "}
                    {!this.state.login ? "Sign In" : "Logout"}
                  </Link>
                </span>
                {/* <span className="mx-lg-4 mx-md-2  mx-1">
                  <Link to="/">
                    <i className="fas fa-lock" onClick={() => this.logout()} /> Log Out
                  </Link>
                </span> */}
                <span className="mx-lg-2 mx-md-2  mx-1">
                  <Link to="/cart">
                    <i className="fas fa-shopping-cart" /> Cart
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
