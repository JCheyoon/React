import CategoryItem from "../category-item/Category-item.component";
import "./Directory.styles.scss.css";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
