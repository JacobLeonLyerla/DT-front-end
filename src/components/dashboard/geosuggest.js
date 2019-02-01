/*global google*/
import React, { Component } from "react";

import Geosuggest from "react-geosuggest";

class Geo extends Component {


  render() {
    return (
      // this is closer to the default geosuggest pretty much

      // I just added in my own lat and lng and wided the radius

      // I thought about asking to put in thier own location

      // but I decided against it for now
      <Geosuggest

        ref={el => (this._geoSuggest = el)}

        placeholder={this.props.placeholder}

        onSuggestSelect={e => this.onSuggestSelect(e, this.props)}

        location={new google.maps.LatLng(34.009055, -118.497106)}

        radius="900000000000000"
      />
    );
  }

  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   * 
   */
  onSuggestSelect(suggest) {

    this._geoSuggest.clear();

    this._geoSuggest.focus();

    if (this.props.name === "location") {

      if (suggest !== undefined) {

        this.props.setLocation(suggest.location, suggest.label, "location");
        
      }
    }
  }
}
export default Geo;
