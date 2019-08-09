import React from "react";
import {
  Redirect,
} from "react-router-dom";
import { fakeAuth } from "../../Authentication";

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to="/options" />;
    }

    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </form>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;
