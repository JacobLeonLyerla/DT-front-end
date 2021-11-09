import React, { useContext } from "react";
import "../../css/index.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import { withRouter } from "react-router";

const LandingNav = ({history})=> {
  const{loadUser,gotoDashboard} =useContext(AppContext)
 const isSignedIn=()=>{
  if (localStorage.getItem("id") !== null &&localStorage.getItem("token") !== null) {
    loadUser()
    if(gotoDashboard){
      setGotoDashboard(!gotoDashboard);
      history.push("/dashboard")
    }
   }
}
    return (
      <div className="landing-Nav">
        <Nav>
          <NavItem>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/signup"
            >
              <NavLink className="signup">Sign Up</NavLink>
            </Link>
          </NavItem>

          <NavItem>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/signin"
            >
              <NavLink onClick={()=>isSignedIn()}>Sign In</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </div>
    );
  
}
export default withRouter(LandingNav);
