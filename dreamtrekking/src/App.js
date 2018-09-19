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
                <EmailIcon  round={true} />
              </EmailShareButton>
              <RedditShareButton windowWidth={"900"}   children={react.node} url={"https://www.reddit.com/submit?url=http%3A%2F%2Fgithub.com&title=GitHub"}>
                <RedditIcon  round={true} />
              </RedditShareButton>
              <LinkedinShareButton
                children={react.node}
                url={
                  "https://www.linkedin.com/shareArticle?mini=true&url=http://developer.linkedin.com&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn"
                }
                title={"https://dungeon-run.netlify.com/"}
                description={"sweet ass game"}
              >
                <LinkedinIcon  round={true} />
              </LinkedinShareButton>
              <TwitterShareButton children={react.node} url={"https://dungeon-run.netlify.com"}>
                <TwitterIcon  round={true} />
              </TwitterShareButton>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default App;
