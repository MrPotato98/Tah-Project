import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { Tab, TableHead } from "@material-ui/core";

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

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

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
        <GridContainer justify="flex-start">
          <TableHead>
            <TableRow>
              <TableCell>Title(tên nôi dung)</TableCell>
              <TableCell>Điểm tối đa</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  id="type"
                  name="type"
                  onChange={this.onChange}
                  label="Title"
                  margin="normal"
                />
              </TableCell>
              <TableCell>
                <TextField
                  id="type"
                  name="type"
                  onChange={this.onChange}
                  label="Điểm tối đa"
                  margin="normal"
                />
              </TableCell>
              <Tooltip
                id="tooltip-top-start"
                title="Add new item"
                placement="top"
              >
                <IconButton aria-label="Add">
                  <AddIcon color={"default"} />
                </IconButton>
              </Tooltip>
            </TableRow>
          </TableBody>
        </GridContainer>
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
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Tạo bảng đánh giá nhân viên
          </ModalHeader>
          <ModalBody>{this.table()}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Tạo bảng
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
)(AddModal);
