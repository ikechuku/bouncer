import React, {useState} from 'react';
import FaShoppingCart from './ShoppingCart';
import FaHeart from './Hart';
import FaStar from './Star'
import lp from "./assets/lp.png";
import {
  CardWrapperDIV,
  HotWrapper,
} from "./styles/BlockThumbNailStyle";
import Text from '../text'



const BlockThumbNail = ({ stock }) => {
  const [showIcons, setShowIcons] = useState('none')
  const [likeItem, setLikeItem] = useState(false)
  const [buyItem, setBuyItem] = useState(false);

  const handleShowIcons = () => {
    setShowIcons('flex')
  }
  const handleCloseIcons = () => {
    setShowIcons("none");
  };
  const handleLikeItem = () => {
    setLikeItem(!likeItem);
  };
  const handleBuyItem = () => {
    setBuyItem(!buyItem);

  };

  
  return (
    <div>
      <CardWrapperDIV show={showIcons}>
        <div>
          <HotWrapper>{stock.hot && "Hot"}</HotWrapper>
          <div onMouseEnter={handleShowIcons} className="imageContainer">
            <img src={stock.image} alt="laptop" />
          </div>
          <div onMouseLeave={handleCloseIcons} className="iconContainer">
            <div
              onClick={handleBuyItem}
              style={{
                backgroundColor: `${(buyItem && "#33a0ff") || "inherit"}`
              }}
              className="iconWrapper"
            >
              <FaShoppingCart color={buyItem && "white"} />
            </div>
            <div
              onClick={handleLikeItem}
              style={{
                backgroundColor: `${(likeItem && "#33a0ff") || "inherit"}`
              }}
              className="iconWrapper heart"
            >
              <FaHeart color={likeItem && "white"}></FaHeart>
            </div>
          </div>
        </div>

        <div >
          <div className="stockName">
            <Text xbold ltSpacing0 ht1 xSmall className="product_name">
              {stock.name}
            </Text>
          </div>
          <h5 className="flex_div">
            <FaStar color="#ffc600" />
            <FaStar color="#ffc600" />
            <FaStar color="#ffc600" />
            <FaStar color="#ffc600" />
            <FaStar />
            <FaStar />
          </h5>
          <div className="flex_div">
            <h5 className="product_price">{stock.price}</h5>
            <h5 className="product_old_price">{stock.oldPrice}</h5>
          </div>
        </div>
      </CardWrapperDIV>
    </div>
  );
};

BlockThumbNail.defaultProps = {
  stock: {
    hot: false,
    id: 1,
    name: "Apple Macbook Pro",
    attribute:
      "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor",
    price: "$499",
    oldPrice: "$599",
    image: lp
  }
};

export default BlockThumbNail;
