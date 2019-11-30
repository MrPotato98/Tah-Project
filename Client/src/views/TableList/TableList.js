import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "components/CustomButtons/Button.js";

import Table from "@material-ui/core/Table";
import styless from "assets/jss/material-dashboard-react/components/tableStyle.js";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

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

export default function TableList() {
  const classes = useStyles();
  const classess = useStyless();

  const Row = ({ id }) => (
    <tr>
      <td>
        <input></input>
      </td>
      <td>
        <input></input>
      </td>
    </tr>
  );
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>THÔNG TIN NHÂN VIÊN</h4>
            <p className={classes.cardCategoryWhite}>Họ và tên: Trần Anh Huy</p>
            <p className={classes.cardCategoryWhite}>
              Email: huy.potato1998@gmail.com
            </p>
            <p className={classes.cardCategoryWhite}>Tổ: Developer</p>
          </CardHeader>
          <CardBody>
            {/* <h4
              style={{
                textAlign: "right"
              }}
            >
              Đánh Giá
            </h4> */}
            <div className={classess.tableResponsive}>
              <Table className={classess.table}>
                <TableHead className={classess.primaryTableHeader}>
                  <TableRow className={classess.tableHeadRow}>
                    <TableCell
                      className={
                        classess.tablCell + " " + classess.tableHeadCell
                      }
                    >
                      Nội Dung
                    </TableCell>
                    <TableCell
                      className={
                        classess.tablCell + " " + classess.tableHeadCell
                      }
                    >
                      Điểm tối đa
                    </TableCell>
                    <TableCell
                      className={
                        classess.tablCell + " " + classess.tableHeadCell
                      }
                    >
                      Điểm
                    </TableCell>
                    <TableCell
                      className={
                        classess.tablCell + " " + classess.tableHeadCell
                      }
                    >
                      Ghi chú
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow className={classess.tableBodyRow}>
                    <TableCell className={classess.tableCell}>
                      Đi làm chuyên cần, đúng giờ
                    </TableCell>
                    <TableCell className={classess.tableCell}>20đ</TableCell>
                    <TableCell className={classess.tableCell}>
                      <input className={classes.input}></input>
                    </TableCell>
                    <TableCell className={classess.tableCell}>
                      <input className={classes.input}></input>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow className={classess.tableBodyRow}>
                    <TableCell className={classess.tableCell}>
                      Có mối quan hệ vui vẻ và hòa đồng với nhân dân địa phương
                      nơi cư trú
                    </TableCell>
                    <TableCell className={classess.tableCell}>7đ</TableCell>
                    <TableCell className={classess.tableCell}>
                      <input className={classes.input}></input>
                    </TableCell>
                    <TableCell className={classess.tableCell}>
                      <input className={classes.input}></input>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow className={classess.tableBodyRow}>
                    <TableCell className={classess.tableCell}>
                      Có mối quan hệ vui vẻ và hòa đồng với nhân dân địa phương
                      nơi cư trú
                    </TableCell>
                    <TableCell className={classess.tableCell}>5đ</TableCell>
                    <TableCell className={classess.tableCell}>
                      <input className={classes.input}></input>
                    </TableCell>
                    <TableCell className={classess.tableCell}>
                      <input className={classes.input}></input>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow className={classess.tableBodyRow}>
                    <TableCell className={classess.tableCell}>
                      Không bị cơ quan an ninh hoặc cơ quan Nhà nước có thẩm
                      quyền gửi thông báo vi phạm công tác giữ gìn an ninh trật
                      tự, an toàn xã hội, an toàn giao thông tại địa phương về
                      Trường
                    </TableCell>
                    <TableCell className={classess.tableCell}>10đ</TableCell>
                    <TableCell className={classess.tableCell}>
                      <input className={classes.input}></input>
                    </TableCell>
                    <TableCell className={classess.tableCell}>
                      <input className={classes.input}></input>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            {/* <Table
              tableHeaderColor="primary"
              tableHead={["Nội dung", "Điểm Tối Đa", "Điểm", "Ghi chú"]}
              tableData={[]}
            /> */}
            <br />
            <GridContainer>
            <GridItem xs={12} sm={12} md={12} >
              <InputLabel style={{ color: "#AAAAAA" }}>Comment</InputLabel>
              <CustomInput
                labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                id="about-me"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              {" "}
              <Button color="primary" >Done</Button>
            </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738"],
              ]}
            />
            
          </CardBody>
        </Card>
      </GridItem> */}
    </GridContainer>
  );
}
