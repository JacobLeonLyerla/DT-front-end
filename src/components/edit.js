import React from 'react';
import { Tooltip } from 'reactstrap';
 class Edit extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          tooltipEdit: false,
          tooltipDelete:false
        };
      }
    
      toggle(type) {
          if(type ==="edit"){
        this.setState({
          tooltipEdit: !this.state.tooltipEdit,
         
        });}else{
        this.setState({
          tooltipDelete:!this.state.tooltipDelete
           
          }); 
      }}
  render() {
    return (
     <div className="target-comment"><i id={`edit${this.props.id}`} class="fas fa-edit"></i>  <Tooltip placement="left" isOpen={this.state.tooltipEdit} target={`edit${this.props.id}`} toggle={()=>this.toggle("edit")}>
     Edit
   </Tooltip>|<i id={`delete${this.props.id}`} class="fas fa-times"></i>
   <Tooltip placement="right" isOpen={this.state.tooltipDelete} target={`delete${this.props.id}`} toggle={this.toggle}>
     delete
   </Tooltip></div>  
    );
  }
}
export default Edit;