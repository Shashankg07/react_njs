import React from "react";
import { LOGO_URL } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "Dummy",
        id: "Default",
        avatar_url: ":)"
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Shashankg07");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    

    // console.log("component did mount");
  }

  render() {
    // console.log("render")
    const { login, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {login}</h2>
        <h3>Location: {id}</h3>
        <h4>Contact: @shashankg07</h4>
      </div>
    );
  }
}

export default UserClass;
