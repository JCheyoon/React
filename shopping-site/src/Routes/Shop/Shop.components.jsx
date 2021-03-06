import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/Categories-preview.componet";
import Category from "../Category/Category.componet";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
