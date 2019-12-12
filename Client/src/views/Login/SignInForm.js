import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, loadUser } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// import { Router, Route, Switch, Redirect } from "react-router-dom";

import "./../../index.css";

class SignInForm extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    msg: null,
    submited: false,
    checkedA: true
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

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

    if (isAuthenticated) {
      window.location.href = "/admin";
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
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    return (
      <div className="FormCenter">
        <Form onSubmit={this.onSubmit} className="FormFields">
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
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkedA}
                  onChange={this.handleChange("checkedA")}
                  value="checkedA"
                  inputProps={{
                    "aria-label": "primary checkbox"
                  }}
                  color={"secondary"}
                  style={styles.icon}
                />
              }
              label="Remember me"
            />

            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
          </FormGroup>
          <Button className="FormField__Button mr-20">Login</Button>
          <Link to="/" className="FormField__Link">
            Create an account
          </Link>
        </Form>
      </div>
    );
  }
}

const styles = {
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    margin: 25,
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  }
};

const mapSateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
  // ...state
});

export default connect(
  mapSateToProps,
  { login, clearErrors }
)(SignInForm);
