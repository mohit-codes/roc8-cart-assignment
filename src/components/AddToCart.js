import { useCart } from "../contexts";
import { useNavigate } from "react-router-dom";

export const AddToCart = ({ prod }) => {
  const { isAlreadyInCart, addToCart } = useCart();
  const navigate = useNavigate();

  return isAlreadyInCart(prod) ? (
    <button
      onClick={() => navigate("/cart")}
      className="w-full bg-black text-white py-2"
    >
      Go To Cart
    </button>
  ) : (
    <button
      className="w-full bg-purple-500 text-white py-2"
      onClick={() => addToCart(prod)}
    >
      Add To Cart
    </button>
  );
};
