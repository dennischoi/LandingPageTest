'use strict';

import React from 'react';

class Employees extends React.Component {

  constructor(props) {
    super(props);
  }

  handleEnter() {

    var b = document.querySelector(".landing__section3"),
    e = [].slice.call(b.querySelectorAll(".e__moreAnchor img"));
    e.forEach(function (a,b) {
    	
	  a.addEventListener("mouseenter", function (b) {
	    var c = a.getAttribute("data-src");
	    var d = a.getAttribute("src");
	    a.src = c;

	    console.log(d)
	  })



    })
    
  }


  render() {
    return (

        <div className="landing__section3">
        	<div className="employees__presentation">
        		<img src="https://www.collage.co/wp-content/themes/collage/library/img//features/employees/employee-records-centralize-data-8col@2x.png"/>
        	</div>

        	<div className="employees__info">
        		<div className="e__container">
	        		<div className="e__title">
	        			<h1>Stay Connected</h1>
	        		</div>
        		
        			<div className="e__details">
        				<p>
        					<strong>Centralize and Optimize any and all your documents</strong> that regards your employees. 
        					Collage will help you track departments, interactions between them and store any data/documents concerning your employees.
        				</p>
        			</div>

        			<div className="e__more">
        				<a data-src="./images/icon_cloud.svg" className="e__moreAnchor" onMouseEnter={this.handleEnter} onMouseLeave={this.handleEnter} href="">
        					<img src="./images/icon_computer.svg" />
        					<p>Digital Platform</p>
        				</a>

        				<a data-src="./images/icon_cloudOJ.svg" className="e__moreAnchor" onMouseEnter={this.handleEnter} onMouseLeave={this.handleEnter} href="">
        					<img src="./images/icon_cloud.svg" />
        					<p>Cloud Storage</p>
        				</a>

        				<a data-src="./images/icon_chartOJ.svg" className="e__moreAnchor" onMouseEnter={this.handleEnter} onMouseLeave={this.handleEnter} href="">
        					<img src="./images/icon_chart.svg" />
        					<p>Organized Data</p>
        				</a>

        				<a data-src="./images/icon_timeOJ.svg" className="e__moreAnchor" onMouseEnter={this.handleEnter} onMouseLeave={this.handleEnter} href="">
        					<img src="./images/icon_time.svg" />
        					<p>Save Time</p>
        				</a>

        				<a  data-src="./images/icon_timeOJ.svg"className="e__moreAnchor" onMouseEnter={this.handleEnter} onMouseLeave={this.handleEnter} href="">
        					<img src="./images/icon_money.svg" />
        					<p>Save Money</p>
        				</a>

        				<a data-src="./images/icon_moreOJ.svg" className="e__moreAnchor" onMouseEnter={this.handleEnter} onMouseLeave={this.handleEnter} href="http://support.collage.co/">
        					<img src="./images/icon_more.svg" />
        					<p>More Features</p>
        				</a>
        			</div>
        		</div>

        	</div>
        </div>
    );
  }

}

export default Employees;
