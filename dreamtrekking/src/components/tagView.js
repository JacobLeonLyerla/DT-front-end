import React,{Component} from "react";
import axios from "axios";
import { Table } from 'reactstrap';
import {
  Col,

} from "reactstrap";
import { Link } from "react-router-dom";

class TagView extends Component {
state={
test:[{tag:""}]
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
   return  this.state.test.map(sub => 
   (
    <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>City</th>
        <th>Country</th>
        <th>Tags</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{sub.city}</td>
        <td>{sub.country}</td>
        {this.renderTags(sub.tag)}
      </tr>
    </tbody>
  </Table>  
    
));

}
renderTags=(tag)=>{
    if(tag.length  <1 ){
        tag = []
    }
if (tag !== undefined || tag !==""){
return tag.map(tag =>(
    <td className="tag">{`${tag}`}<br/></td>
))
}
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
