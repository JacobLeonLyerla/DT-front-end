import React,{Component,Fragment} from 'react';
import YouTube from 'react-youtube';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
 

class About extends Component {
  
  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (<div className="modal-container">
      <YouTube
        videoId="HNFvgneBabE"
        opts={opts}
        onReady={this._onReady}
      />
      <div className="modal-buttons">
        <Button>Intro</Button><Button>Viewing</Button><Button>Creating</Button>
      </div>
   </div> );
  }
 

}
export default About
 
