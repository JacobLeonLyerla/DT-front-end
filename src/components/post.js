import React, { Component,Fragment } from "react";
import {Col,Table} from "reactstrap"
class Post extends Component {
renderPost=()=>{
          return this.props.post.map(post =>(<Fragment>
         <tr>
            <td>{post.name}</td>
            <td>{post.city}</td>
            {this.renderTags(post.tag)}</tr>
          </Fragment>))
      }

      renderTags = tag => {
        if (tag.length < 1) {
          tag = [];
        }
        if (tag !== undefined || tag !== "") {
          return (
            <td className="tag-container">
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

  render() {
      
    return (
        <Col className="table-container" md={`${10 + this.props.tagVar}`}>
  <Table dark>
        <thead>
          <tr>
       
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
         
              {this.renderPost()}         
        </tbody>
      </Table>
        
      </Col>
    );
  }
}
export default Post;
