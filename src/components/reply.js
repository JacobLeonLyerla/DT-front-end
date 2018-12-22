import React, { Component } from "react";
import {
  Button,
  Tooltip,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
class Reply extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleTwo = this.toggleTwo.bind(this);
    this.state = {
      tooltipReply: false,
      modal: false
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
    <ModalHeader toggle={this.toggleTwo}>Modal title</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={this.toggleTwo}>
        Do Something
      </Button>{" "}
      <Button color="secondary" onClick={this.toggleTwo}>
        Cancel
      </Button>
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
