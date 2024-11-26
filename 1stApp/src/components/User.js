import { useState } from "react";

const User = ({name}) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Udaipur</h3>
      <h4>Contact: @shashankg07</h4>
    </div>
  );
};

export default User;
