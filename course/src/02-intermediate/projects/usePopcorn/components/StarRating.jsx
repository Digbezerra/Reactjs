import PropTypes from "prop-types";

import { useState } from "react";
import { Star } from "./Star";

const containerStyle = { display: "flex", alignItems: "center", gap: "16px" };
const starContainerStyle = { display: "flex" };

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
};

export function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(defaultRating);

  const handleRating = (rating) => {
    setRating(rating);
    onSetRating && onSetRating(rating);
  };

  const handleHoverIn = (index) => {
    setTempRating(index);
  };

  const HandleHoverOut = () => {
    setTempRating(0);
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontWeight: 500,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => handleHoverIn(i + 1)}
            onHoverOut={() => HandleHoverOut()}
            color={color}
            size={size}
            className={className}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}
