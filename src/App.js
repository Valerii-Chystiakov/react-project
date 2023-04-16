import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import photo from "./img/default-4.jpg";

class App extends React.Component {
  render() {
    return (<div className="name">
    <Header />
    <h1>Hello</h1>
    <p>Hi</p>
    <img src={photo} />
    <Footer />
  </div>)
  }
}



export default App