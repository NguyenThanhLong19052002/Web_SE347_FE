import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const Show4Product = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/productsdetail/${productId}`);
  };

  const showProducts = () => {
    const firstFourProducts = products.slice(0, 4);

    return firstFourProducts.map((product, index) => (
      <div key={index} className="product-item">
        <img className="product-image" src={product.image} alt={product.name} />
        <a onClick={() => handleProductClick(product._id)} className="detail-button">
          Chi tiết
          <ArrowForwardIcon sx={{ marginLeft: '8px' }} fontSize="small" />
        </a>
        <p className="product-name">{product.name}</p>
        <p className="product-price">{`${product.price}đ`}</p>
      </div>
    ));
  };

  return (
    <div className="container-list-product">
      <div style={{ display: 'flex', overflow: 'hidden' }}>{showProducts()}</div>
    </div>
  );
};

export default Show4Product;
