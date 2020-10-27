import React, { Component } from "react";
import Header from "./Header";
import BannerInner from "./BannerInner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Login extends Component {

  constructor(){
    super();

    this.state ={
        login: false,
        userId: 0
    };
  }

  componentWillMount(){
    let jwtToken = cookies.get('jwtToken');

    if (jwtToken !== undefined){
      this.setState({
        login: true
      })
    }
  }

  post(refs){
    var self = this;
    axios.post('http://localhost:3002/login', {
        email: refs.email.value,
        password: refs.password.value
    }).then(function(response){
      console.log(response);
      if (response.data.success && response.data.token != undefined){
        cookies.set('jwtToken', response.data.token, { path: '/' });
        cookies.set('user_id', response.data.id, { path: '/' });
        console.log(response.data.id)
        self.setState({
          userId: response.data.id,
          login: true
        })
        this.state.login = true;
      }
    }).catch(function(err){
        console.log(err);
    });
  }

  render() {

    if (this.state.login === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <Header />
        <BannerInner />
        <Navbar />
        <section className="banner-bottom">
          <div className="container">
            <h3 className="tittle">Sign In Now</h3>
            <div className="row inner-sec">
              <div className="login p-5 bg-dark mx-auto mw-100">
                <form action="#">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1 mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      ref="email"
                      placeholder
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1 mb-2">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      ref="password"
                      placeholder
                      required
                    />
                  </div>
                  <div className="form-check mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button input type="button" onClick={() => this.post(this.refs)} value="Sign In" className="btn btn-primary submit mb-4">
                  Sign In
                  </button>
                  <p>
                    <Link to="/register"> Don't have an account?</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
