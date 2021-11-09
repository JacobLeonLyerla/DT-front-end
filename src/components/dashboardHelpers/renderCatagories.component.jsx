import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import { DropdownMenu,DropdownToggle,UncontrolledDropdown,DropdownItem } from "reactstrap";
const RenderCatagories = () => {
  const { pictures,btn } = useContext(AppContext);
     return (<>{pictures.length > 0? (
        
      <UncontrolledDropdown direction="right">
        <DropdownToggle className={btn} color="primary" caret>
           Tags  
        </DropdownToggle>
        <DropdownMenu>
          {pictures.map((category) => (
            <Link
              to={`/dashboard/${category.name}`}
              style={{ textDecoration: "none" }}
            >
              <DropdownItem>{category.name.replace(/-/g, " ")}</DropdownItem>
            </Link>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>)
        :<div>waiting</div>}</>
  )
};

export default RenderCatagories;
