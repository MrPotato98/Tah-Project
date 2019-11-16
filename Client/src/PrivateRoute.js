import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {tokenConfig} from './actions/authActions';
import {logout} from "./actions/authActions";
import axios from "axios";

const mapStateToProps = state => ({
    auth: state.auth
  });

const PrivateRoute = {
    // we pass the redux store and history in order to dispatch the logout actions 
    // and push the user to login
    
      setupInterceptors: (store, history) => {
        axios.interceptors.response.use((response) => {
        // simply return the response if there is no error
        
          return response;
        }, (error) => {
        // in this case we only care about unauthorized errors
        
          if (error.response.status === 401) {
            // we dispatch our logout action (more than likely changes a boolean 
            // somewhere in your store ex. isAuthenticated: false)
            
            store.dispatch(logout());
            
            // this could just as easily be localStorage.removeItem('your-token')
            // but it's best to encapsulate this logic so it can be used elsewhere
            // by just importing it.
            
            tokenConfig.removeToken();
            
            // send the user to the login page since the user/token is not valid
            
            history.push('/login');
          }
          return Promise.reject(error);
        });
      }
    };
    export default PrivateRoute;

// const PrivateRoute = ({ component: Component, authed, ...rest }) => (
//     <Route
//       {...rest}
//       render={props => (
//         authed
//           ? <Component {...props} />
//           : <Redirect to="/login" />
//       )}
//     />
//   );
  
//   export default PrivateRoute;