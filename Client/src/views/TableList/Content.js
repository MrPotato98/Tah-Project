import React, { Component } from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import { getTables } from "../../actions/authActions";
import styless from "assets/jss/material-dashboard-react/components/tableStyle.js";
import { connect } from "react-redux";
// import Api from './../../API/api'
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
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentWillMount() {
    // const classes = useStyles();
    // const classess = useStyless();
    // this.getTables();
    console.log(this.props.auth.token);
    getBigtable(this.props.auth.token, (err, dt) => {
      if (err) {
      } else {
        this.setState({ data: dt.data.result.item });
        // console.log(dt.data.result.item);
      }
    });
  }
  getData = () => {};
  render() {
    // console.log(this.state.data);
    return (
      <TableBody>
        {this.state.data ? this.state.data.map(item => {
          return(
            <TableRow>
          <TableCell>{item.title}</TableCell>
          <TableCell>{item.maxPoint}</TableCell>
          <TableCell>
            <input></input>
          </TableCell>
          <TableCell>
            <input></input>
          </TableCell>
        </TableRow>
          )
        }) : null}
        
        
      </TableBody>
    );
  }
}

const mapSateToProps = state => ({
  ...state
});
export default connect(
  mapSateToProps,
  {}
)(Content);
