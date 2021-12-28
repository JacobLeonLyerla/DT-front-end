import React, { useContext, useEffect } from "react";
import AppContext from "../../context";
import RenderCatagories from "../dashboardHelpers/renderCatagories.component";
import { Col, Navbar, NavbarBrand, Media, Badge } from "reactstrap";
import logo from "../../assets/logo.png";
import logoSml from "../../assets/logoinit.png";
import { Link } from "react-router-dom";

const DashBoardContainer = () => {
  const { pictures,loadUser, getPictures, dashboardVar, notifications, user,setNotifications,setGotoDashboard,gotoDashboard } =
    useContext(AppContext);
  useEffect(() => {
    if (!user) {
      loadUser();
    }
    if (!pictures) {
      getPictures();
    }

    
  }, []);
  const setUpNotifications =()=>{
   if(notifications===0) 
  {  
   let count =0
  if(!Array.isArray(user)){
  
user.post.forEach(post => {
   count += post.unreadLike + post.unreadComment
  
});
  }
  setNotifications(count)}
  }
  return (
    // our route is wrapped in a row so this col will assign it a size in the row
    // it takes the variable form app.js and uses it to control sizing.
    <Col md={`${1 + dashboardVar}`}>
      <div className="dashboard">
        <Navbar>
          {/* the logo here will be based on whatever is on state in app.js so what is being passed in
              so when we change the logo it changes what renders here  */}
          <NavbarBrand href="/dashboard">
            <Link to="/dashboard">
              {dashboardVar ? <Media src={logo} /> : <Media src={logoSml} />}
            </Link>
          </NavbarBrand>
  {setUpNotifications()}
          {/* this just renders whatever user is signed in pulling it off of props */}
          <Link
            style={{ textDecoration: "none" }}
            className={`${dashboardVar ? "nav-links" : ""}`}
            to="/"
            onClick={() => {localStorage.clear(); setGotoDashboard(!gotoDashboard)}}
          >
            <div>{user.username} (Sign-Out)</div>
          </Link>
          {/* the class name is set by props so it changes based on what is passed in
  
              allowing resizing, this all may be a bit brute force.
  
              when the user clicks post it will link them to thier post */}
          <Link
            className={`${dashboardVar ? "nav-links" : ""}`}
            to={`/dashboard/${user.username}/post`}
            style={{ textDecoration: "none" }}
          >
            {/* this ternary checks if our user is defined and if they are
               we render we can check more info */}

            {user !== undefined ? (
              <>
                {/* we then check that the user has more than zero notifications
                    if they do we render a badge next to post showing the number */}
                {notifications > 0 ? (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                   Post 
                    <div style={{ color: "coral", marginLeft: ".4vw" }}>
                      <Badge color style={{ background: "orange" }}>
                        {notifications}
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <>post</>
                )}
              </>
            ) : (
              <>Post</>
            )}
          </Link>

          <RenderCatagories />

          {/* <div onClick={() => this.props.columnSizer()}>
                <i class={this.props.collapseIcon} />
              </div> */}
        </Navbar>
      </div>
    </Col>
  );
};

export default DashBoardContainer;
