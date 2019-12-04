import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  NavLink,
  Alert
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import index from "index.css";

class SignInForm extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    msg: null,
    submited: false
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentWillMount() {
    var token = localStorage.getItem("token");
    if (token) {
      this.props.history.push("/");
      window.location.reload();
    } else {
      window.location.href = "/login";
    }
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const user = {
      email,
      password
    };

    //Attempt to login
    this.props.login(user);
    this.setState({
      submited: true
    });
  };

  render() {
    return (
      <div className="FormCenter">
        <Form
          onSubmit={this.onSubmit}
          className="FormFields"
          onSubmit={this.onSubmit}
        >
          <FormGroup className="FormField">
            <Input
              className="FormField"
              type="email"
              name="email"
              id="email"
              onChange={this.onChange}
              autoComplete="off"
              required
            ></Input>
            <Label for="email" className="label-name">
              <span className="content-name">Email</span>
            </Label>
          </FormGroup>
          <FormGroup className="FormField">
            <Input
              className="FormField"
              type="password"
              name="password"
              id="password"
              onChange={this.onChange}
              autoComplete="off"
              required
            ></Input>
            <Label for="password" className="label-name">
              <span className="content-name">Password</span>
            </Label>
          </FormGroup>

          {this.state.msg ? (
            <Alert color="danger">{this.state.msg}</Alert>
          ) : null}

          <Button className="FormField__Button mr-20">Login</Button>
          <Link to="/" className="FormField__Link">
            Create an account
          </Link>
        </Form>
      </div>
    );
  }
}
const mapSateToProps = state => ({
  isAuthenticated: state.auth,
  error: state.error
  // ...state
});

export default connect(
  mapSateToProps,
  { login, clearErrors }
)(SignInForm);
