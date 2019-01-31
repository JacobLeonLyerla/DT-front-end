import React, { Component, Fragment } from "react";
import { Form, Input, Button, Modal, ModalFooter } from "reactstrap";

import axios from "axios";
class EditComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      comment: `${this.props.comment.comment}`
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  // this is our main function it handles the edit of the comment
  handleEditComment = () => {
    // first we make an edit object
    let edit = {};
    // we than set the key of comment to this.state.comment
    edit.comment = this.state.comment;
    // we use the id that was passed from the edit component to know what comment we want to edit
    // than we run a put request targeting that compoennt by the id and updating it with the new edit object
    axios
      .put(`https://dt-back-end.herokuapp.com/comments/${this.props.id}`, edit)
      .then(response => {
        // close the modal
        this.toggle();
        // call the setup comments function for rending data and set our reply flag to true
        this.props.setupComments(this.props.propsId);
        this.props.replyflag("true");
      })
      .catch(err => {
      });
  };
  // input takes the name and value from our input target and uses that to set the state
  handleInput = input => {
    this.setState({ [input.target.name]: input.target.value });
  };
  renderModal = () => {
    return (
      // this is our modal we wrapped it in gragment because it's alreadty being rendered inside of edit
      // inside of a div
      <Fragment>
        <i class="fas fa-edit" onClick={this.toggle} />
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <Form>
            <Input
              style={{ height: "30vh" }}
              name="comment"
              value={this.state.comment}
              onChange={this.handleInput}
              type="textarea"
            />
          </Form>

          <ModalFooter>
            <Button color="danger" onClick={() => this.handleEditComment()}>
              Edit
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
export default EditComment;
