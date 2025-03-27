import PropTypes from "prop-types";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", textAlign: "center" }}>
      <img src={product.image} alt={product.name} width="100" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Average Rating: {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;
