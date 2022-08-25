import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
  const cartCtxData = useContext(CartContext);

  const totalAmount = `$${cartCtxData.totalAmount.toFixed(2)}`;
  const hasItems = cartCtxData.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtxData.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtxData.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtxData.items.map((item) => (
        <CartItem
          key={item.name}
          name={item.name}
          amout={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
