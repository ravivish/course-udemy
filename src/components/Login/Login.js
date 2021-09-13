import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../header/header";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { course: {}, loading: true };
    // console.log(props.match.params.id);
  }


  render() {
    return (
      <React.Fragment>
        <div className="content">
          <Header />
          <form>
            <label htmlFor="email" className="field">
              <span className="label-text">Email</span>
              <input type="text" name="Email" placeholder="Enter email" />
            </label>
            <label htmlFor="password" className="field">
              <span className="label-text">Password</span>
              <input type="password" name="Password" placeholder="Enter password" />
            </label>
            <button>Login</button>
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Login;
