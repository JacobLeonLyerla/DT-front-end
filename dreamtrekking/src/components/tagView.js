import React,{Component} from "react";
import axios from "axios";
import {
  Col,

} from "reactstrap";
import { Link } from "react-router-dom";

class TagView extends Component {
state={
test:{}
}
componentDidMount(){
    this.loadinfo();
}
loadinfo = () =>{
    axios
    .get('http://localhost:5500/tags')
    .then(response => {
        this.setState({ test: response.data[0] });
      })
      .catch(err => {
      });
}

render(){
    console.log(this.state.test.city)
  return (
    <Col md={`${1 + this.props.tagVar}`}>
    <div>{this.state.test.city}</div>
    </Col>
  );
}
};
export default TagView;
