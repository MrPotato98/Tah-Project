import React, { Component } from "react";

import Fab from "@material-ui/core/Fab";
import Eye from "@material-ui/icons/RemoveRedEye";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";

import { bugs, website, server } from "variables/general.js";
import { connect } from "react-redux";
import { TableHead } from "@material-ui/core";

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

class History extends Component {
  table = () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell>Quý</TableCell>
            <TableCell>Năm</TableCell>
            <TableCell>Cá nhân</TableCell>
            <TableCell>Đồng nghiệp</TableCell>
            <TableCell>Giám đốc</TableCell>
            <TableCell>Tình Trạng</TableCell>
            <TableCell>Tác vụ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2018-2019</TableCell>
            <TableCell>98</TableCell>
            <TableCell>80</TableCell>
            <TableCell>85</TableCell>
            <TableCell>
              <Typography
                variant="body"
                style={{
                  backgroundColor: "#339933",
                  borderRadius: 25,
                  paddingLeft: 7,
                  paddingRight: 7,
                  paddingTop: 3,
                  paddingBottom: 3
                }}
              >
                Hoàn thành
              </Typography>
            </TableCell>
            <TableCell>
              <Tooltip
                id="tooltip-top-start"
                title="Watch"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  aria-label="Close"
                  className={classes.tableActionButton}
                >
                  <Eye color={"default"} />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>2</TableCell>
            <TableCell>2019-2020</TableCell>
            <TableCell>78</TableCell>
            <TableCell>88</TableCell>
            <TableCell>95</TableCell>
            <TableCell>
              <Typography
                variant="body"
                style={{
                  backgroundColor: "#339933",
                  borderRadius: 25,
                  paddingLeft: 7,
                  paddingRight: 7,
                  paddingTop: 3,
                  paddingBottom: 3
                }}
              >
                Hoàn thành
              </Typography>
            </TableCell>
            <TableCell>
              <Tooltip
                id="tooltip-top-start"
                title="Watch"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  aria-label="Close"
                  className={classes.tableActionButton}
                >
                  <Eye color={"default"} />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  };

  //---------------------TableStafff------------------

  tableStaff = () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell>Tên nhân viên</TableCell>
            <TableCell>SĐT</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Địa chỉ</TableCell>
            <TableCell>Nơi công tác</TableCell>
            <TableCell>Xem Bảng điểm chi tiết</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Nguyễn Văn A</TableCell>
            <TableCell>0983556687</TableCell>
            <TableCell>Nam</TableCell>
            <TableCell>123 Nguyễn văn đậu, Q.Gò Vấp, TP.HCM</TableCell>
            <TableCell>LandMark81</TableCell>
            <TableCell>
              <Tooltip
                id="tooltip-top-start"
                title="Watch"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  aria-label="Close"
                  className={classes.tableActionButton}
                >
                  <Eye color={"default"} />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Nguyễn Văn B</TableCell>
            <TableCell>0983556687</TableCell>
            <TableCell>Nam</TableCell>
            <TableCell>123 Nguyễn văn đậu, Q.Gò Vấp, TP.HCM</TableCell>
            <TableCell>LandMark81</TableCell>
            <TableCell>
              <Tooltip
                id="tooltip-top-start"
                title="Watch"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  aria-label="Close"
                  className={classes.tableActionButton}
                >
                  <Eye color={"default"} />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  };
  componentWillMount() {
    console.log(this.props.auth);
  }
  render() {
    return (
      <div>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Bảng điểm cá nhân</h4>
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
                  <GridItem xs={12} sm={12} md={12}>
                    <Card>{this.table()}</Card>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Bảng điểm nhân viên</h4>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={10} lg={12}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <Card>
                      {this.tableStaff()}
                      {this.tableStaff()}
                    </Card>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
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
)(History);
