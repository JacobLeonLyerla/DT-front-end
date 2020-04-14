import React, { Component, Fragment } from "react";

import { Button, Modal, ModalFooter } from "reactstrap";

import axios from "axios";
class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  // when the user says yes to wanting to delete the comment we call this function
  handleDelete = () => {
    // the function uses a delete method pulling the id off of props that was passed in from the edit component
    axios
      .delete(`https://dt-back-end.herokuapp.com/comments/${this.props.id}`)
      .then((response) => {
        // close the modal
        this.toggle();
        // call setupcomments
        this.props.setupComments(this.props.propsId);
        // and set the reply flag to true
        this.props.replyflag("true");
      })
      .catch((err) => {});
  };
  // when the user wants to delete sometihng they click delete
  // this modal is rendered and it asked them if they are sure
  // if they are than we actually delete the item
  renderModal = () => {
    return (
      <Fragment>
        <i class="fas fa-times" onClick={this.toggle} />
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalFooter>
            <Button color="danger" onClick={() => this.handleDelete()}>
              Are you sure you want to delete this?
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  };
  render() {
    return <Fragment>{this.renderModal()}</Fragment>;
  }
}
export default Delete;
