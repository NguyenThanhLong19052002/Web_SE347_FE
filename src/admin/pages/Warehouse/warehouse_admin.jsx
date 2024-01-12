import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./warehouse.module.css";

function WarehouseAdmin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dialuxury.onrender.com/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container fluid>
      <div className={"border-l-3 py-4"}>
        <h3 style={{ color: "#646161" }}>Tồn kho</h3>
        <br></br>
        <TableContainer component={Paper} className={styles.table}>
          <Table sx={{ minWidth: 1200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  STT
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Mã sản phẩm
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Sản phẩm
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  SL Nhập
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  SL Đã Bán
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  SL Còn Lại
                </TableCell>
                {/* <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Chất Liệu
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Khối Lượng
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Kích Thước
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Màu Sắc
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={product.id}>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {index + 1}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.productid}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.name}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.quantity + product.quantity_sold}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.quantity_sold}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.quantity}
                  </TableCell>
                  {/* <TableCell className={styles.tableCell + " text-center"}>
                    {product.quality}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.mass}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.size}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.color}
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}

export default WarehouseAdmin;
