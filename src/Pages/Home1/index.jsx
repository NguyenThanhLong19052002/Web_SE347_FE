import "./Home1.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Carousel, Image } from "react-bootstrap";
import ShowListProduct from "./Component/ShowListProduct";
import Show4Product from "./Component/Show4Product";
import { Link } from "react-router-dom";

function Home1() {
  const [bestSellingProduct, setBestSellingProduct] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [ring, setRing] = useState([]);
  const [necklace, setNecklace] = useState([]);
  const [earring, setEarring] = useState([]);

  useEffect(() => {
    loadNewProduct();
    loadBestSellingProduct();
    loadEarring();
    loadRings();
    loadNecklace();
  }, []);

  const images = [
    "https://trangsuc.doji.vn/Upload/banner/2023/10/bannerweb/2-banner-trang-chu-2.jpg",
    "https://trangsuc.doji.vn/Upload/banner/2023/weddingland/banner/1920x703.png",
    "https://trangsuc.doji.vn/Upload/banner/2023/12/banner/1920x703.jpg",
  ];

  const loadBestSellingProduct = async () => {
    axios
      .get("https://dialuxury.onrender.com/soldNumbersOfProducts")
      .then((response) => {
        setBestSellingProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error Home1: ", error);
      });
  };

  const loadNewProduct = async () => {
    axios
      .get("https://dialuxury.onrender.com/sortedProduct")
      .then((response) => {
        setNewProduct(response.data);
      })
      .catch((error) => {
        console.log("error Home1: ", error);
      });
  };

  const loadRings = async () => {
    axios
      .get("https://dialuxury.onrender.com/product/category/Nh%E1%BA%ABn")
      .then((response) => {
        setRing(response.data);
      })
      .catch((error) => {
        console.log("error Home1: ", error);
      });
  };

  const loadNecklace = async () => {
    axios
      .get(
        "https://dialuxury.onrender.com/product/category/descendingPrice/D%C3%A2y%20chuy%E1%BB%81n"
      )
      .then((response) => {
        setNecklace(response.data);
      })
      .catch((error) => {
        console.log("error Home1: ", error);
      });
  };

  const loadEarring = async () => {
    axios
      .get(
        "https://dialuxury.onrender.com/product/category/descendingPrice/B%C3%B4ng%20tai"
      )
      .then((response) => {
        setEarring(response.data);
      })
      .catch((error) => {
        console.log("error Home1: ", error);
      });
  };

  return (
    <Container fluid>
      <Row>
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <Image
                className="d-block w-100"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
      <Row className="pt-5 pb-5 container-row">
        <div className="container-padding">
          <div className="title-h2">
            <h2>Sản phẩm bán chạy</h2>
          </div>
          <ShowListProduct products={bestSellingProduct}></ShowListProduct>
        </div>
      </Row>
      <Row className="pt-5 pb-5 container-row">
        <div className="container-padding">
          <div className="title-h2 height-odd">
            <h2>Sản phẩm mới</h2>
          </div>
          <ShowListProduct products={newProduct}></ShowListProduct>
        </div>
      </Row>
      <Row className="pt-5 pb-5 container-row">
        <div className="container-padding">
          <div className="title-h2 ">
            <h2>Nhẫn</h2>
            <Link to="/products/nhan-1" className="see-all">
              Xem tất cả
            </Link>
          </div>
          <Image
            src="https://theme.hstatic.net/200000061680/1000549213/14/2banner_top_img.png?v=754"
            className="w-100"
          />
          <Show4Product products={ring}></Show4Product>
        </div>
      </Row>
      <Row className="pt-5 pb-5 container-row">
        <div className="container-padding">
          <div className="title-h2 height-odd">
            <h2>Dây chuyền</h2>
            <Link to="/products/day-chuyen-1" className="see-all">
              Xem tất cả
            </Link>
          </div>
          <Image
            src="https://file.hstatic.net/200000627539/collection/daychuyen-01_b61b4057724a41c9a4a8920991b864dc.png"
            className="w-100"
          />
          <Show4Product products={necklace}></Show4Product>
        </div>
      </Row>
      <Row className="pt-5 pb-5 container-row">
        <div className="container-padding">
          <div className="title-h2">
            <h2>Bông tai</h2>
            <Link to="/products/bong-tai-1" className="see-all">
              Xem tất cả
            </Link>
          </div>
          <Image
            src="https://cdn.pnj.io/images/promo/141/Banner_Bong_Tai_1200x450.jpg"
            className="w-100"
          />
          <Show4Product products={earring}></Show4Product>
        </div>
      </Row>
    </Container>
  );
}

export default Home1;
