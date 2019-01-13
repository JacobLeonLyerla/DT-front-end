import React, { Component } from "react";
import {
  Button,
  Tooltip,
  Modal,
  ModalHeader,

  ModalFooter,
  Input,
  Form
} from "reactstrap";
import axios from "axios";
class Reply extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleTwo = this.toggleTwo.bind(this);
    this.state = {
      tooltipReply: false,
      modal: false,
      reply: `Reply to ${this.props.username}`
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
    return (
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggleTwo}
        className={this.props.className}
      >
        <ModalHeader toggle={this.toggleTwo}>{`Reply to ${
          this.props.username
        }`}</ModalHeader>
        <Form>
          <Input
            style={{ height: "30vh" }}
            name="reply"
            value={this.state.reply}
            onChange={this.handleInput}
            type="textarea"
          />
        </Form>
        <ModalFooter>
          <Button color="primary" onClick={() => this.handleSubmit()}>
            Reply
          </Button>{" "}
        </ModalFooter>
      </Modal>
    );
  };
  handleInput = input => {
    this.setState({ [input.target.name]: input.target.value });
  };
  handleSubmit = () => {
    this.toggleTwo();
    let reply = {};

    reply.username = this.props.user.username;
    reply.comment = this.state.reply;
    reply.replyTo = this.props.id;
    axios
      .post(`https://dt-back-end.herokuapp.com/comments`, reply)
      .then(response => {
        let comment = {};
        comment.replies = this.props.replies;
        comment.replies.push(response.data._id);
        axios
          .put(
            `https://dt-back-end.herokuapp.com/comments/${this.props.id}`,
            comment
          )
          .then(response => {
            let unread;
            if (this.props.user.username !== this.props.tag.user) {
              unread = this.props.tag.unreadComment + 1;
            } else {
              unread = this.props.tag.unreadComment;
            }
            comment = {};

            comment.unreadComment = unread;
            console.log(this.props.propsId);
            axios
              .put(
                `https://dt-back-end.herokuapp.com/tags/${this.props.propsId}`,
                comment
              )
              .then(response => {
                console.log(response.data);
                this.props.replyflag("true");
                this.props.setupComments(this.props.propsId);
                this.props.setTags(this.props.propsId);
                this.setState({ reply: `Reply to ${this.props.username}` });
              })
              .catch(err => {});
          })
          .catch(err => {});
      })
      .catch(err => {});
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
          toggle={this.toggle}
        >
          Reply
        </Tooltip>
        {this.renderModal()}
      </div>
    );
  }
}
export default Reply;
