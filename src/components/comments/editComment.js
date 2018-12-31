import React, { Component, Fragment } from "react";
import {
  Form,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

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

  handleEditComment = () => {
    console.log(this.props);
    let edit = {};
    edit.comment = this.state.comment;
    axios
      .put(`https://dt-back-end.herokuapp.com/comments/${this.props.id}`, edit)
      .then(response => {
        console.log(response.data);
        this.toggle();
        this.props.setupComments(this.props.propsId);
        this.props.replyflag("true");
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInput = input => {
    this.setState({ [input.target.name]: input.target.value });
  };
  renderModal = () => {
    return (
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
