import * as React from "react";
import { Link, NavLink } from "react-router-dom"
import "./NavBar.scss";

export default () =>
  <ul style={{ listStyleType: "none", padding: 0 }}>
    <li>
      <NavLink activeClassName="active" exact to="/home">Home</NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/bubblegum">Bubblegum</NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/shoelaces">Shoelaces</NavLink>
    </li>
  </ul>
