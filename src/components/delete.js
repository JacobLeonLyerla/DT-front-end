import React,{Component,Fragment} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import axios from "axios";
class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
      handleDelete=()=>{
          console.log(this.props.id)
        axios
        .delete(`https://dt-back-end.herokuapp.com/comments/${this.props.id}`)
        .then(response => {
         console.log(response.data)
         this.toggle()
      this.props.setupComments(this.props.propsId)
        })
        .catch(err => {
            console.log(err)
        });
      }

      renderModal=()=>{
          return(<Fragment>
      <i  class="fas fa-times"  onClick={this.toggle}/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
  
          <ModalFooter>
            <Button color="danger" onClick={()=>this.handleDelete()}>Are you sure you want to delete this?</Button>{' '}
          </ModalFooter>
        </Modal>

         </Fragment> )
      }
  render() {
    return (<Fragment>
{this.renderModal()}
  
   </Fragment> );
  }
}
export default Delete;
