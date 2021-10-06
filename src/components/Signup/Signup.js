import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../header/header";
import axios from "axios";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '' };
    // console.log(props.match.params.id);
  }
  // TODO: Beautify the login page and add login functionality
  // FIXME: 
  handleChange = (e) => {
    if (e.target.name === 'FullName') {
      this.setState({ name: e.target.value });
    }
    if (e.target.name === 'Email') {
      this.setState({ email: e.target.value });
    }
    if (e.target.name === 'Password') {
      this.setState({ password: e.target.value });
    }

  }
  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`/api/users`,{
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.name
    }).then((res) => {
      if (res.status === 201) {
        console.log('signup succeeded');
      }
    }).catch((err) => {
      console.log('err: ', err.message)
    });;
  }
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <Header />
          <form className="login-container">
            <label htmlFor="fullname" className="field">
              <span className="label-text">FullName</span>
              <input type="text" value={this.state.name} onChange={this.handleChange} name="FullName" placeholder="Enter Full Name" />
            </label>
            <label htmlFor="email" className="field">
              <span className="label-text">Email</span>
              <input type="text" value={this.state.email} onChange={this.handleChange} name="Email" placeholder="Enter email" />
            </label>
            <label htmlFor="password" className="field">
              <span className="label-text">Password</span>
              <input type="password" value={this.state.password} onChange={this.handleChange} name="Password" placeholder="Enter password" />
            </label>
            <button onClick={this.handleSubmit}>Signup</button>
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Signup;
