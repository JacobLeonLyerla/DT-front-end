import React, { Component,Fragment } from "react";
import {Col,Table} from "reactstrap"
class Post extends Component {
renderPost=()=>{
        let arr = this.sortPost()
        console.log(arr)
          return arr.map(post =>(<Fragment>
         <tr className={(post.unreadComment+ post.unreadLike >0)?"notify":"no-notify"}>
             {console.log(post)}
             <td >{post.unreadComment + post.unreadLike}</td>
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
sortPost =()=>{
    let notifyArr=[]
    let oldArr =[]
    this.props.post.forEach(post => {
    
        if((post.unreadComment + post.unreadLike) >0){
            notifyArr.push(post)
        }else{
            oldArr.push(post)
        }
        
    });
     let arr = [...notifyArr, ...oldArr]
     return arr
}
  render() {
      
    return (
        <Col className="table-container" md={`${10 + this.props.tagVar}`}>
  <Table hover>
        <thead>
          <tr>
            <th>Notifications</th>
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
