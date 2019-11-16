import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import { NavLink } from "reactstrap";
import PropTypes from "prop-types";

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    this.props.logout(user);
    this.props.history.push("/login");
    this.setState({
      submited: true
    });
  };
  render() {
    return (
      this.onSubmit
     );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
