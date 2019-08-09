import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { PrivateRoute } from "./Authentication";

// COMPONENTS
import Login from "./components/Users/Login";

import OptionsMain from "./components/OptionsMain";
import UsersMain from "./components/Users/UsersMain";
import ItemsMain from "./components/Items/ItemsMain";
import OrdersMain from "./components/Orders/OrdersMain";

import CreateOrder from "./components/Orders/CreateOrder";
import ViewAllOrders from "./components/Orders/ViewAllOrders";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/options" component={OptionsMain} />
        <Route path="/users" component={UsersMain} />
        <Route path="/items" component={ItemsMain} />
        <Route path="/orders" component={OrdersMain} />
        <Route path="/neworder" component={CreateOrder} />
        <Route path="/allorders" component={ViewAllOrders} />
      </div>
    </Router>
  );
}

export default App;
