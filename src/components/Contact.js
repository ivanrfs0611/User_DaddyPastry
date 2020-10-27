import React, { Component } from "react";
import Header from "./Header";
import BannerInner from "./BannerInner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class Contact extends Component {
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
            <li className="breadcrumb-item active">Contact Us</li>
          </ol>
          {/*/main*/}
          <section className="banner-bottom">
            <h3 className="tittle">Contact Us</h3>
            <p className="sub text-center">We love to discuss your idea</p>
            <div className="contact-map inner-sec">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1735603011894!2d106.82224244994124!3d-6.1473567955272985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5b08798c5db%3A0x3c5a1153c19dc6e!2sDaddy%20Pastry!5e0!3m2!1sid!2sid!4v1593886195847!5m2!1sid!2sid"
                width={600}
                height={450}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="Map"
              />
            </div>
            <div className="ad-inf-sec">
              <div className="container">
                <div className="address row">
                  <div className="col-lg-4 address-grid" data-aos="zoom-in">
                    <div className="row address-info">
                      <div className="col-md-4 address-left text-center">
                        <i className="far fa-map" />
                      </div>
                      <div className="col-md-8 address-right text-left">
                        <h6>Address</h6>
                        <p> Jalan Mangga Besar IX</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 address-grid" data-aos="zoom-in">
                    <div className="row address-info">
                      <div className="col-md-4 address-left text-center">
                        <i className="far fa-envelope" />
                      </div>
                      <div className="col-md-8 address-right text-left">
                        <h6>Email</h6>
                        <a href="mailto:daddy_pastry@gmail.com">
                          daddy_pastry@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 address-grid" data-aos="zoom-in">
                    <div className="row address-info">
                      <div className="col-md-4 address-left text-center">
                        <i className="fas fa-mobile-alt" />
                      </div>
                      <div className="col-md-8 address-right text-left">
                        <h6>Phone/WA</h6>
                        <a href="https://wa.me/6281389217733?text=Halo%20saya%20ingin%20tau%20menu%20yang%20dijual">
                          +62813-8921-7733
                        </a>
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
