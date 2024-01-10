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

function CommentsPageAdmin() {
  //Hiển thị dữ liệu các sản phẩm:
  const [comments, setComments] = useState([]);

  const [userQuery, setUserQuery] = useState("");

  const handleChangeUserQuery = (e) => {
    setUserQuery(e.target.value);
  };

  useEffect(() => {
    // if(userQuery === ""){
    //   loadProducts();
    // }
    // else{
    //   searchProduct()
    // }
    loadProducts();
  }, []);

  const loadProducts = async () => {
    axios
      .get("http://localhost:3001/danhgia")
      .then((response) => {
        setComments(response.data);
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

  // const deleteProduct = (id) => {
  //   axios
  //     .delete(`https://dialuxury.onrender.com/product/${id}`)
  //     .then((response) => {
  //       //Load lại các sản phẩm:
  //       loadProducts();
  //       console.log("Sản phẩm đã được xóa thành công");
  //     })
  //     .catch((error) => {
  //       // Xử lý lỗi từ API
  //       console.error("Lỗi khi xóa sản phẩm:", error);
  //     });
  // };
  const deleteProduct = (id) => {
    toast.loading("Deleting...");
    axios
      .delete(`http://localhost:3001/danhgia/${id}`)
      .then((response) => {
        toast.dismiss();
        toast.success(<b>Xóa bình luận thành công</b>);
        //Load lại các sản phẩm:
        loadProducts();
        console.log("Bình luận đã được xóa thành công");
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(<b>Xóa bình luận thất bại</b>);
        // Xử lý lỗi từ API
        console.error("Lỗi khi xóa bình luận:", error);
      });
  };

//   const searchProduct = () => {
//     axios
//       .get(`https://dialuxury.onrender.com/product/search?query=${userQuery}`)
//       .then((response) => {
//         console.log(
//           `https://dialuxury.onrender.com/product/search?query=${userQuery}`
//         );
//         // setProducts(response.data);

//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

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
            placeholder="Tìm kiếm sản phẩm..."
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
        {/* <Link to="/admin/productsPage/add">
          {" "}
          <Button variant="primary">Thêm mới</Button>{" "}
        </Link> */}
        <b style={{ fontSize: "24px", color: "rgb(97, 97, 97)" }}>Danh sách bình luận</b>
      </div>

      <div className={"border-l-3 py-3"}>
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
                  Tên người dùng
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Bình luận
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Số sao đánh giá
                </TableCell>
                {/* <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Số lượng
                </TableCell> */}
                {/* <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Số sao
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Tên người dùng
                </TableCell> */}
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Hoạt động
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comments.map((comment, index) => {
                return (
                  <TableRow key={comment._id}>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      //   onClick={() => {
                      //     navigate(`/admin/productsPage/${product._id}`);
                      //   }}
                    >
                      {index + 1}
                    </TableCell>

                    <TableCell
                      className={styles.tableCell + " text-center"}
                      //   onClick={() => {
                      //     navigate(`/admin/productsPage/${product._id}`);
                      //   }}
                    >
                      {comment.productid}
                    </TableCell>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      //   onClick={() => {
                      //     navigate(`/admin/productsPage/${product._id}`);
                      //   }}
                    >
                      {comment.name}
                    </TableCell>
                    {/* <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/productsPage/${product._id}`);
                      }}
                    >
                      <Image
                        src={product.image}
                        roundedCircle="true"
                        style={{ width: "50px", height: "50px" }}
                      ></Image>
                    </TableCell> */}
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      //   onClick={() => {
                      //     navigate(`/admin/productsPage/${product._id}`);
                      //   }}
                    >
                      {comment.content}
                    </TableCell>
                    {/* <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/productsPage/${product._id}`);
                      }}
                    >
                      {product.quantity_sold}
                    </TableCell> */}

                    <TableCell
                      className={styles.tableCell + " text-center"}
                      //   onClick={() => {
                      //     navigate(`/admin/productsPage/${product._id}`);
                      //   }}
                    >
                      {comment.rating}
                    </TableCell>
                    {/* <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/productsPage/${product._id}`);
                      }}
                    >
                      {product.price} đ
                    </TableCell> */}

                    <TableCell className={styles.tableCell + " text-center"}>
                      <div className="align-items-center">
                        {/* <Button
                          variant="warning"
                          className="me-1"
                          onClick={() => {
                            return navigate(
                              `/admin/productsPage/edit/${product._id}`
                            );
                            // { handleEditClick }
                          }}
                        >
                          Sửa
                        </Button>{" "} */}
                        <Button
                          variant="danger"
                          onClick={() => deleteProduct(comment._id)}
                        >
                          Xóa
                        </Button>{" "}
                      </div>
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

export default CommentsPageAdmin;
