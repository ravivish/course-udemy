import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import axios from "axios";                
import ReactModal from 'react-modal';
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
const customBusinessStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const customTeachStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class header extends Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false, loaded: false, isLoggedIn: false, user: null };
  }
  handleOpenModal = () => {
    this.setState({ openModal: true, loaded: true });
  }
  handleCloseModal = () => {
    this.setState({ openModal: false, loaded: false });
  }
  componentDidMount() {
    widthFinder();
    SessionExist();
  }
  SessionExist = () => {
    axios.post(`/api/sessions`, {
      email: this.state.email,
      password: this.state.password
    }).then((res) => {
      if (res.status === 201) {
        console.log('login succeeded');
      }
    }).catch((err) => {
      console.log('err: ', err)
    });
  }
  teachOnUdemy = () => {
    return (
      <ReactModal
        parentSelector={() => document.querySelector('#root')}
        isOpen={this.state.openModal}
        onRequestClose={this.handleCloseModal}
        shouldCloseOnOverlayClick={true}
        style={customTeachStyles}
        aria={{
          labelledby: "heading",
          describedby: "full_description"
        }}
      >Turn what you know into an opportunity and reach millions around the world.
        <button onClick={this.handleCloseModal}>Close</button>
      </ReactModal>
    );
  }
  udemyBusiness = () => {
    return (
      <ReactModal
        parentSelector={() => document.querySelector('#root')}
        isOpen={this.state.openModal}
        onRequestClose={this.handleCloseModal}
        shouldCloseOnOverlayClick={true}
        style={customBusinessStyles}
        aria={{
          labelledby: "heading",
          describedby: "full_description"
        }}
      >Get your team access to access to over 6,000 top udemy courses,anytime,anywhere.
        <button onClick={this.handleCloseModal}>Close</button>
      </ReactModal>
    );
  }

  render() {
    ReactModal.setAppElement('#root');
    let teachmodal = this.teachOnUdemy();
    let businessmodal = this.udemyBusiness();
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
              <span className="nav-items udemy-business">
                <div className="dropdown">
                  <span className="link">Udemy Business</span>
                  <div className="dropdown-menu">
                    Get your team access to access to over 6,000 top udemy courses,anytime,anywhere.
                    <button className="signupbtn">Try Udemy Business</button>
                  </div>
                </div>
              </span>
              <span className="nav-items udemy-teaching">
                Teach on Udemy
              </span>
              <Link className="nav-items" to="/cart">
                <ShoppingCartIcon />
              </Link>
              <Link className="nav-items loginbtn" to="/login">
                Login
              </Link>
              <Link className="nav-items signupbtn" to="/signup">
                Signup
              </Link>

            </ul>
            {this.state.loaded && businessmodal}
            {this.state.loaded && teachmodal}
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
export default header;
