import React, { Component } from "react";
import ListProduct from "./components/ListCourses/Courses";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment> 
        <Header />
        <ListProduct />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
