import React, {Component, Fragment } from "react";
import "../../css/index.css";
import Header from "./header";
import Nav from "./landingNav";
import About from "./landingAbout";
import Info from "./about"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render(){
  return (
    <Fragment>
      {localStorage.clear()}
      <div className="App mapBackground-styles">
        <Nav toggle={this.toggle}/>
        <br />
        
        <Header />
      </div>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
      <Info/>
</Modal>
      <About />
    </Fragment>
  );}
};

export default Landing;
