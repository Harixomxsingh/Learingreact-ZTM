import "./product-card.style.scss";
import { Button } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const handleClick = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted" onClick={handleClick}>
          Add To Card
        </Button>
      </div>
    </div>
  );
};
