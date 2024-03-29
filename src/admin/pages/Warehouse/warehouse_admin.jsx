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
import { Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "react-bootstrap";

function WarehouseAdmin() {
  const [products, setProducts] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  const handleChangeUserQuery = (e) => {
    setUserQuery(e.target.value);
  };
  useEffect(() => {
    if (userQuery === "") {
      loadProducts();
    } else {
      searchProduct();
    }
  }, [userQuery]);
  
  const loadProducts = () => {
    axios
      .get("https://dialuxury.onrender.com/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const searchProduct = () => {
    axios
      .get(`http://localhost:3001/product/search?query=${userQuery}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <Container fluid>
      <div className={"border-l-3 py-4"}>
        <h3 style={{ color: "#646161" }}>Tồn kho</h3>
        <div className="d-flex align-items-center justify-content-between my-3">
        <Form className={"d-flex text-center"}>
            <Form.Control
              type="search"
              placeholder="Tìm kiếm sản phẩm..."
              className={"me-2 " + styles.formcontrol}
              aria-label="Search"
              value={userQuery}
              onChange={handleChangeUserQuery}
            />

            <Button
              variant="primary"
              disabled="True"
              // className={styles.button}
              // onClick={() => {
              //   navigate(`/admin/productsPage?query=${userQuery}`);
              // }}
            >
              <SearchIcon />
            </Button>
          </Form>
        </div>
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
