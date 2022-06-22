import { useContext } from "react";
import { ProductContext } from "../../Contexts/Produce.context";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
