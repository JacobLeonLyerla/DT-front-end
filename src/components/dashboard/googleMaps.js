import React, { Component, Fragment } from "react";

import Map from "./map";

class Maps extends Component {
  render() {
    return (

      <Fragment>
         {/* picture is only passed in inside of of tagsview and pass in the props

         so since tag view is for a whole wide region the zoom is less

         and since the view from the trek component is from the users post

         this will render a closer zoom of 9.

         also since the tag view has no markers those are not passing in */}
        {this.props.picture ? (

          <Fragment>

            <Map zoom={4} picture={this.props.picture} name={this.props.name} />

          </Fragment>

        ) : (

          <Fragment>

            <Map
              zoom={9}
              
              tag={this.props.tag}

              name={this.props.name}

              markers={this.props.markers}
            />

          </Fragment>

        )}

      </Fragment>
      
    );
  }
}
export default Maps;
