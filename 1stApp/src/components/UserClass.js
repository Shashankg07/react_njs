import React from "react";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "Dummy",
        id: "Default",
        avatar_url: ":)",
      },
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
      <div className="flex">
        <div className="w-2/12">
          <img src={avatar_url} />
        </div>
        <div className="w-10/12 px-4">
          <div>
            LoggedIn User
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <h1 className="text-xl font-bold">{loggedInUser}</h1>
              )}
            </UserContext.Consumer>
          </div>
          <h2>Name: {login}</h2>
          <h3>Location: {id}</h3>
          <h4>Contact: @shashankg07</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
