import React from "react";
import ListProduct from "./components/ListCourses/Courses";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <React.Fragment>
      <div className="content">
        <Header />
        <ListProduct />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
