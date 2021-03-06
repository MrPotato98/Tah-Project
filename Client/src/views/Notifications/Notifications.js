/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
import ArrowDown from "@material-ui/icons/ArrowDownward";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { Icon } from "@material-ui/core";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);

  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  const showNotification = place => {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function() {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function() {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function() {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function() {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function() {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function() {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Công việc cần làm</h4>
      </CardHeader>
      <CardBody>
        <GridContainer justify="center">
          <GridItem
            xs={12}
            sm={12}
            md={6}
            style={{ textAlign: "center" }}
          ></GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10} lg={12}>
            <GridContainer justify="center">
              {/* <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tc")}
                >
                  Top Center
                </Button>
                <Snackbar
                  place="tc"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={tc}
                  closeNotification={() => setTC(false)}
                  close
                />
              </GridItem> */}
              <GridItem xs={12} sm={12} md={12} lg={11}>
                <Card>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <a href="#">
                            {" "}
                            Sign contract for "What are conference organizers
                            afraid of?"
                          </a>
                          <Tooltip
                            id="tooltip-top-start"
                            title="Download File"
                            placement="top"
                            classes={{ tooltip: classes.tooltip }}
                          >
                            <IconButton
                              aria-label="Close"
                              className={classes.tableActionButton}
                            >
                              <ArrowDown />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <a href="#">
                            Lines From Great Russian Literature? Or E-mails From
                            My Boss?
                          </a>
                          <Tooltip
                            id="tooltip-top-start"
                            title="Download File"
                            placement="top"
                            classes={{ tooltip: classes.tooltip }}
                          >
                            <IconButton
                              aria-label="Close"
                              className={classes.tableActionButton}
                            >
                              <ArrowDown />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        {/* <GridContainer justify={"center"}>
          <GridItem xs={12} sm={12} md={10} lg={8}>
            
          </GridItem>
        </GridContainer> */}
      </CardBody>
    </Card>
  );
}
