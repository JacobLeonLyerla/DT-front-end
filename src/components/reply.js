import React from 'react';
import { Tooltip } from 'reactstrap';
 class Reply extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          tooltipReply: false,
        };
    }
      toggle(type) {
        this.setState({
          tooltipReply: !this.state.tooltipReply,});   
      
    }
  render() {
    return (
     <div className="target-comment"><i id={`reply${this.props.id}`} class="fas fa-reply"></i>  <Tooltip placement="left" isOpen={this.state.tooltipReply} target={`reply${this.props.id}`} toggle={()=>this.toggle("Reply")}>
     Reply
   </Tooltip>
   </div>
    );
  }
}
export default Reply;