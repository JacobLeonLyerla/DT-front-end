import React, { Fragment} from "react";
import Header from "./header"
import { Segment, Image,Container } from 'semantic-ui-react'
import logo from "../assets/castle.jpg"
const Landing =()=> {

  //   componentDidMount() {
  //     window.addEventListener('scroll',()=>this.scroll() );
  //  }
  //  scroll=()=>{
  //    this.setState({scroll:true})
  //  }
    return (<Fragment>
      <div className="App mapBackground-styles">
        <br/>
        <Header/>
      </div>
      <div className="sell"><Container size='massive' className="shroud">  <Segment  size='massive'>
    <Image src={logo} size='large' floated='left' />
    <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
      est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
      ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
      ex natum rebum iisque.
    </p>

    <Image src={logo} size='big' floated='right' />
    <p>
      Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
      nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
      fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
    </p>
    <p>
      Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
      adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
      utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
      convenire mnesarchum eu per, quas minimum postulant per id.
    </p>

    <Image src={logo} size='big' floated='left' />
    <p>
      Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
      nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
      fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
    </p>
    <p>
      Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
      adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
      utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
      convenire mnesarchum eu per, quas minimum postulant per id.
    </p>
  </Segment></Container></div>
   </Fragment> );
  
}

export default Landing;
