import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (<div className="name">
    <Header />
    <h1>Hello</h1>
    <p>Hi</p>
    <Footer />
  </div>)
  }
}



export default App