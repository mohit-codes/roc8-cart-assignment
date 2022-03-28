import { AddToCart } from "./AddToCart";
export const ProductCard = ({ product }) => {
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
        <AddToCart prod={product} />
      </div>
    </div>
  );
};
