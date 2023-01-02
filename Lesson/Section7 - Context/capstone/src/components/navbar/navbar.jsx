import { React, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.style.scss";
import CrowLogo from "./icon/crown.svg";
import { userContext } from "../../contexts/user.context";
import { signOutUser } from "../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <Link to={"/"}>
            <img src={CrowLogo} alt="Logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link to={"/"} className="nav-link">
            Home
          </Link>
          <Link to={"/shop"} className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              Sign In
            </Link>
          )}
          <div className="nav-link">
            <CartIcon />
          </div>
          {/* <Link to={"/cart"} className="nav-link">
          </Link> */}
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
