import React from 'react';

const RecentOrders = () =>{
  return(
    <div>
      <h1>Recent Orders</h1>
      <table>
        <tr>
          <th>Order ID</th>
          <th>Order Date</th>
          <th></th>
        </tr>
        <tr>
          <td>554125</td>
          <td>July 5, 2019</td>
          <td><button>View Order</button></td>
        </tr>
      </table>
    </div>
  );
}

export default RecentOrders;