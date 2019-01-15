import React,{Component,Fragment} from 'react';
import { Player } from 'video-react';
class About extends Component {
  render(){
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );}
};
export default About