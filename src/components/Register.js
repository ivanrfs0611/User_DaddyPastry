import React, { Component } from "react";
import Header from "./Header";
import BannerInner from "./BannerInner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from 'axios';
import  { Redirect } from 'react-router-dom'

export default class Register extends Component {

  constructor(){
    super(); 

    this.state ={
        success_flag: 0
        // selectedFile: null,
        // login: true
    };
}

  post(refs){
    var self = this;

    // console.log(refs);

    axios.post('http://localhost:3002/regis', {
      name: refs.name.value, 
      email: refs.email.value, 
      phonenumber: refs.phonenumber.value, 
      instagram: refs.instagram.value, 
      password: refs.password.value
    }).then(function(response){
        // console.log(response.data);        

        if (response.data.success){
            self.setState({
                success_flag: 1
            });
        } else {
            self.setState({
                success_flag: 2
            });
        }
    }).catch(function(err){
        console.log(err);
        self.setState({
          success_flag: 2
        });
    });
}
  
  render() {
      if (this.state.success_flag === 1) {
          return <Redirect to='/' />
      }

    return (
      <div>
        <Header />
        <BannerInner />
        <Navbar />
        <section className="banner-bottom">
          <div className="container">
            <h3 className="tittle">Register Now</h3>
            <div className="inner-sec">
              <div className="login p-5 bg-dark mx-auto mw-100">
                <form action="#">
                  <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom01">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        ref="email"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom02">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        ref="name"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom01">Phonenumber</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        ref="phonenumber"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom02">Instagram</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        ref="instagram"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="exampleInputPassword1 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password1"
                        ref="password"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="exampleInputPassword2 mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password2"
                        ref="confirmpassword"
                      />
                    </div>
                  </div>
                  <input type="button" onClick={() => this.post(this.refs)} value="Register" className="btn btn-primary submit mb-4"/>
                  <p>
                    <a href="#">By clicking Register, I agree to your terms</a>
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
