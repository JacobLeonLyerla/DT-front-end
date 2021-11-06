import React, { useContext,useEffect } from "react";
import AppContext from "../../context";

import Map from "./map";

const Maps =({currentPicture})=> {
 const {currentTag} = useContext(AppContext)
console.log(currentTag)

    return (
      <>
          {currentPicture ? <> <Map zoom={4} picture={{picture:{"lat":8.774985,"lng":34.507238}}} name={"africa"} />
 <Map
              zoom={9}
              tag={currentPicture.tag}
              name={currentPicture.name}
              markers={currentPicture.markers}
            /></>:null }       {/* picture is only passed in inside of of tagsview and pass in the props

         so since tag view is for a whole wide region the zoom is less

         and since the view from the trek component is from the users post

         this will render a closer zoom of 9.

         also since the tag view has no markers those are not passing in */}
        {/* {1 ? (
          <Fragment>
            <Map zoom={4} picture={{picture:{"lat":8.774985,"lng":34.507238}}} name={"africa"} />
          </Fragment>
        ) : (
          <Fragment>
            <Map
              zoom={9}
              tag={currentTag.tag}
              name={currentTag.name}
              markers={currentTag.markers}
            />
          </Fragment>
        )} */}
      </>
    );
  
}
export default Maps;
