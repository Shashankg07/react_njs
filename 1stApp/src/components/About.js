import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="p-4 justify-between">
      <div>
        <h1>About</h1>
        <h2>This is Namaste React</h2>
        <User name={"Shashank Gorana (function)"} />
      </div>
      <div className="p-4">
        <UserClass name={"Shashank Gorana (class)"} />
      </div>
    </div>
  );
};

export default About;
