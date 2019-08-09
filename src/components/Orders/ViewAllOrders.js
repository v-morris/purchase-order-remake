import React from "react";
import { Link } from "react-router-dom";

class ViewAllOrders extends React.Component {
  render() {
    return (
      <div>
        <h1>All Orders</h1>
        <table>
          <tr>
            <th>Order Date</th>
            <th>Order ID</th>
            <th />
            <th />
          </tr>
          <tr>
            <td>08/08/2019</td>
            <td>0212540</td>
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

export default ViewAllOrders;
