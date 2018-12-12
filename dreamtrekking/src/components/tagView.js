import React,{Component} from "react";
import axios from "axios";
import { Table } from 'reactstrap';
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
        this.setState({ test: response.data });
      })
      .catch(err => {
      });
}
userSubmissionTable= ()=>{
    return(
    <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
    )
}

render(){
  return (
    <Col md={`${10 + this.props.tagVar}`}>
  {this.userSubmissionTable()}
    </Col>
  );
}
};
export default TagView;
