import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import styless from "assets/jss/material-dashboard-react/components/tableStyle.js";
import { connect } from "react-redux";
import Button from "components/CustomButtons/Button.js";
import Axios from "axios";

import FormControl from "@material-ui/core/FormControl";

import TextField from "@material-ui/core/TextField";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

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

    this.state = {
      data: [],
      point: 0,
      type: "",
      note: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    let { type, point, note } = this.state;
    Axios.post(
      "/itemtable/update-item",
      {
        type: type,
        point: point,
        note: note
      },
      (err, res) => {
        console.log(err);
      }
    );
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillMount() {
    // const classes = useStyles();
    // const classess = useStyless();
    // this.getTables();
    getBigtable(this.props.auth.token, (err, dt) => {
      if (err) {
      } else {
        this.setState({ data: dt.data.result.item });
      }
    });
  }
  getData = () => {};
  render() {
    // console.log(this.state.data);
    return (
      // <GridContainer></GridContainer>
      <TableBody>
        {this.state.data
          ? this.state.data.map(item => {
              return (
                <TableRow>
                  <TableCell>{item.title}</TableCell>
                  {/* <TableCell >{item.}</TableCell> */}
                  <TableCell>{item.maxPoint}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      name="point"
                      id="point"
                      onChange={this.onChange}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="text"
                      name="note"
                      id="note"
                      onChange={this.onChange}
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              );
            })
          : null}
        <GridContainer justify={"flex-start"}>
        
          <GridItem xs={12} sm={12} md={12}>
            <FormControl style={{ display: "flex", flexWrap: "wrap" }}>
              {/* <InputLabel style={{ color: "#AAAAAA" }}>Comment</InputLabel> */}
              <TextField
                id="type"
                name="type"
                onChange={this.onChange}
                label="Nhận xét"
                fullWidth={true}
                style={{ margin: 8 }}
                margin="normal"
              />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <Button color="primary" onClick={this.onSubmit}>
              Done
            </Button>
          </GridItem>
        </GridContainer>
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
