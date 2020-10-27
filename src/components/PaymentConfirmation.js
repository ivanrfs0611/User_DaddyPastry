import React, { Component } from "react";
import Header from "./Header";
import BannerInner from "./BannerInner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Axios from "axios";
import { Redirect } from "react-router-dom";

export default class PaymentConfirmation extends Component {
  constructor() {
    super();

    this.state = {
      success_flag: 0,
    };
  }

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  upload(refs) {
    var self = this;
    const formData = new FormData();

    formData.append("image", this.state.selectedFile);
    formData.append("email", refs.email.value);
    formData.append("transfer_name", refs.name.value);
    formData.append("phone_number", refs.phonenumber.value);
    formData.append("nominal", refs.nominal.value);
    formData.append("date", refs.date.value);

    console.log(formData);

    Axios.post("http://localhost:3002/fileupload", formData, {})
      .then(function (response) {
        console.log(response.data);

        document.getElementById("create-course-form").reset();

        if (response.data.success) {
          self.setState({
            success_flag: 1,
          });
        } else {
          self.setState({
            success_flag: 2,
          });
          document.getElementById("create-course-form").reset();
        }
      })
      .catch(function (err) {
        console.log(err);

        self.setState({
          success_flag: 2,
        });
      });
  }

  render() {
    if (this.state.success_flag === 2) {
      var success_flag = (
        <div className="form-group">
          <br></br>
          <div class="alert alert-success" role="alert">
            <strong>Well done! </strong>
            <span>You successfully submit your payment confirmation!</span>
          </div>
        </div>
      );
    } else if (this.state.success_flag === 1) {
      var success_flag = (
        <div className="form-group">
          <br></br>
          <div class="alert alert-danger" role="alert">
            <strong>Oh no..</strong>
            <span>Something went wrong</span>
            <a href="#" class="alert-link">
              alert link
            </a>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <BannerInner />
        <Navbar />
        <section className="banner-bottom">
          {success_flag}
          <div className="container">
            <h3 className="tittle">Payment Confirmation</h3>
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
                      <label htmlFor="validationCustom01">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        ref="phonenumber"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom02">
                        Nominal Transfer
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        ref="nominal"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="exampleInputPassword1 mb-2">Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="password1"
                        ref="date"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12 mt-5">
                      <label htmlFor="exampleInputPassword2 mb-2">File</label>
                      <input
                        type="file"
                        id="myFile"
                        name="filename2"
                        accept="image/*"
                        onChange={this.onFileChange}
                      />
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <input
                    type="button"
                    onClick={() => this.upload(this.refs)}
                    value="Submit"
                    className="btn btn-primary submit mb-4"
                  />
                  <p></p>
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
