import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="bg-white p-4 m-5 rounded-lg shadow-md w-[220px] h-[400px] cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="h-48 bg-gray-300 mb-4">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="text-gray-500 text-center">No Image Available</div>
        )}
      </div>

      <div className="text-primary mb-4">{product.price}₺</div>

      <div className="text-black mb-2">{product.name}</div>

      <button
        className="text-white px-4 py-2 rounded-lg bg-primary hover:scale-95"
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart();
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
