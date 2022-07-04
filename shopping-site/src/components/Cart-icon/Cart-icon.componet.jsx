import "./Cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
