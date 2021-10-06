import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../header/header";
import axios from "axios";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    // console.log(props.match.params.id);
  }
  // TODO: Beautify the login page and add login functionality
  // FIXME: 
  handleChange = (e) => {
    if (e.target.name === 'Email') {
      this.setState({ email: e.target.value });
    }
    if (e.target.name === 'Password') {
      this.setState({ password: e.target.value });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();    
    axios.post(`/api/sessions`, {
      email: this.state.email,
      password: this.state.password
    }).then((res) => {
      if (res.status === 204) {        
        console.log('login succeeded');
        <Header email={this.state.email} password={this.state.password} />
      }
    }).catch((err) => {
      localStorage.removeItem('email');
        localStorage.removeItem('psd');
      console.log('err: ', err.message)
    }); 
  }

  render() {
    return (
      <React.Fragment>
        <div className="content">
          <Header />
          <form className="login-container">
            <label htmlFor="email" className="field">
              <span className="label-text">Email</span>
              <input type="text" name="Email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
            </label>
            <label htmlFor="password" className="field">
              <span className="label-text">Password</span>
              <input type="password" name="Password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
            </label>
            <button onClick={this.handleSubmit}>Login</button>
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Login;
