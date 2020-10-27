import React, { Component } from "react";
import Header from "./Header";
import BannerInner from "./BannerInner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import Card from "./Card";
// import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      menu: [],
      success_flag: 0,
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

  componentDidMount() {
    console.log("START GET A");
    axios.get("http://localhost:3002/menu").then((result) => {
      this.setState(
        {
          menu: result.data.return,
        },

        console.log("result.data.result")
      );
    });

    console.log("START GET B");
  }

  render() {
    return (
      <div>
        <Header />
        <BannerInner />
        <Navbar />
        <br></br>
        {this.state.menu.map((val) => (
          <Card menu={val} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default Menu;
