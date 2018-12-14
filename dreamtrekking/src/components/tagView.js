import React, { Component } from "react";
import axios from "axios";
import { Table, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

class TagView extends Component {
  state = {
    test: [{ tag: "" }],
    tag: ""
  };
  componentDidMount() {
    let { id } = this.props.match.params;

    this.loadinfo();
  }
  loadinfo = () => {
    axios
      .get("http://localhost:5500/tags")
      .then(response => {
        let tagArr =[];
          response.data.forEach(e => {
            for (let i = 0; i < e.tag.length; i++) {
              if(e.tag[i].toLowerCase() === this.state.tag.toLowerCase()){
               tagArr.push(e)
              }
              
            }
            console.log(tagArr)
          });

        this.setState({ test:tagArr });
      })
      .catch(err => {});
  };
  userSubmissionTable = () => {
    return this.state.test.map(sub => (
      <tbody>
        <tr>
          <td>{sub.name}</td>
          <td>{sub.city}</td>
          <td>{sub.country}</td>
          {this.renderTags(sub.tag)}
        </tr>
      </tbody>
    ));
  };
  renderTags = tag => {
    if (tag.length < 1) {
      tag = [];
    }
    if (tag !== undefined || tag !== "") {
      return (
        <td className="tag-container">
          {" "}
          {tag.map(tag => (
            <div className="tag">
              {`${tag}`}
              <br />
            </div>
          ))}
        </td>
      );
    }
  };
  setTag = () => {
    if (this.state.tag === "") {
      let { id } = this.props.match.params;
      this.setState({ tag: id });
    }
  };
  renderTable = () => {
    return (
      <Table hover>
        <thead className="thead">
          <tr className="tr">
            <th className="th">Name</th>
            <th className="th">City</th>
            <th className="th">Country</th>
            <th className="th">Tags</th>
          </tr>
        </thead>
        <div className="table-items">{this.userSubmissionTable()}</div>
      </Table>
    );
  };
  tableFilter = ()=>{
    this.state.test.map(filter =>{
      let tagArr = filter.tag
    // filter.tag.forEach(ele => {
      
    // });
    })
  }
  render() {
    return (
      <Col className="table-container" md={`${10 + this.props.tagVar}`}>
      {this.tableFilter()}
        {this.setTag()}
        <div className="google">
          <p>Google Placeholder</p>
        </div>
        {this.renderTable()}

        <Row className="tag-filtered">
          <Col data-ca="ca" className="tag-img water" md="6">
            <Link to="/dashboard/water" style={{ textDecoration: "none" }}>
              <div className="cover ">
                {" "}
                <p>Lake</p>
              </div>
            </Link>
          </Col>
          <Col className="tag-img snow" md="6">
            <Link to="/dashboard/snow" style={{ textDecoration: "none" }}>
              <div className="cover ">
                {" "}
                <p>Snow</p>
              </div>
            </Link>
          </Col>{" "}
          <Col className="tag-img market" md="6">
            <Link to="/dashboard/market" style={{ textDecoration: "none" }}>
              <div className="cover ">
                {" "}
                <p>Market</p>
              </div>
            </Link>
          </Col>
          <Col className="tag-img camping" md="6">
            <Link to="/dashboard/camping" style={{ textDecoration: "none" }}>
              <div className="cover ">
                {" "}
                <p>Camping</p>
              </div>
            </Link>
          </Col>
          <Col className="tag-img ranch" md="6">
            <Link to="/dashboard/ranch" style={{ textDecoration: "none" }}>
              <div className="cover ">
                {" "}
                <p>Ranch</p>
              </div>
            </Link>
          </Col>
          <Col className="tag-img asia" md="6">
            <Link to="/dashboard/asia" style={{ textDecoration: "none" }}>
              <div className="cover ">
                {" "}
                <p>Asia</p>
              </div>
            </Link>
          </Col>
          <Col className="tag-img europe" md="6">
            <Link to="/dashboard/europe" style={{ textDecoration: "none" }}>
              <div className="cover ">
                {" "}
                <p>Europe</p>
              </div>
            </Link>
          </Col>
          <Col className="tag-img africa" md="6">
            <Link to="/dashboard/africa" style={{ textDecoration: "none" }}>
              <div className="cover ">
                {" "}
                <p>Africa</p>
              </div>
            </Link>
          </Col>
          <Col className="tag-img alaska" md="6">
            <Link to="/dashboard/alaska" style={{ textDecoration: "none" }}>
              <div className="cover ">
                {" "}
                <p>Alaska</p>
              </div>
            </Link>
          </Col>
          <Col className="tag-img nz" md="6">
            <Link to="/dashboard/nz" style={{ textDecoration: "none" }}>
              <div className="cover ">
                {" "}
                <p>New Zeland</p>
              </div>
            </Link>
          </Col>
        </Row>
      </Col>
    );
  }
}
export default TagView;
