import React,{useEffect} from "react";
import { Row } from "reactstrap";
import "./App.css";
import "./css/index.css";
import { Route } from "react-router-dom";
import Landing from "./components/preLogin/landing";
import SignUp from "./components/signUp/signUp.component";
import Signin from "./components/signIn/signIn.component";
import DashBoardContainer from "./components/containers/dashboardContainer.component";
import Tags from "./components/dashboard/tags";
import CreatePost from "./components/post/createPost.component";
import ViewPost from "./components/post/viewPost.component";
import TagViewContainer from "./components/containers/tagViewContainer.component";
import CommentContainer from "./components/containers/commentContainer";

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,places"`
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, [])
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" render={() => <Signin />} />
      <Row>
        <Route path="/dashboard" component={DashBoardContainer} />
        <Route exact path="/dashboard" component={Tags} />
        <Route exact path="/dashboard/:id" component={TagViewContainer} />
        <Route exact path="/dashboard/:id/post" component={ViewPost} />
        <Route exact path="/dashboard/trek/:id" component={CommentContainer} />
        <Route exact path="/dashboard/create/:id" component={CreatePost} />
      </Row>
    </div>
  );
};
export default App;
