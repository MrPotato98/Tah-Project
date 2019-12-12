import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { Tab, TableHead } from "@material-ui/core";

import Fab from "@material-ui/core/Fab";
// import AddIcon from "@material-ui/icons/Add";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TextField from "@material-ui/core/TextField";

//Icon
import AddIcon from "@material-ui/icons/Add";
import GridContainer from "components/Grid/GridContainer";

class AddNoti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      link: false,
      text: ""
    };

    this.toggle = this.toggle.bind(this);
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  object = {
    link: "/admin/table"
  };

  click = () => {
    return (
      <div>
        {this.state.text}
        <a href={this.object.link}>Click me</a>
      </div>
    );
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentWillMount() {
    console.log(this.props.auth);
  }

  table = () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title(tên nội dung)</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TextField
              id="text"
              name="text"
              onChange={this.onChange}
              label="Title"
              margin="normal"
              fullWidth
            />
          </TableRow>
          <GridContainer justify="center">
            <TableRow>
              Nếu muốn mọi người đánh giá thì hãy click vào đây nhé!
              <Tooltip
                id="tooltip-top-start"
                title="Add new item"
                placement="top"
              >
                <IconButton aria-label="Add">
                  <AddIcon
                    color={"default"}
                    onClick={() => {
                      this.setState({
                        text: this.state.text,
                        link: !this.state.link
                      });
                    }}
                  />
                </IconButton>
              </Tooltip>
              {/* ----------------testing title text---------------- */}
              {this.state.link ? this.click() : null}
            </TableRow>
          </GridContainer>
        </TableBody>
      </Table>
    );
  };

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
        />
        {/* <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button> */}
        <Fab
          color="secondary"
          aria-label="add"
          position="center-bottom"
          slot="fixed"
          onClick={this.toggle}
        >
          <AddIcon /> {this.props.buttonLabel}
        </Fab>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Tạo thông báo việc cần làm
          </ModalHeader>
          <ModalBody>{this.table()}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Tạo công việc
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
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
)(AddNoti);
