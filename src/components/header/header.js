import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import axios from "axios";
function widthFinder() {
  //if any element causes horizontal scroll, this will print the tag
  let docWidth = document.documentElement.offsetWidth;
  [].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
      if (el.offsetWidth > docWidth) {
        console.log(el);
      }
    }
  );
}

class header extends Component {
  constructor(props) {
    super(props);
    this.state = { showBussinessMenu: false, showTeachingMenu: false, isLoggedIn: false };
  }

  componentDidMount() {
    widthFinder();
    this.SessionExist();
  }
  SessionExist = () => {
    axios.post(`/api/sessions`, {
      email: this.state.email,
      password: this.state.password
    }).then((res) => {
      if (res.status === 201) {
        this.setState({ isLoggedIn: true });
        console.log('login succeeded');
      }
    }).catch((err) => {
      console.log('err: ', err)
    });
  }
  loginButtons = () => {
    return (
      <React.Fragment>
        <Link className="nav-items loginbtn" to="/login">
          Login
        </Link>
        <Link className="nav-items signupbtn" to="/signup">
          Signup
        </Link>
      </React.Fragment>
    );
  }
  showBussinesMenuOptions = (event) => {
    event.preventDefault();
    this.setState(prevState => ({ showBussinesMenu: !prevState.showBussinesMenu, showTeachingMenu: false }));
  }

  showTeachingMenuOptions = (event) => {
    event.preventDefault();
    this.setState(prevState => ({ showTeachingMenu: !prevState.showTeachingMenu, showBussinesMenu: false }));
  }

  udemyBussiness = () => {
    return (
      <div className="dropdown-menu">
        Get your team access to access to over 6,000 top udemy courses,anytime,anywhere.
        <button className="udemy-bussiness-btn">Try Udemy Business</button>
      </div>
    );
  }

  udemyTeaching = () => {
    return (
      <div className="dropdown-menu">
        Turn on what you know in an opputunity and reach the millions around the world.
        <button className="udemy-bussiness-btn">Learn More</button>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <section className="banner">
            <Link className="nav-items" to="/">
              <img
                className="banner-image"
                src="/images/default-meta-image.png"
                alt="banner"
              />
            </Link>
            <span>Categories</span>
            <input
              type="text"
              className="search-bar"
              name="searh"
              placeholder="search for anything"
            />
          </section>
          <nav className="nav">
            <ul className="nav-list">
              <div className="dropdown">
                <span className="nav-items udemy-business" onClick={this.showBussinesMenuOptions}>
                  Udemy Business
                </span>
                {this.state.showBussinesMenu && this.udemyBussiness()}
              </div>
              <div className="dropdown">
                <span className="nav-items udemy-teaching" onClick={this.showTeachingMenuOptions}>
                  Teach on Udemy
                </span>
                {this.state.showTeachingMenu && this.udemyTeaching()}
              </div>
              <Link className="nav-items" to="/cart">
                <ShoppingCartIcon />
              </Link>
              {!this.state.isLoggedIn && this.loginButtons()}
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
export default header;
