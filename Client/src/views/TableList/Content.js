import React, { Component } from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import styless from "assets/jss/material-dashboard-react/components/tableStyle.js";
const { getBigtable } = require("./../../API/api");
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
  },
  input: {
    border: "none",
    backgroundColor: "rgba(232, 232, 232, 1)",
    // background: rgba(0, 0, 0, 0);
    overflowX: "hidden"
  }
};

const useStyles = makeStyles(styles);
const useStyless = makeStyles(styless);

class Content extends Component {
  UNSAFE_componentWillMount() {
    // const classes = useStyles();
    // const classess = useStyless();
    getBigtable("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF1YW5AZ21haWwuY29tIiwiY29uZmVzcyI6InYgcml0aSBsdmkgcnZ6dHJrIiwia2V5IjoieW91ciBuYW1lIChmdWxsKSIsImV4cCI6MTU3NTI5ODgwNzg2NiwiaWF0IjoxNTc1MjU1NjA3fQ.tY1wCVsR8ol3jpJOQ25_A9UXu35jfQ0YyatV2gqhdPo"    );
  }
  getData = () => {};
  render() {
    return (
      <TableBody>
        <TableRow>
          <TableCell>Đi làm chuyên cần, đúng giờ</TableCell>
          <TableCell>20đ</TableCell>
          <TableCell>
            <input></input>
          </TableCell>
          <TableCell>
            <input></input>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }
}

export default Content;
