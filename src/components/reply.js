import React, { Component } from "react";
import {
  Button,
  Tooltip,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,Form,
} from "reactstrap";
class Reply extends Component {
  constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.toggleTwo = this.toggleTwo.bind(this);
    this.state = {
      tooltipReply: false,
      modal: false,
      reply:"",
    };
  }
  toggle() {
    this.setState({
      tooltipReply: !this.state.tooltipReply
    });
  }
  toggleTwo() {
    this.setState({
      modal: !this.state.modal
    });
  }
  renderModal = () => {
return(
    <Modal
    isOpen={this.state.modal}
    toggle={this.toggleTwo}
    className={this.props.className}
  >
    <ModalHeader toggle={this.toggleTwo}>{`Reply to ${this.props.username}`}</ModalHeader>
<Form>
    <Input
    style={{height:"30vh"}}
    />
</Form>
    <ModalFooter>
      <Button color="primary" onClick={this.toggleTwo}>
        Do Something
      </Button>{" "}
    </ModalFooter>
  </Modal>)
  };
  render() {
    return (
      <div className="target-comment">
        <i
          onClick={this.toggleTwo}
          id={`reply${this.props.id}`}
          class="fas fa-reply"
        />
        <Tooltip
          placement="left"
          isOpen={this.state.tooltipReply}
          target={`reply${this.props.id}`}
          toggle={ this.toggle}
        >
          Reply
        </Tooltip>
      {this.renderModal()}
      </div>
    );
  }
}
export default Reply;
