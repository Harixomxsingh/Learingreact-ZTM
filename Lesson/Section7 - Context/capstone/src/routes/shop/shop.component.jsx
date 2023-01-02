import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      hell
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt="" />
          </div>
        );
      })}
    </div>
  );
};
