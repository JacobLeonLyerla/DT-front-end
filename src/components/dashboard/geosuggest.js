/*global google*/
import React,{Component} from 'react';
import Geosuggest from 'react-geosuggest';

class Geo extends Component {
    constructor(props){
        super(props)
    }

  render() {

    return (
    
        <Geosuggest
          ref={el=>this._geoSuggest=el}
          placeholder="Start typing!"
          onSuggestSelect={e=> this.onSuggestSelect(e,this.props)}
          location={new google.maps.LatLng(34.009055,-118.497106)}
          radius="20" />


     

    )
  }

  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */
  onSuggestSelect(suggest,props) {
    this._geoSuggest.clear()
    this._geoSuggest.focus()
    if(this.props.name === "location"){
  if(suggest !== undefined){
      this.props.setLocation(suggest.location,suggest.label,"location");
  }}}
};
export default Geo
