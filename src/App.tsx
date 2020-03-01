import "core-js"
import "regenerator-runtime/runtime"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import "./styles/global.scss"
import NavBar from "./components/NavBar/NavBar"

const routes = [
  {
    path: "/home",
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

export default () => <Router>
  <div>
    <div
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}
    >
      <NavBar />
      <Redirect exact from="/" to="home" />
      <Switch>
        {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
                key={index}
                path={route.path}
                children={<route.sidebar />}
            />
        ))}
      </Switch>
    </div>

    <div style={{ padding: "10px" }}>
      <Switch>
        {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
                key={index}
                path={route.path}
                children={<route.main />}
            />
        ))}
      </Switch>
    </div>
  </div>
</Router>;
