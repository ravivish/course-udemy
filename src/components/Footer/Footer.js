import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { course: {}, loading: true };
  //   // console.log(props.match.params.id);
  // }

  render() {
    return (
      <div className="footer">
        <ul className="first-col link-columns">
          <li>Udemy Business</li>
          <li>Teach On Udemy</li>
          <li>Get the App</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <ul className="second-col link-columns">
          <li>Career</li>
          <li>Blog</li>
          <li>Help and Support</li>
          <li>Affiliate</li>
        </ul>
        <ul className="third-col link-columns">
          <li>Teams</li>
          <li>Privacy Policy</li>
          <li>Sitemap</li>
        </ul>
      </div>

    );
  }
}

export default Footer;
