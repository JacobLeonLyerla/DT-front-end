import React from 'react';


 class DTNav extends React.Component {

  
  render() {
    return (
        <div>
        <div class='ui labeled button'>
          <button class='ui red button' tabindex='0'>
            <i aria-hidden='true' class='heart icon' /> Like
          </button>
          <div class='ui red left pointing basic label'>2,048</div>
        </div>
        <div class='ui labeled button'>
          <button class='ui blue basic button' tabindex='0'>
            <i aria-hidden='true' class='fork icon' /> Fork
          </button>
          <a class='ui blue left pointing basic label'>2,048</a>
        </div>
      </div>
    );
  }
}
export default DTNav;