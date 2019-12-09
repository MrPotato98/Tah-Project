import React, { Component } from "react";
// import classNames from "classnames";
// @material-ui/core components

import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { logout } from "../../actions/authActions";
import { connect } from "react-redux";
// import { isConstructorDeclaration } from "typescript";

// connect(
//   null,
//   { logout }
// )(Logout);

class AdminNavbarLinks extends Component {
    constructor(props) {
    super(props);

    this.submitLogout = this.submitLogout.bind(this)
    }

    submitLogout() {
        this.props.logout()
        window.location.href = '/login'
    }

  render() {
      return (
      <div className={styles.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-haspopup="true"
          onClick={this.submitLogout}
          className={styles.buttonLink}
        >
          <ExitToAppIcon className={styles.icons} />
          <Hidden mdUp implementation="css">
            <p className={styles.linkText}>Profile</p>
          </Hidden>
        </Button>
        {/* <Poppers
          onClick={logout}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ [styles.popperClose]: !openProfile }) +
            " " +
            styles.popperNav
          }
        >
          {" "}
          {console.log()}
        </Poppers> */}
    </div>
  );
}}
export default connect(
  null,
  { logout }
)(AdminNavbarLinks);
