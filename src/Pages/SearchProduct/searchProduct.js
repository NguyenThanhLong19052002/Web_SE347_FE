import { Container, Row, Image, Carousel } from "react-bootstrap";
import ProductList from "../Products/Components/Products";
import ImageBanner from "../../../src/assets/images/banner-main-homepage-img.jpg";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

function ProductsPage() {
  const [products, productsSet] = useState([]);

  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("query"); // Lấy giá trị của param1: "value1"
  console.log({ query });

  //lấy thông tin sản phẩm
  useEffect(() => {
    axios
      .get(`https://dialuxury.onrender.com/product/search?query=${query}`)
      .then((response) => {
        console.log(
          `https://dialuxury.onrender.com/product/search?query=${query}`
        );
        productsSet(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);
  const images = [
    "https://trangsuc.doji.vn/Upload/banner/2023/12/banner/1920x703.jpg",
    "https://file.hstatic.net/200000627539/collection/daychuyen-01_b61b4057724a41c9a4a8920991b864dc.png",
    "https://trangsuc.doji.vn/Upload/banner/2023/weddingland/tscc-home.png",
  ];
  return (
    <>
      <Container fluid className="mb-5">
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

        <Row>
          <ProductList products={products} />;
        </Row>
      </Container>
    </>
  );
}

export default ProductsPage;
