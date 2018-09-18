import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  EmailIcon
} from "react-share";
import "./App.css";
import "./css/index.css";
import { react } from "babel-types";
class App extends Component {
  render() {
    return (
      <div className="App mapBackground-styles">
        <br />
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
            <div className="share-styles">
              <EmailShareButton>
                <EmailIcon size={62} round={true} />
              </EmailShareButton>
              <RedditShareButton  children={react.node} url={"https://www.reddit.com/submit?url=http%3A%2F%2Fgithub.com&title=GitHub"}>
                <RedditIcon size={62} round={true} />
              </RedditShareButton>
              <LinkedinShareButton
                children={react.node}
                url={
                  "https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Fgithub.com"
                }
                title={"Test page"}
                description={"this is a test"}
              >
                <LinkedinIcon size={62} round={true} />
              </LinkedinShareButton>
              <TwitterShareButton children={react.node} url={"https://twitter.com/intent/tweet"} title="test twitter">
                <TwitterIcon size={62} round={true} />
              </TwitterShareButton>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default App;
