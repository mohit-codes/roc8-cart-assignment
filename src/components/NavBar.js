import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts";
export const NavBar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const label = cart.length !== 0 ? `Cart (${cart.length})` : "Cart";

  return (
    <nav className="bg-purple-500 px-5 md:px-10 py-2 flex justify-between">
      <h1
        className="text-white cursor-pointer text-lg"
        onClick={() => navigate("/")}
      >
        FlipKart
      </h1>
      <button
        className="bg-white px-3 rounded-md py-1"
        onClick={() => navigate("/cart")}
      >
        {label}
      </button>
    </nav>
  );
};
