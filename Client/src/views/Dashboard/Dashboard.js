import React, { Component } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Update from "@material-ui/icons/Update";
import DoneAll from "@material-ui/icons/DoneAll";
import Playadd from "@material-ui/icons/PlaylistAdd";
import Playaddcheck from "@material-ui/icons/PlaylistAddCheck";
import Attachfiles from "@material-ui/icons/AttachFile";

import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";
import { connect } from "react-redux";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";
import AddModal from "./AddModal";
import AddNoti from "./AddNoti";
// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// import { style } from "@material-ui/system";

// const useStyles = makeStyles(styles);
const classes = {
  cardCategory: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(0,0,0,0.87)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "rgba(0,0,0,0.87)"
    }
  },
  cardTitle: {
    color: "rgba(0, 0, 0, 0.87)",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "rgba(0,0,0.87)",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class Dashboard extends Component {
  componentWillMount() {
    console.log(this.props.auth);
  }
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} lg={4} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <h3 style={{ color: "rgba(0,0,0,0.87)", fontWeight: "bold" }}>
                  Số nhân viên{" "}
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Đã cập nhật!
                </div>
                <p style={{ color: "rgba(0,0,0,0.87)", alignItems: "center" }}>
                  {" "}
                  3
                </p>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <DoneAll />
                </CardIcon>
                <h3 style={{ color: "rgba(0,0,0,0.87)", fontWeight: "bold" }}>
                  Nhân viên đã hoàn thành tasks{" "}
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Đã cập nhật!
                </div>
                <p style={{ color: "rgba(0,0,0,0.87)", alignItems: "center" }}>
                  {" "}
                  2
                </p>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <AccessTime />
                </CardIcon>
                <h3 style={{ color: "rgba(0,0,0,0.87)", fontWeight: "bold" }}>
                  Nhân viên chưa hoàn thành tasks{" "}
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Đã cập nhật!
                </div>
                <p style={{ color: "rgba(0,0,0,0.87)", alignItems: "center" }}>
                  {" "}
                  1
                </p>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <AddNoti />
            {/* <Fab color="secondary" aria-label="add" position="center-bottom" slot="fixed">
              <AddIcon />
           </Fab> */}
            <p>Add Notification</p>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Fab
              color="secondary"
              aria-label="add"
              position="center-bottom"
              slot="fixed"
            >
              <AddModal />
            </Fab>
            <p>Tạo bảng đánh giá</p>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Việc đã giao",
                  tabIcon: Playadd,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: "Việc đã làm",
                  tabIcon: Playaddcheck,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridContainer justify="flex-end">
            {/* <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card> */}
          </GridContainer>
        </GridContainer>
      </div>
    );
  }
}
const mapSateToProps = state => ({
  ...state
});
export default connect(
  mapSateToProps,
  {}
)(Dashboard);
