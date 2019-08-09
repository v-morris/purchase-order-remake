import React from "react";
import { Link } from "react-router-dom";


const OrdersMain = () => {
  return (
    <div>
      <h1>Select Option</h1>
      <Link to="/neworder"><button>Create New Order</button></Link>
      <Link to="/allorders"><button>View All Orders</button></Link>
      <button>Search Orders By Date</button>
      <br/>

      {/* BACK TO OPTIONS */}
      <Link to="/options">
        <button>Back</button>
      </Link>

    </div>
  );
};

export default OrdersMain;
