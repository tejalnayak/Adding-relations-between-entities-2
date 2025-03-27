import { useState } from "react";
import PropTypes from "prop-types";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) return;
    onRatingSubmit(productId, rating);
    setRating(0);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ cursor: "pointer", fontSize: "20px", color: star <= (hoveredRating || rating) ? "gold" : "gray" }}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
        >
          ★
        </span>
      ))}
      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>Submit Rating</button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;
