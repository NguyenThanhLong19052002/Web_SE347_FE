import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HistoryIcon from "@mui/icons-material/History";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./Header.module.css";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import DiamondIcon from "@mui/icons-material/Diamond";

function NewHeader() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const _id = localStorage.getItem("_id");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const [userQuery, setUserQuery] = useState("");
  const handleChangeUserQuery = (e) => {
    setUserQuery(e.target.value);
  };

  //lấy số sản phẩm trong giỏ hàng
  const [productAmount, setProductAmount] = useState(0);
  const [cart, setCart] = useState({});
  useEffect(() => {
    axios
      .get(`https://dialuxury.onrender.com/cart/${_id}`)
      .then((res) => {
        setCart(res.data);
        setProductAmount(res.data.sanphams.length);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [cart]);

  return (
    <>
      {/* nav 1 */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className={styles.firstNav}
      >
        <div className={styles.myContainer + " container-fluid"}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.navTop + " me-auto"}>
              <Link
                to="/aboutus"
                className={styles.items + " nav-link text-center"}
              >
                <div className={styles.item}>
                  <DiamondIcon className={styles.icon} />
                  VỀ CHÚNG TÔI
                </div>
              </Link>
              <Link to="/" className={styles.items + " nav-link text-center"}>
                <div className={styles.item}>
                  <PhoneIcon className={styles.icon} />
                  1800 54 54 57
                </div>
              </Link>
              <Link
                to={`/book/${_id}`}
                className={styles.items + " nav-link text-center"}
              >
                <div className={styles.item}>
                  <CalendarTodayIcon className={styles.icon} />
                  ĐẶT LỊCH HẸN
                </div>
              </Link>
              <Link
                to={`/orders/${_id}`}
                className={styles.items + " nav-link text-center"}
              >
                <div className={styles.item}>
                  <HistoryIcon className={styles.icon} />
                  LỊCH SỬ ĐƠN HÀNG
                </div>
              </Link>
            </Nav>
            <Nav className={styles.navTop + " ms-auto"}>
              <Link
                to="/cart"
                className={styles.items + " nav-link text-center"}
              >
                <div className={styles.item}>
                  <div className="position-relative">
                    <ShoppingCartIcon className={styles.icon} />
                    <span
                      className="position-absolute top-0 start-60 translate-middle badge rounded-pill bg-danger m-0"
                      style={{ fontSize: "8px" }}
                    >
                      {productAmount}
                    </span>
                  </div>
                  &nbsp;&nbsp;GIỎ HÀNG
                </div>
              </Link>

              <Link
                to={`/account/${_id}`}
                className={styles.items + " nav-link text-center"}
              >
                <div className={styles.item}>
                  <PersonIcon className={styles.icon} />
                  TÀI KHOẢN
                </div>
              </Link>

              {token && role === "user" ? (
                <Link
                  to="#"
                  className={styles.items + " nav-link text-center"}
                  onClick={handleLogout}
                >
                  <div className={styles.loginStyle + styles.loginStyle}>
                    <LogoutIcon className={styles.icon} />
                    ĐĂNG XUẤT
                  </div>
                </Link>
              ) : (
                <Link to="/login" className={styles.items + " nav-link"}>
                  <div className={styles.loginStyle + styles.loginStyle}>
                    <LoginIcon className={styles.icon} />
                    ĐĂNG NHẬP
                  </div>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className={styles.secondNav}
      >
        <Container
          className={
            styles.myContainer +
            " d-flex justify-content-center align-items-center"
          }
        >
          <Link to="/" className="navbar-brand">
            <img
              src={require("../../assets/images/logo.png")}
              alt="Logo Image"
              className="logo"
              style={{
                width: "300px",
                height: "60px",
              }}
            />
          </Link>
        </Container>
      </Navbar>

      {/* nav 3 */}
      <Navbar
        expand="lg"
        bg="light"
        variant="light"
        className={styles.thirdNav}
      >
        <div className={styles.myContainer + " container-fluid"}>
          <Row className="container-fluid justify-content-between ps-0">
            <Col
              xs={12}
              md={12}
              lg={8}
              className="d-flex flex-wrap text-center ps-0 ms-3"
            >
              <Nav className="me-auto d-flex flex-wrap justify-content-between">
                <Link
                  to="/"
                  className={styles.items + " nav-link"}
                  style={{
                    paddingLeft: "0.5rem",
                    fontWeight: "600",
                    fontSize: "1.3rem",
                    marginRight: "30px",
                    color: "#231f20",
                  }}
                >
                  TRANG CHỦ
                </Link>
                <Link
                  to="/products/nhan"
                  className={styles.items + " nav-link"}
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#231f20",
                  }}
                >
                  NHẪN
                </Link>

                <Link
                  to="/products/bong-tai"
                  className={styles.items + " nav-link"}
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#231f20",
                  }}
                >
                  BÔNG TAI
                </Link>
                <Link
                  to="/products/day-chuyen"
                  className={styles.items + " nav-link"}
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#231f20",
                  }}
                >
                  DÂY CHUYỀN
                </Link>
                <Link
                  to="/blog"
                  className={styles.items + " nav-link"}
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#231f20",
                  }}
                >
                  BLOG
                </Link>
              </Nav>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <Form className={"d-flex text-center" + styles.form}>
                <Form.Control
                  type="search"
                  placeholder="Tìm kiếm sản phẩm"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`${isFocused ? styles.redFormcontrol : ''} me-2`}
                  aria-label="Search"
                  value={userQuery}
                  onChange={handleChangeUserQuery}
                />

                <Button
                  variant="danger"
                  className={styles.button}
                  onClick={() => {
                    navigate(`/search?query=${userQuery}`);
                  }}
                >
                  <SearchIcon />
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Navbar>
    </>
  );
}

export default NewHeader;
