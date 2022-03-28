import { CartProductCard } from "../components";
import { useCart } from "../contexts";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cart, savedProducts } = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  return (
    <div className="flex items-start justify-between px-5 md:px-16">
      <div className="w-full">
        <p className="">My Cart</p>
        <div className="py-2 gap-3 grid grid-cols-[repeat(auto-fill,minmax(15rem,_1fr))]">
          {!cart.length
            ? "Cart is Empty"
            : cart.map((product) => (
                <CartProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
      <div className="mt-3 w-64">
        {cart.length !== 0 && (
          <>
            <div className="border-2 p-2">
              <p>Price Details</p>
              <p>{`Total items - ${cart.length}`}</p>
              <p>{`Total price - ₹${totalPrice.toLocaleString()}`}</p>
              <p>{`Discount -  ₹100`}</p>
              <p>{`Discounted price - ₹${(
                totalPrice - 100
              ).toLocaleString()}`}</p>
            </div>
          </>
        )}
        <button
          className="w-full bg-black text-white py-2 mt-2"
          onClick={() => navigate("/saved")}
          disabled={savedProducts.length === 0}
        >
          View Saved products
        </button>
      </div>
    </div>
  );
};
