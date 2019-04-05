
import axios from "axios";
export function handleSubmit ( e ) {
    e.preventDefault();
    // clear ou storage and reomove id
    // i was having issues with this.

    localStorage.clear();

    localStorage.removeItem("id");

    const user = {
      username: this.state.username,

      password: this.state.password
    };
    // make a post to our login route that returns a  token and user id
    // than we set that one local storage for persisting the data
    axios
      .post("https://dt-back-end.herokuapp.com/auth/login", user)

      .then(resp => {
        localStorage.setItem("token", `Bearer ${resp.data.token}`);

        localStorage.setItem("id", resp.data.user._id);

        // call the load pictures function and push the user to the dashboard
        this.props.loadPictures();

        this.props.history.push("/dashboard");
      })

      .catch(() => {});
  };
