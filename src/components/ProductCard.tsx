import React from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, description, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default ProductCard; 