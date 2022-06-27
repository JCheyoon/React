import { useContext } from "react";
import { ProductContext } from "../../Contexts/Produce.context";
import ProductCard from "../../components/Product-card/Product-card.componet";
import "./Shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
