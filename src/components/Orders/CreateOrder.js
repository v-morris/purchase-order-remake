import React from "react";
import { Link } from "react-router-dom";

class CreateOrder extends React.Component {
  render() {
    return (
      <div>
        <h1>Create Order</h1>
        <select>
          <option value="item1">Item 1</option>
          <option value="item2">Item 2</option>
          <option value="item3">Item 3</option>
        </select>
        <input type="number" id="orderAmount" placeholder="Amount to Order" />
        <button>Add to Order</button>

        <br />
        <button>Submit Order</button>
        <br/>
        {/* BACK TO OPTIONS */}
        <Link to="/options">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

export default CreateOrder;
