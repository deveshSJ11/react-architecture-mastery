// Product.jsx
import PropTypes from "prop-types";
import "./Product.css";

export default function Product({ title, price }) {
  const priceNumber = Number(price);

  return (
    <div className="Product">
      <h3>{title}</h3>
      {priceNumber > 0 ? (
        <h5>Price: ₹{priceNumber.toLocaleString()}</h5>
      ) : (
        <h5 className="out-of-stock">Out of stock</h5>
      )}
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
