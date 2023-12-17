import "./CartStyle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewIProduct from "./Components/NewProduct";
import NewIBill from "./Components/NewBill";
import axios from "axios";
import { useEffect, useState } from "react";
import images from "../../assets/images";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function NewICart() {
  //lấy số sản phẩm trong giỏ hàng
  const [productAmount, setProductAmount] = useState(0);

  //lấy _id của người dùng trong localStorage
  const userId = localStorage.getItem("_id");

  const [cart, setCart] = useState();

  //lấy các sản phẩm từ trong giỏ hàng hiện ra
  useEffect(() => {
    axios
      .get(`https://dialuxury.onrender.com/cart/${userId}`)
      .then((response) => {
        setCart(response.data);
        setProductAmount(response.data.sanphams.length);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      {/* <h1 className='m-4'>Giỏ hàng</h1> */}
      <Container fluid>
        <Row>
          <Col xs="12" md="7">
            <div className="title-h2 m-3">
              <h2>Giỏ hàng</h2>
              <span className="amount-item">({productAmount} sản phẩm)</span>
            </div>
            <div className="bakbuy">
              <ArrowBackIcon className="icon-back" />
              <Link to="/">tiếp tục mua hàng</Link>
            </div>
            {cart !== undefined && cart.sanphams.length !== 0 ? (
              cart.sanphams.map((sp, index) => {
                return (
                  <NewIProduct
                    productid={sp.productid}
                    image={sp.image}
                    name={sp.name}
                    price={sp.price}
                    category={sp.category}
                    soluong={sp.soluong}
                    state={sp.state}
                    key={sp.productid}
                    index={index}
                  />
                );
              })
            ) : (
              <div className="d-flex flex-column align-items-center">
                <strong>Giỏ hàng rỗng</strong>
                <img src={images.cartIsNull} width={500} alt="Giỏ hàng rỗng" />
              </div>
            )}
          </Col>
          <Col xs="12" md="5" className="px-5 px-md-3 mt-3">
            {cart !== undefined && <NewIBill cart={cart} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewICart;
