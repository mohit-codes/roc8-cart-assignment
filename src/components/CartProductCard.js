import { useCart } from "../contexts/cartContext";
export const CartProductCard = ({ product }) => {
  const {
    removeFromCart,
    increaseQunatity,
    decreaseQuantity,
    saveForLater
  } = useCart();

  return (
    <div
      key={product.id}
      className="hover:shadow-md w-60 rounded-sm border-2 flex flex-col"
    >
      <img
        className="h-64 object-contain"
        src={product.imageUrl}
        alt={product.productName}
        loading="lazy"
      />
      <div className="py-2 px-2">
        <p className="text-gray-500">{product.brand}</p>
        <p>{product.productName}</p>
        <p className="font-medium mb-2">{`₹${product.price.toLocaleString()}`}</p>
      </div>
      <div className="mt-auto">
        <div className="w-full flex justify-evenly items-center mb-2">
          <button
            className="bg-black text-white px-3 py-1 rounded-full"
            onClick={() => increaseQunatity(product)}
          >
            +
          </button>
          <span>{product.quantity}</span>
          <button
            className="bg-black text-white px-3 py-1 rounded-full"
            onClick={() => decreaseQuantity(product)}
            disabled={product.quantity === 1}
          >
            -
          </button>
        </div>
        <button
          className="w-full bg-black text-white py-2"
          onClick={() => removeFromCart(product)}
        >
          Remove From Cart
        </button>
        <button
          className="w-full bg-black text-white py-2 mt-2"
          onClick={() => saveForLater(product)}
        >
          Save for Later
        </button>
      </div>
    </div>
  );
};
