import store from "./store";
import React, { Component } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {
  Router,
  Route,
  Switch,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import { loadUser } from "./actions/authActions";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";
import loginPage from "views/Login/loginPage";

const hist = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      localStorage.getItem('token')
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)

class Index extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Router history={hist}>
            <Switch>
              <PrivateRoute path="/admin" component={Admin} />
              <Route exact path="/login" component={loginPage} />
              <Redirect from="/" to="/admin/dashboard" />
              {/* <PrivateRoute authed={this.state.authed} path='/admin' component={Admin} /> */}
            </Switch>
          </Router>
        </Provider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
