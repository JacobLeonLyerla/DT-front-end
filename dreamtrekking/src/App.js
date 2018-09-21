import React, { Component } from "react";


import "./App.css";
import "./css/index.css";

import Nav from "./components/nav"
import Header from "./components/header"
class App extends Component {
  state = {
    scroll: false
  };
  //   componentDidMount() {
  //     window.addEventListener('scroll',()=>this.scroll() );
  //  }
  //  scroll=()=>{
  //    this.setState({scroll:true})
  //  }
  render() {
    return (
      <div className="App mapBackground-styles">
        <Nav/>
        <br/>
        <br/>
        
        <Header/>
      </div>
    );
  }
}

export default App;
