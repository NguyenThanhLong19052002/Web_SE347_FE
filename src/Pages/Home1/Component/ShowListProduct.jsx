import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const ShowListProduct = ({ products }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProductClick = (productId) => {
    navigate(`/productsdetail/${productId}`);
  };

  const showProducts = () => {
    return products
      .slice(currentIndex, currentIndex + 4)
      .map((product, index) => (
        <div key={index} className="product-item">
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
          <a
            onClick={() => handleProductClick(product._id)}
            className="detail-button"
          >
            Chi tiết
            <ArrowForwardIcon sx={{ marginLeft: "8px" }} fontSize="small" />
          </a>
          <p className="product-name">{product.name}</p>
          <p className="product-price">{`${product.price}đ`}</p>
        </div>
      ));
  };

  const prevProduct = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextProduct = () => {
    if (currentIndex + 4 < products.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="container-list-product">
      <div style={{ display: "flex", overflow: "hidden" }}>
        {showProducts()}
      </div>
      <button className="prev-button" onClick={prevProduct}></button>
      <button className="next-button" onClick={nextProduct}></button>
    </div>
  );
};

export default ShowListProduct;
