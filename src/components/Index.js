import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Navbar />
        <div>
          <section className="banner-bottom">
            <div className="container">
              <h3 className="tittle">Our History</h3>
              <div className="row inner-sec">
                <div className="col-lg-6 about-img" data-aos="flip-right">
                  <img src="images/ab.jpg" className="img-fluid" alt="" />
                </div>
                <div
                  className="col-lg-6 about-info text-left"
                  data-aos="flip-left"
                >
                  <h4 className="sub-hd mb-4">Established since.. </h4>
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
                  <img src="images/banner3.jpg" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </section>
          {/*//banner-bottom*/}
          {/*/banner-bottom*/}
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
                        <h3>Skitella</h3>
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
                        <h3>Curry</h3>
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
                        <h3>Cokelat</h3>
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
                        <h3>Matcha</h3>
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
                        <h3>Ayam Panggang</h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <center>
                <br />
                <br />
                <Link to="/menu" className="btn btn-primary read-m">
                  View More
                </Link>
              </center>
            </div>
          </section>
          <section className="banner-bottom">
            <div className="container">
              <h3 className="tittle">Our Gallery</h3>
              <div className="row inner-sec">
                <div className="col-md-4 proj_gallery_grid" data-aos="zoom-in">
                  <div className="section_1_gallery_grid">
                    <a
                      title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."
                      href="images/p1.jpg"
                    >
                      <div className="section_1_gallery_grid1">
                        <img
                          src="images/p1.jpg"
                          alt=" "
                          className="img-fluid"
                        />
                        <div className="proj_gallery_grid1_pos">
                          <h3>Baked Food</h3>
                          <p>Add some text</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="section_1_gallery_grid" data-aos="zoom-in">
                    <a
                      title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."
                      href="images/p2.jpg"
                    >
                      <div className="section_1_gallery_grid1">
                        <img
                          src="images/p2.jpg"
                          alt=" "
                          className="img-fluid"
                        />
                        <div className="proj_gallery_grid1_pos">
                          <h3>Baked Food</h3>
                          <p>Add some text</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4 proj_gallery_grid" data-aos="zoom-in">
                  <div className="section_1_gallery_grid">
                    <a
                      title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."
                      href="images/p4.jpg"
                    >
                      <div className="section_1_gallery_grid1">
                        <img
                          src="images/p4.jpg"
                          alt=" "
                          className="img-fluid"
                        />
                        <div className="proj_gallery_grid1_pos">
                          <h3>Baked Food</h3>
                          <p>Add some text</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="section_1_gallery_grid" data-aos="zoom-in">
                    <a
                      title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."
                      href="images/p5.jpg"
                    >
                      <div className="section_1_gallery_grid1">
                        <img
                          src="images/p5.jpg"
                          alt=" "
                          className="img-fluid"
                        />
                        <div className="proj_gallery_grid1_pos">
                          <h3>Baked Food</h3>
                          <p>Add some text</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4 proj_gallery_grid" data-aos="zoom-in">
                  <div className="section_1_gallery_grid">
                    <a
                      title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."
                      href="images/p3.jpg"
                    >
                      <div className="section_1_gallery_grid1">
                        <img
                          src="images/p3.jpg"
                          alt=" "
                          className="img-fluid"
                        />
                        <div className="proj_gallery_grid1_pos">
                          <h3>Baked Food</h3>
                          <p>Add some text</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="section_1_gallery_grid" data-aos="zoom-in">
                    <a
                      title="Donec sapien massa, placerat ac sodales ac, feugiat quis est."
                      href="images/p2.jpg"
                    >
                      <div className="section_1_gallery_grid1">
                        <img
                          src="images/p2.jpg"
                          alt=" "
                          className="img-fluid"
                        />
                        <div className="proj_gallery_grid1_pos">
                          <h3>Baked Food</h3>
                          <p>Add some text</p>
                        </div>
                      </div>
                    </a>
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
