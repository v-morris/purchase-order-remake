import React from "react";
import { fakeAuth } from "../Authentication";
import { Link } from "react-router-dom";

class OptionsMain extends React.Component {
  goToUsers = () => {};

  render() {
    return (
      <div>
        <h1>Select Option</h1>
        <Link to={`/users`}>
          <button>Users</button>
        </Link>
        <Link to={`/items`}>
          <button>Items</button>
        </Link>
        <Link to={`/orders`}>
          <button>Order</button>
        </Link>
        <button
          onClick={() => {
            fakeAuth.signout(() => this.props.history.push("/"));
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default OptionsMain;
