import { useProducts } from "../contexts";
import { ProductCard } from "../components";
export const Products = (params) => {
  const { products } = useProducts();

  return (
    <div className="px-5 py-2 md:px-16 gap-3 grid grid-cols-[repeat(auto-fill,minmax(15rem,_1fr))]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
