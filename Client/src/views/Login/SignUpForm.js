import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
class SignUpForm extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  // componentWillMount() {
  //   var token = localStorage.getItem("token");
  //   if (token) {
  //     // this.props.history.push("/");
  //   } else {
  //   }
  //   console.log(token);
  // }
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    //if authenticated close
    if (this.state.modal) {
      if (isAuthenticated) {
        var token = localStorage.getItem("token");
        if (token) {
          // this.props.history.push("/");
        } else {
          // console.log(token);
        }
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, password } = this.state;

    //create user object
    const newUser = {
      name,
      email,
      password
    };
    //Attempt to register
    this.props.register(newUser);
  };
  render() {
    return (
      <div className="FormCenter">
        <Form onSubmit={this.onSubmit} className="FormFields">
          {this.state.msg ? (
            <Alert color="danger">{this.state.msg}</Alert>
          ) : null}
          <FormGroup className="FormField">
            <Input
              className="FormField"
              type="text"
              name="name"
              id="name"
              onChange={this.onChange}
              autoComplete="off"
              required
            ></Input>
            <Label for="name" className="label-name">
              <span className="content-name">Name</span>
            </Label>
          </FormGroup>
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
              <span className="content-name"> Password</span>
            </Label>
          </FormGroup>
          <Button className="FormField__Button mr-20">Register</Button>
        </Form>
      </div>
    );
  }
}

const mapSateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapSateToProps,
  { register, clearErrors }
)(SignUpForm);
