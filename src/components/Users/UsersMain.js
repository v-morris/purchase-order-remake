import React from "react";
import { Link } from "react-router-dom";

import CreateUser from "./CreateUser";

class UsersMain extends React.Component {
  constructor(props) {
    super(props);

    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();

    this.state = {
      newUser: {},
      users: [],
      role: "1",
      showCreateUsers: false,
      errors: []
    };
  }

  // HIDE/SHOW FUNCTION FOR CREATEUSER COMPONENT
  toggleCreateUser = () => {
    let showCreateUsers = this.state.showCreateUsers;
    showCreateUsers
      ? this.setState({ showCreateUsers: false })
      : this.setState({ showCreateUsers: true });
  };

  // SUBMIT CREATEUSER INFORMATION
  handleSubmit = e => {
    e.preventDefault();
    const firstName = this.firstName.current.value,
      lastName = this.lastName.current.value,
      username = this.username.current.value,
      password = this.password.current.value,
      role = this.state.role,
      errors = this.handleValidation(firstName, lastName, username, password);

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    // CREATE COPY OF STATE, SET STATE TO CURRENT REF VALUES
    let newUser = JSON.parse(JSON.stringify(this.state.newUser));
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.username = username;
    newUser.password = password;
    newUser.role = role;
    this.setState({
      newUser: newUser
    });

    // console.log(this.state.newUser);
    console.log(newUser);
  };

  // VALIDATE CREATEUSER SUBMISSION
  handleValidation = (firstName, lastName, username, password) => {
    const errors = [];

    if (firstName.length === 0) {
      errors.push("First Name cannot be empty");
    }
    if (lastName.length === 0) {
      errors.push("Last Name cannot be empty");
    }
    if (username.length === 0) {
      errors.push("Username cannot be empty");
    }
    if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }

    return errors;
  };

  // HANDLE ROLE CHANGE FOR RADIO BUTTONS ON CREATEUSER COMPONENT
  handleRoleChange = e => {
    this.setState({ role: e.target.value });
  };

  render() {
    return (
      <div>
        {/* TOGGLE CREATE USER BUTTON */}
        {this.state.showCreateUsers ? (
          <button onClick={this.toggleCreateUser}>Hide Create User</button>
        ) : (
          <button onClick={this.toggleCreateUser}>Create User</button>
        )}

        {/* TOGGLE RENDER CREATEUSER COMPONENT */}
        {this.state.showCreateUsers ? (
          <CreateUser
            {...this.props}
            handleSubmit={this.handleSubmit}
            handleValidation={this.handleValidation}
            handleRoleChange={this.handleRoleChange}
            firstName={this.firstName}
            lastName={this.lastName}
            username={this.username}
            password={this.password}
            errors={this.state.errors}
          />
        ) : null}

        {/* ALL USERS TABLE */}
        <h1>All Users</h1>
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123456</td>
              <td>John</td>
              <td>Doe</td>
              <td>jdoe123</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* BACK TO OPTIONS */}
        <Link to="/options">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

export default UsersMain;
