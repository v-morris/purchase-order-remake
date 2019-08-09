import React from 'react';

const DisplayOrderItems = () => {

  return(
    <div>
      <h1>Order List</h1>
      <table>
        <tr>
          <th>Item</th>
          <th>Amount Ordered</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>Item 1</td>
          <td>22</td>
          <td><button>Edit Amount</button></td>
          <td><button>Delete From Order</button></td>
        </tr>
      </table>

      <button>Submit Order</button>
      <button>Back to Menu</button>

    </div>
  )
}

export default DisplayOrderItems;