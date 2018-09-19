import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import "./App.css";
import "./css/index.css";

class App extends Component {
  state={
    scroll:false,
  }
  componentDidMount() {
    window.addEventListener('scroll',()=>this.scroll() );
 }
 scroll=()=>{
   this.setState({scroll:true})
 }
  render() {
    
    return (
      <div className="App mapBackground-styles">
        <br />

        <div>{this.state.scroll ? (<Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>

          </CardBody>
        </Card>):(<div>whaaat</div>)}
          </div>
      
      </div>
    );
  }
}

export default App;
