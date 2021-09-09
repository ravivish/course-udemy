import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../header/header";
import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { course: [], loading: true, totalprice: 0 };
  }
  componentDidMount() { 
    this.fetchCartData();
  }

  fetchCartData = () => {
    fetch(`/api/cart`)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          // let price = 0;
          // res.products.forEach((p) => {
          //   price += p.price;
          // });
          const price = res.products.reduce((sum, e) => {
            return sum += e.price;
          }, 0)
          this.setState({ course: res, totalprice: price, loading: false });
          // console.log(this.state);
        }
      })
      .catch((err) => console.log(err));
  };
  ShowCartItems = () => {
    const cartItems = this.state.course;
    return (
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.products.map((e) => {
            return (
              <li key={e._id} className="cart-list">
                <div className="cart-list-items">
                  <img className="cart-items-thumbnail" src={e.imgurl} alt="product_img" />
                  <div className="cart-item-description">
                    <p className="cart-item-product-headline"><strong>{e.headline}</strong></p>
                    <span>{e.description}</span>
                  </div>
                </div>
                <div className="cart-item-price">
                  <p>{e.price}</p>
                </div>
              </li>
            );
          })}
        </div>
        <div className="cart-price">
          <p>Total</p> 
          <p>{this.state.totalprice}</p>
          <input type="button" className="addtocartbtn" value="Checkout" />
        </div>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="cart-title">
          <span>Shopping Cart</span>
        </div>
        <div className="carts-container">
          {!this.state.loading && this.ShowCartItems()}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Cart;
