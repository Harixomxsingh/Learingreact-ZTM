import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../button/button.component";
import { Navigate, useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div
        className="cart-items"
        style={{
          // height: "400px",
          // backgroundColor: "red",
          zIndex: "10",
        }}
      >
        {cartItems.length === 0 ? <p>Your Cart is empty</p> : ""}
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      {cartItems.length > 0 ? (
        <Button buttonType={"inverted"} onClick={goToCheckoutHandler}>
          Go To CheckOut
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartDropdown;
