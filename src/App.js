import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Success from "./components/Success";
import PaymentConfirmation from "./components/PaymentConfirmation";

function App() {
  return (
    <div>
      <section>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={Cart} />
          <Route path="/success" component={Success} />
          <Route path="/paymentconfirmation" component={PaymentConfirmation} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
