import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart.context";

import "./Cart-dropdown.styles.scss";

import Button from "../Button/Button.component";
import CartItem from "../Cart-item/Cart-item.componet";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
