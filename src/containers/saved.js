import { useCart } from "../contexts";

export const Saved = () => {
  const { savedProducts, removeFromSaved, movefromSavedToCart } = useCart();

  return (
    <div className="flex items-start justify-between px-5 md:px-16">
      <div className="w-full">
        <p className="">Saved Products</p>
        <div className="">
          <div className="flex">
            {savedProducts.map((product) => (
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
                  <button
                    className="w-full bg-black text-white py-2"
                    onClick={() => removeFromSaved(product)}
                  >
                    Remove From saved
                  </button>
                  <button
                    className="w-full bg-black text-white py-2 mt-2"
                    onClick={() => movefromSavedToCart(product)}
                  >
                    add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
