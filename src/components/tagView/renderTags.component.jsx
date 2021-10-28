
import React, { useContext } from "react";

import AppContext from "../../context";
const RenderTags = () =>  {
    const {example} = useContext(AppContext);
    const {tag} = example[0]
      return (
        <div className="td tag">
          {tag.map(tag => (
            <div className="tags">
              {`${tag.replace(/-/g, " ")}`}
              <br />
            </div>
          ))}
        </div>
      );
    
  };

export default RenderTags
