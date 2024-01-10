import React, { useState, useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const ShowListProduct = ({ products }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateItemsToShow = () => {
    if (screenWidth >= 1024) {
      return 4;
    } else if (screenWidth >= 740) {
      return 3;
    } else {
      return 2;
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/productsdetail/${productId}`);
  };

  const showProducts = () => {
    const itemsToShow = calculateItemsToShow();
    return products.slice(currentIndex, currentIndex + itemsToShow).map((product, index) => (
      <div key={index} className="product-item">
        <img onClick={() => handleProductClick(product._id)} className="product-image" src={product.image} alt={product.name} />
        <a onClick={() => handleProductClick(product._id)} className="detail-button">
          Chi tiết
          <ArrowForwardIcon className="icon-arrow-next" fontSize="small" />
        </a>
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
        <p className="product-quantity-sold">{`${product.quantity_sold} đã bán`}</p>
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
      <div style={{ display: 'flex', overflow: 'hidden' }}>{showProducts()}</div>
      <button className="prev-button" onClick={prevProduct}></button>
      <button className="next-button" onClick={nextProduct}></button>
    </div>
  );
};

export default ShowListProduct;
