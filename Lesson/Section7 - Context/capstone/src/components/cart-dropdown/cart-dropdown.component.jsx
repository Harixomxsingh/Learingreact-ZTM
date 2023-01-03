import React from "react";
import { Button } from "../button/button.component";
import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div
        className="cart-items"
        style={{
          // height: "400px",
          // backgroundColor: "red",
          zIndex: "10",
        }}
      ></div>
      <Button buttonType={"inverted"} />
    </div>
  );
};

export default CartDropdown;
