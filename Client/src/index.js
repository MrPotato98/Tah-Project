/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import store from "./store";
import React, { Component } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createBrowserHistory, History } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { loadUser } from "./actions/authActions";

// core components
import Admin from "layouts/Admin.js";
import PrivateRoute from "./PrivateRoute.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";
import loginPage from "views/Login/loginPage";

const hist = createBrowserHistory();

// PrivateRoute.setupInterceptors(store,history);

class Index extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={hist}>
            <Switch>
              <Route path="/admin" component={Admin} />
              <Route exact path="/login" component={loginPage} />
              <Redirect from="/" to="/admin/dashboard" />
              {/* <PrivateRoute authed={this.state.authed} path='/admin' component={Admin} /> */}
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
