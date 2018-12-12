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
 

    <tbody>
      <tr>
        <td>{sub.name}</td>
        <td>{sub.city}</td>
        <td>{sub.country}</td>
        {this.renderTags(sub.tag)}
      </tr>
    </tbody>

    
));

}
renderTags=(tag)=>{
    if(tag.length  <1 ){
        tag = []
    }
if (tag !== undefined || tag !==""){
return <td className="tag-container"> {tag.map(tag =>(
   <div className="tag">{`${tag}`}<br/></div>
))
}</td>
}
}
render(){
  return (
    <Col className="table-container" md={`${10 + this.props.tagVar}`}>
    <div className="google"></div>
       <Table hover>
        <thead className="thead">
      <tr className="tr">
        <th className="th">Name</th>
        <th className="th">City</th>
        <th className="th">Country</th>
        <th className="th">Tags</th>
      </tr>
    </thead>
    <div className="table-items">
  {this.userSubmissionTable()}
  </div>
  </Table>
  <div className="pics"></div>
    </Col>
  );
}
};
export default TagView;
