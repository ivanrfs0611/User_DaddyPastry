import React, { Component } from "react";
import Header from "./Header";
import BannerInner from "./BannerInner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
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
            <li className="breadcrumb-item active">About Us</li>
          </ol>
          {/*/main*/}
          <section className="banner-bottom">
            <div className="container">
              <h3 className="tittle">About Us</h3>
              <div className="row inner-sec">
                <div className="col-lg-6 about-img" data-aos="flip-right">
                  <img src="images/ac.jpg" className="img-fluid" alt="" />
                </div>
                <div
                  className="col-lg-6 about-info text-left"
                  data-aos="flip-left"
                >
                  <h4 className="sub-hd mb-4">We are the Best </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sedc
                    dnmo eiusmod tempor incididunt ut labore et dolore magna
                    aliqua uta enim ad minim ven iam quis nostrud exercitation
                    ullamco labor nisi ut aliquip exea commodo consequat duis
                    aute irudre dolor in elit sed uta labore dolore reprehender
                  </p>
                  <p className="sup-para mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sedc
                    dnmo eiusmod tempor incididunt ut labore et dolore magna
                    aliqua uta enim ad minim ven iam quis nostrud exercitation
                    ullamco labor nisi ut aliquip exea commodo consequat duis
                    aute irudre dolor in elit sed uta labore dolore reprehender
                  </p>
                  {/* <div class="view my-4">
						<a href="single.html" class="btn btn-primary read-m">View More</a>
					</div> */}
                  <img src="images/banner31.jpg" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </section>
          {/*/seller*/}
          <section className="grid-info-section">
            <div className="container">
              <h3 className="tittle">Best Seller</h3>
              <div className="row inner-sec">
                <ul id="flexiselDemo1">
                  <li>
                    <div className="blog-item text-center">
                      <img
                        src="images/1.jpg"
                        alt=" "
                        className="img-fluid rounded-circle"
                      />
                      <div className="floods-text">
                        <h3>Item 1</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="blog-item text-center">
                      <img
                        src="images/2.jpg"
                        alt=" "
                        className="img-fluid rounded-circle"
                      />
                      <div className="floods-text">
                        <h3>Item 2</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="blog-item text-center">
                      <img
                        src="images/3.jpg"
                        alt=" "
                        className="img-fluid rounded-circle"
                      />
                      <div className="floods-text">
                        <h3>Item 3</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="blog-item text-center">
                      <img
                        src="images/4.jpg"
                        alt=" "
                        className="img-fluid rounded-circle"
                      />
                      <div className="floods-text">
                        <h3>Item 4</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="blog-item text-center">
                      <img
                        src="images/5.jpg"
                        alt=" "
                        className="img-fluid rounded-circle"
                      />
                      <div className="floods-text">
                        <h3>Item 5</h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <center>
                  <Link to="/menu" className="btn btn-primary read-m">
                    View More
                  </Link>
                </center>
              </div>
            </div>
          </section>
          {/*//seller*/}
          <section className="banner-bottom">
            <div className="container-fluid">
              <h3 className="tittle">Our Experts</h3>
              <div className="row inner-sec team-sec">
                <div className="col-md-6 team-main">
                  <div className="row">
                    <div className="col-md-5 team-img" data-aos="flip-right">
                      <img
                        src="images/team1.jpg"
                        alt=" "
                        className="img-fluid"
                      />
                    </div>
                    <div
                      className="col-md-7 team-info text-left"
                      data-aos="flip-left"
                    >
                      <h4>Angelica </h4>
                      <h6>Malted wheat flake bread</h6>
                      <p>
                        Aenean orci erat, placerat id pulvinar nec, tincidunt
                        vel eros.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit sedc dnmo eiusmod tempor{" "}
                      </p>
                      <div className="row  pt-3 mt-3 team-social border-top">
                        <h5 className="col-md-4 text-left">Contact</h5>
                        <ul className="col-md-8 social_list1 text-right">
                          <li>
                            <a href="#" className="facebook1 ">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter2 mx-2">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dribble3">
                              <i className="fab fa-dribbble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 team-main">
                  <div className="row">
                    <div className="col-md-5 team-img" data-aos="flip-right">
                      <img
                        src="images/team2.jpg"
                        alt=" "
                        className="img-fluid"
                      />
                    </div>
                    <div
                      className="col-md-7 team-info text-left"
                      data-aos="flip-left"
                    >
                      <h4>Angelica </h4>
                      <h6>Malted wheat flake bread</h6>
                      <p>
                        Aenean orci erat, placerat id pulvinar nec, tincidunt
                        vel eros.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit sedc dnmo eiusmod tempor{" "}
                      </p>
                      <div className="row  pt-3 mt-3 team-social border-top">
                        <h5 className="col-md-4 text-left">Contact</h5>
                        <ul className="col-md-8 social_list1 text-right">
                          <li>
                            <a href="#" className="facebook1 ">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter2 mx-2">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dribble3">
                              <i className="fab fa-dribbble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*reviews_sec*/}
          <section className="banner-bottom reviews_sec">
            <div className="container">
              <h3 className="tittle cen">Testimonial</h3>
              <div className="inner-sec">
                <div className="flexslider mx-auto">
                  <ul className="slides">
                    <li>
                      <div className="row">
                        <div className="col-md-3 testimonials_grid-inn">
                          <img
                            src="images/t1.jpg"
                            alt=" "
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-9 testimonials_grid text-left">
                          <h3>
                            Gretchen
                            <span>(Customer)</span>
                          </h3>
                          <i>United States</i>
                          <p>
                            Maecenas interdum, metus vitae tincidunt
                            porttitor,Proin eget gravida odio. Donec ullamcorper
                            est eu magna quam egestas sem, ac scelerisque nisl
                            nibh vel lacus. Proin eget gravida odio. Donec
                            ullamcorper est eu accumsan cursus.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-3 testimonials_grid-inn">
                          <img
                            src="images/t2.jpg"
                            alt=" "
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-9 testimonials_grid text-left">
                          <h3>
                            Josephine Lee
                            <span>Customer</span>
                          </h3>
                          <i>United States</i>
                          <p>
                            Maecenas interdum, metus vitae tincidunt
                            porttitor,Proin eget gravida odio. Donec ullamcorper
                            est eu magna quam egestas sem, ac scelerisque nisl
                            nibh vel lacus. Proin eget gravida odio. Donec
                            ullamcorper est eu accumsan cursus.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-3 testimonials_grid-inn">
                          <img
                            src="images/t1.jpg"
                            alt=" "
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-9 testimonials_grid text-left">
                          <h3>
                            Mark Olson
                            <span>Customer</span>
                          </h3>
                          <i>United States</i>
                          <p>
                            Maecenas interdum, metus vitae tincidunt
                            porttitor,Proin eget gravida odio. Donec ullamcorper
                            est eu magna quam egestas sem, ac scelerisque nisl
                            nibh vel lacus. Proin eget gravida odio. Donec
                            ullamcorper est eu accumsan cursus.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
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
