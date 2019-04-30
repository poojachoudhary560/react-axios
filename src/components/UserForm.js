import React from "react";
import "./UserForm.css";
const UserForm = props => {
  return (
    <form onSubmit={props.getUser}>
      <label for="username" className="UserForm-label">
        Enter any GitHub username to view user details e.g. john
      </label>
      <input
        className="UserForm-input form-control"
        type="text"
        name="username"
        required
      />
      <button className="btn btn-primary">Submit</button>
      <br />
    </form>
  );
};
export default UserForm;
