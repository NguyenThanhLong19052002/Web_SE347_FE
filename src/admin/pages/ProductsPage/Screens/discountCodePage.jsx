import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./table.module.css";
import { Image } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

import SearchIcon from "@mui/icons-material/Search";
import Form from "react-bootstrap/Form";
import { Code } from "@mui/icons-material";

function DiscountCodePage() {
  //Hiển thị dữ liệu các sản phẩm:
  const [discountCodes, setDiscountCodes] = useState([]);

  const [userQuery, setUserQuery] = useState("");

  const handleChangeUserQuery = (e) => {
    setUserQuery(e.target.value);
  };

  useEffect(() => {
    loadDiscountCodes();
  }, []);

  const loadDiscountCodes = async () => {
    axios
      .get("http://localhost:3001/order/discount/get")
      .then((response) => {
        setDiscountCodes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let navigate = useNavigate();

  //Xoá sản phẩm:

  // const handleEditClick = ({ id }) => {
  //   // Gọi API để lấy thông tin sản phẩm
  //   axios
  //     .get(`https://dialuxury.onrender.com/product/${id}`)
  //     .then((response) => {
  //       // Cập nhật state với thông tin sản phẩm
  //       console.log(response.data);
  //       setProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const activeDiscountCode = (id) => {
    toast.loading("activating...");
    axios
      .patch(`http://localhost:3001/order/discount/${id}`)
      .then((response) => {
        toast.dismiss();
        toast.success(<b>Kích hoạt thành công</b>);
        console.log(response.data);
        //Load lại data
        loadDiscountCodes();
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(<b>Kích hoạt thất bại</b>);
        // Xử lý lỗi từ API
        console.error("Lỗi kích hoạt mã giảm giá:", error);
      });
  }
  const deleteDiscountCode = (id) => {
    toast.loading("Deleting...");
    axios
      .delete(`http://localhost:3001/order/discount/delete/${id}`)
      .then((response) => {
        toast.dismiss();
        toast.success(<b>Xóa mã giảm giá thành công</b>);
        console.log(response.data);
        //Load lại data
        loadDiscountCodes();
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(<b>Xóa thất bại</b>);
        // Xử lý lỗi từ API
        console.error("Lỗi khi xóa mã giảm giá:", error);
      });
  };

  return (
    <Container fluid>
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "20px",
          marginTop: "20px",
        }}
      >
        {/* <Form className={"d-flex text-center"}>
          <Form.Control
            type="search"
            placeholder="Tìm kiếm mã giảm giá..."
            y
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
        </Form> */}
        <b style={{ fontSize: "24px", color: "rgb(97, 97, 97)" }}>
          Danh sách mã giảm giá
        </b>
        <Link to="/admin/discountCodePageAdmin/add">
          <Button variant="primary">Thêm mới</Button>
        </Link>
      </div>

      <div className={"border-l-3 py-4"}>
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
                  Mã giảm giá
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Phần trăm giảm giá
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Trạng thái
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Ngày tạo
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Hoạt động
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {discountCodes.map((code, index) => {
                return (
                  <TableRow key={code._id}>
                    <TableCell className={styles.tableCell + " text-center"}>
                      {index + 1}
                    </TableCell>

                    <TableCell className={styles.tableCell + " text-center"}>
                      {code.code}
                    </TableCell>
                    <TableCell className={styles.tableCell + " text-center"}>
                      {code.value * 100}%
                    </TableCell>
                    <TableCell className={styles.tableCell + " text-center"}>
                      {code.isUsed === true ? (
                        <span class="text-danger">Đã áp dụng</span>
                      ) : (
                        <span class="text-success">Chưa áp dụng</span>
                      )}
                    </TableCell>
                    {/* <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/productsPage/${product._id}`);
                      }}
                    >
                      {product.quantity_sold}
                    </TableCell> */}

                    <TableCell className={styles.tableCell + " text-center"}>
                      {code.createdAt}
                    </TableCell>

                    <TableCell className={styles.tableCell + " text-center"}>
                      {code.isUsed === true ? (
                        <div className="d-flex justify-content-center align-items-center">
                          <Button
                            variant="warning"
                            className="me-1"
                            onClick={() => activeDiscountCode(code._id)}
                          >
                            Kích hoạt
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => deleteDiscountCode(code._id)}
                          >
                            Xóa
                          </Button>
                        </div>
                      ) : (
                        <>
                          <Button
                            variant="danger"
                            onClick={() => deleteDiscountCode(code._id)}
                          >
                            Xóa
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}

export default DiscountCodePage;
