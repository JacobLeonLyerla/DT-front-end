import React, { Fragment} from "react";
import Header from "./header"
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
      <div className="sell"><div className="shroud"></div></div>
   </Fragment> );
  
}

export default Landing;
