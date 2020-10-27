import React, { Component } from "react";
import Header from "./Header";
import BannerInner from "./BannerInner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";

const cookies = new Cookies();

export default class Success extends Component {
  constructor() {
    super();

    this.state = {
      login: true,
    };
  }

  authLogin() {
    let jwtToken = cookies.get("jwtToken");

    if (jwtToken === undefined) {
      this.setState({
        login: false,
      });
    }
  }

  componentWillMount() {
    this.authLogin();
  }

  render() {
    if (this.state.login === false) {
      return <Redirect to="/Login" />;
    }

    return (
      <div>
        <Header />
        <BannerInner />
        <Navbar />
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
          </ol>
          {/*/main*/}
          <section className="banner-bottom">
            <h3 className="tittle">Purchase Success</h3>
            <div className="row inner-sec">
              <div className="login p-5 mx-auto mw-100">
                <h5 className="tittle text-center">
                  Silahkan Transfer ke nomor rekening: BCA 604112483 a/n Admin
                </h5>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
