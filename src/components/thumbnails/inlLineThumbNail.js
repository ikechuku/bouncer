// import styled from "styled-components";
import React, { useState } from "react";
// import PropTypes from "prop-types";
import { CardWrapper, HotWrapper } from "./styles/inlLineThumbNailStyle";
import FaHeart from "./Hart";
import FaShoppingCart from "./ShoppingCart";

import FaStar from "./Star";
import lp from "./assets/lp.png";

const InlineThumbNail = ({ stock }) => {
  const [showLikeBtn, setShowLikeBtn] = useState("none");
  const [likeBtn, setLikeBtn] = useState({
    iconColor: "#33a0ff",
    likedBackground: false
  });

  const hoverHandler = () => {
    const stateChecker = showLikeBtn === "none" ? "flex" : "none";
    setShowLikeBtn(stateChecker);
  };
  const handleLike = () => {
    const checkLike = likeBtn.iconColor === "#33a0ff" ? "#ffffff" : "#33a0ff";
    setLikeBtn({
      iconColor: checkLike,
      likedBackground: !likeBtn.likedBackground
    });
  };

  
  return (
    <CardWrapper>
      <div className="imageWrapper">
        <HotWrapper>{stock.hot && "Hot"}</HotWrapper>
        <div className="imageContainer">
          <img
            onMouseEnter={hoverHandler}
            className="imgTest"
            src={stock.image}
            alt="some img"
          />
        </div>
      </div>
      <div className="textContainer">
          <h1 className="stockName">{stock.name}</h1>
        <div className="flex_div">
          <h5 className="flex_div">
            <FaStar color="#ffc600"  />
            <FaStar color="#ffc600"  />
            <FaStar color="#ffc600"  />
            <FaStar color="#ffc600"  />
            <FaStar color="#ffc600"  />
            <FaStar color="#c1c8ce"  />
          </h5>

          <div className="overview">0 reviews</div>
          <div className="submitReview">Submit a review</div>
        </div>
        <hr />
        <div className="flex_div">
          <h5 className="product_price">{stock.price}</h5>
          <div className="product_old_price">{stock.oldPrice}</div>
        </div>
        <div className="textParagraphWrapper">
          <p>{stock.attribute}</p>
        </div>
        <div>
          <button>
                  <FaShoppingCart size="14px" />
                Add To Cart
            </button>
          <div>
            <button>
                  <FaHeart size="14px" />
              </button>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

InlineThumbNail.defaultProps = {
  stock: {
    hot: true,
    id: 1,
    name: "Apple Macbook Pro",
    attribute:
      "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor",
    price: "$499",
    oldPrice: "$599",
    image: lp
  }
};

export default InlineThumbNail;

