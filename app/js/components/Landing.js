'use strict';

import React from 'react';

import Header from './Header';
import Testimonial from './Testimonial';

class Landing extends React.Component {

  constructor(props) {
    super(props);
  }



  handleHover() {

    var b = document.querySelector(".landing__section1"),
    c = b.querySelector(".screen"),
    d = [].slice.call(c.querySelectorAll(".screen__slide")),
    e = [].slice.call(b.querySelectorAll(".featureList a"));

    e.forEach(function (a,b) {
      a.addEventListener("mouseenter", function (b) {
        var c = a.getAttribute("data-img"),
        f = document.getElementById(c),
        g = document.querySelector("[data-img="+c+"]");

        console.log(f)
        d.forEach(function (a,b) {
          a.classList.remove("active"),
          f.classList.add("active")
        }),

        e.forEach(function (a,b) {
          a.classList.remove("active"),
          g.classList.add("active")
        });

      })
    })
    console.log(d)
  }




  render() {
    return (
      <section className="landing__main">

      {/* COLLAGE DETAILS */}
        <div className="landing__section1">
          

          <div className="content__options">
            <div className="content__tabs">
              <div className="content__header">
                <h1>All-in-one HR Platform for Modern Businesses</h1>
              </div>

              <ul className="featureList">
                <li className="featureList__employee">
                  <a id="tester" data-img="laptop_employee" className="empty" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} href="">
                    <h3>Employee</h3>
                    <p>
                      Collect, store and manage all and any data you need that may affect employees.
                    </p>
                  </a>
                </li>
                <li className="featureList__report">
                  <a data-img="laptop_report" className="active" href="">
                    <h3>Reports</h3>
                    <p>
                      Export, filter, and chart all available data with ease.
                    </p>
                  </a>
                </li>
                <li className="featureList__benefits">
                  <a data-img="laptop_benefits" href="">
                    <h3>Benefits</h3>
                    <p>
                      Reduce your costs and onboard new hires with no hassle.
                    {/* Find the best package that suits your business */}
                    </p>
                  </a>
                </li>
                <li className="featureList__recruit">
                  <a data-img="laptop_recruit" href="">
                    <h3>Recruiting</h3>
                    <p>
                      Engage in a more seamless approach to recruitment that onboards internally.
                    </p>
                  </a>
                </li>
                <li className="featureList__performance">
                  <a data-img="laptop_performance" href="">
                    <h3>Performance</h3>
                    <p>
                      Track, co-ordinate, and promote better performance with a streamlined review process.
                    </p>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="content__presentation">
            <div className="screen">
              {/* Slides for each Feature */}
              <div id="laptop_employee" className="screen__slide">
                <img src="https://www.collage.co/wp-content/themes/collage/library/img//home/features/feature-employees@2x.png" />
              </div>

              <div id="laptop_report" className="screen__slide active">
                <img src="https://www.collage.co/wp-content/themes/collage/library/img//home/features/feature-reporting@2x.png" />
              </div>

              <div id="laptop_benefits" className="screen__slide">
                <img src="https://www.collage.co/wp-content/themes/collage/library/img//home/features/feature-benefits@2x.png" />
              </div>

              <div id="laptop_recruit" className="screen__slide">
                <img src="https://www.collage.co/wp-content/themes/collage/library/img//home/features/feature-recruiting@2x.png" />
              </div>

              <div id="laptop_performance" className="screen__slide">
                <img src="https://www.collage.co/wp-content/themes/collage/library/img//home/features/feature-performance@2x.png" />
              </div>

            </div>
          </div>
          
        </div>

        <Testimonial />

      </section>
    );
  }

}

export default Landing;
