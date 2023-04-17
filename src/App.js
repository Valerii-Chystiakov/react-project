import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import photo from "./img/default-4.jpg";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      helpText: 'Help mee!!'
    }

    this.inputClick = this.inputClick.bind(this)
  }

  render() {
    return (<div className="name">
    <Header />
    <h1>{this.state.helpText}</h1>
    <p>Hi</p>
    <input placeholder={this.state.helpText} onClick={this.inputClick}/>
    <br/>
    <img src={photo} alt={this.state.helpText} onClick={this.inputClick}/>
    <Footer />
  </div>)
  }

  inputClick(){
    this.setState({ helpText: "aaaaaachello"})
  }
}



export default App