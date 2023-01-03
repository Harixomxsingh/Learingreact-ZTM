import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      Your Cart is Empty
      <div
        className="cart-items"
        style={{
          // height: "400px",
          // backgroundColor: "red",
          zIndex: "10",
        }}
      >
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType={"inverted"}>Go To CheckOut</Button>
    </div>
  );
};

export default CartDropdown;
