import React,{Component,Fragment} from 'react';

 class Replies extends Component {

       
  render() {
    return (<Fragment>
        {this.props.replies.map(reply =>(<Fragment>
        <div></div>
            <div className="reply">{reply}</div>

        </Fragment>))}


    </Fragment>
     
    );
  }
}
export default Replies;