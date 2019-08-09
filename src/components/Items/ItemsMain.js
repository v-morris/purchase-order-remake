import React from "react";
import { Link } from "react-router-dom";

class ItemsMain extends React.Component {
  render() {
    return (
      <div>
        <h1>All Items</h1>
        <table>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th />
            <th />
          </tr>
          <tr>
            <td>123</td>
            <td>Coke 1L</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </table>
        {/* BACK TO OPTIONS */}
        <Link to="/options">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

export default ItemsMain;
