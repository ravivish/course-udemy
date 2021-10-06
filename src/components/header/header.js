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
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, showBussinessMenu: false, showTeachingMenu: false, isLoggedIn: false };

  }

  componentDidMount() {
    widthFinder();
    this.sessionExist();
  }
  componentDidUpdate() {
    if (this.state.name) {
      document.getElementById("user-profile-name").innerHTML = this.state.name;
    }
  }
  sessionExist = () => {
    axios.get('/api/users/me').then((res) => {
      if (res.status === 200) {
        this.setState({ isLoggedIn: true, user: res.data });
      }
    }).catch((err) => {
      console.log('err: ', err.message)
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

  profileButtons = () => {
    return (
      <div className="profile-photo-container">
        <div className="user-profile-photo" id="user-profile-name">
          {this.state.user.firstName.charAt(0)}
        </div>
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
              {!this.state.isLoggedIn ? this.loginButtons() : this.profileButtons()}
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
export default Header;
