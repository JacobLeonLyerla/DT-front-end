import React,{Component} from "react";
import { Row, Col } from "reactstrap";
import {Link} from "react-router-dom"
import axios from "axios";
import Pictures from "./renderPictures";

class Trek extends Component{
state={
    tag:"",
}
componentDidMount(){
    let {id} =this.props.match.params
   
    axios
    .get(`https://dt-back-end.herokuapp.com/tags/${id}`)
    .then(response =>{
        console.log(response.data)
        this.setState({tag:response.data})
    }).catch(err=>{
        console.log(err)
    })
}

    render(){

        return(
            <Col className="table-container" md={`${10 + this.props.tagVar}`}>
<div>{this.state.tag.name}<br/>
<br/>
<br/>
{this.state.tag.description}</div>
<Pictures imgTag={this.state.tag.tag} style="tag-filtered"/>
</Col>
        )
    }
}
export default Trek;