import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              <li data-target="#carouselExampleIndicators" data-slide-to={3} />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="carousel-caption">
                  <h3>
                    Bakers Delight Your
                    <span>Local Baker</span>
                  </h3>
                </div>
              </div>
              <div className="carousel-item item2">
                <div className="carousel-caption">
                  <h3>
                    Freshly baked all day
                    <span>Every day!</span>
                  </h3>
                </div>
              </div>
              <div className="carousel-item item3">
                <div className="carousel-caption">
                  <h3>
                    Bakers Delight Your
                    <span>Local Baker</span>
                  </h3>
                </div>
              </div>
              <div className="carousel-item item4">
                <div className="carousel-caption">
                  <h3>
                    Freshly baked all day
                    <span>Every day!</span>
                  </h3>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
