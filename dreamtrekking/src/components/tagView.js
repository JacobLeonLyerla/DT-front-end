import React,{Component} from "react";
import axios from "axios";
import { Table,Row,Col } from 'reactstrap';

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

 <Row className="tag-filtered">
       <Col data-ca="ca" className="tag-img water" md="6">
       <Link to="/dashboard/water" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Lake</p>
          </div></Link>
        </Col>
        <Col className="tag-img snow" md="6">
        <Link to="/dashboard/snow" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Snow</p>
          </div></Link>
        </Col>{" "}
        <Col className="tag-img market" md="6">
        <Link to="/dashboard/market" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Market</p>
          </div></Link>
        </Col>
        <Col className="tag-img camping" md="6">
        <Link to="/dashboard/camping" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Camping</p>
          </div></Link>
        </Col>
        <Col className="tag-img ranch" md="6">
        <Link to="/dashboard/ranch" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Ranch</p>
          </div></Link>
        </Col>
        <Col className="tag-img asia" md="6">
        <Link to="/dashboard/asia" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Asia</p>
          </div></Link>
        </Col>
        <Col className="tag-img europe" md="6">
        <Link to="/dashboard/europe" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Europe</p>
          </div></Link>
        </Col>
        <Col className="tag-img africa" md="6">
        <Link to="/dashboard/africa" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Africa</p>
          </div></Link>
        </Col>
        <Col className="tag-img alaska" md="6">
        <Link to="/dashboard/alaska" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>Alaska</p>
          </div></Link>
        </Col>
        <Col className="tag-img nz" md="6">
        <Link to="/dashboard/nz" style={{ textDecoration: "none" }}>
          <div className="cover ">
            {" "}
            <p>New Zeland</p>
          </div></Link>
        </Col>
      </Row>

    </Col>
  );
}
};
export default TagView;
