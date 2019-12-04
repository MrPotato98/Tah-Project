import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  GET_ERRORS,
  CLEAR_ERRORS,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADING,
  USER_LOADED
} from "./types";

//check token & load user
export const loadUser = () => (dispath, getState) => {
  //User loading
  dispath({ type: USER_LOADING });

  axios
    .get("/user/info/", tokenConfig(getState))
    .then(res =>
      dispath({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispath(returnErrors(err.response.data, err.response.status));
      dispath({ type: AUTH_ERROR });
    });
};

// Register User
export const register = ({ name, email, password }) => dispath => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
  };

  // Request body
  const body = JSON.stringify({ name, email, password });
  axios
    .post("/api/users", body, config)
    .then(res =>
      dispath({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispath(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispath({
        type: REGISTER_FAIL
      });
    });
};

//Login User
export const login = ({ email, password }) => dispath => {
  // Headers
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  };

  // Request body
  const body = { email, password };
  axios
    .post("/user/login", body)
    .then(res => {
      if (res.status == 200) {
        dispath({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
      }
    })
    .catch(err => {
      dispath(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispath({
        type: LOGIN_FAIL
      });
    });
};

//Logout user
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

//Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().token;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
  };

  //if token, add to headers
  if (token) {
    config.headers["token"] = token;
  }
  return config;
};