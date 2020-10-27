import React, { Component } from "react";
import Header from "./Header";
import BannerInner from "./BannerInner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import axios from "axios";

const cookies = new Cookies();

export default class Cart extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      cartId: [],
      cartName: [],
      cartPrice: [],
      cartQty: [],
      cartSubTotal: 0,
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
    this.getCart();
  }

  // getCart(){
  //   let cookieCartId = cookies.get('cart_list_id');
  //   let cookieCartQty = cookies.get('cart_list_qty');

  //   for (var i=0; i<cookieCartId.length; i++) {
  //     this.cart.push(cookieCartId[i], cookieCartQty[i]);
  //   }
  // }

  getCart() {
    this.cartId = cookies.get("cart_list_id");
    this.cartName = cookies.get("cart_list_name");
    this.cartPrice = cookies.get("cart_list_price");
    this.cartQty = cookies.get("cart_list_qty");

    var index = cookies.get("cart_list_name");
    var tempSub = 0;

    if (this.cartName != undefined) {
      console.log(index.length);

      for (let y = 0; y < index.length; y++) {
        tempSub = tempSub + this.cartPrice[y] * this.cartQty[y];
        console.log(y);
      }
      this.cartSubTotal = tempSub;
      console.log(cookies.get("user_id"));
    }
  }

  test() {
    return <Redirect to="/" />;
  }

  checkoutpay() {
    var self = this;

    axios
      .post("http://localhost:3002/checkout", {
        userId: cookies.get("user_id"),
        menuId: this.cartId,
        menuQty: this.cartQty,
      })
      .then(function (response) {
        console.log(response.data);
        // document.getElementById("create-course-form").reset();

        if (response.data.success) {
          cookies.remove("cart_list_id");
          cookies.remove("cart_list_name");
          cookies.remove("cart_list_price");
          cookies.remove("cart_list_qty");

          this.cartId = [];
          this.cartName = [];
          this.cartPrice = [];
          this.cartQty = [];

          this.cartId = [];
          this.cartName = [];
          this.cartPrice = [];
          this.cartQty = [];

          self.setState({
            success_flag: 1,
          });
          return <Redirect to="/" />;
        } else {
          self.setState({
            success_flag: 1,
          });
          return <Redirect to="/" />;
        }
      })
      .catch(function (err) {
        console.log(err);
        self.setState({
          success_flag: 2,
        });
      });
  }

  // deleteCart(id){
  //   let cookieCartList = cookies.get('cart_list');

  //   for (var i=0; i<cookieCartList.length; i++){
  //       if (cookieCartList[i] === id) cookieCartList.splice(i, 1);
  //   }

  //   cookies.set('cart_list', cookieCartList, { path: '/' });

  //   this.getCart();
  // }

  render() {
    if (this.state.login === false) {
      return <Redirect to="/Login" />;
    }

    var list_data = [];

    if (this.cartName != undefined) {
      list_data = this.cartName.map((item, index) => {
        console.log(this.cartName[1]);
        return (
          <div className="row">
            <div className="col-lg-6">
              <h5>{this.cartName[index]}</h5>
            </div>
            <div className="col-lg-2">
              <h5>{this.cartPrice[index]}</h5>
            </div>
            <div className="col-lg-2">
              <h5>{this.cartQty[index]}</h5>
            </div>
            <div className="col-lg-2">
              <h5>{this.cartPrice[index] * this.cartQty[index]}</h5>
            </div>
          </div>
        );
      });
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
            <li className="breadcrumb-item active">Cart</li>
          </ol>
          {/*/main*/}
          <section className="banner-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h3>Shopping Cart</h3>
                  <div className="row">
                    <div className="col">
                      <hr />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h5>Product</h5>
                    </div>
                    <div className="col-lg-2">
                      <h5>Price</h5>
                    </div>
                    <div className="col-lg-2">
                      <h5>Quantity</h5>
                    </div>
                    <div className="col-lg-2">
                      <h5>Total</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <hr />
                      {list_data}
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="container">
                    <div className="row inner-sec">
                      <div className="checkout">
                        <div className="row">
                          <div className="col">
                            <p>Order Summary</p>
                            <hr />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7">
                            <p>Subtotal</p>
                            <br />
                            <p>Shipping</p>
                          </div>
                          <div className="col-lg-5">
                            <p>Rp {this.cartSubTotal}</p>
                            <br />
                            <p>Rp 10000</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <hr />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7">
                            <h3>Total</h3>
                          </div>
                          <div className="col-lg-5">
                            <p>Rp {this.cartSubTotal + 10000}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <Link to="/menu">
                          <button className="btn btn-outline-primary">
                            Continue Shopping
                          </button>
                        </Link>
                      </div>
                      <div className="col-lg-6">
                        <Link to="/success">
                          <button
                            type="submit"
                            className="btn btn-outline-primary ml-5"
                            onClick={() => this.checkoutpay()}
                          >
                            Checkout
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
