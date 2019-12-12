import React from "react";
import Container from "../services/styles";
import Text from "../text/index";
import lp from "../thumbnails/assets/lp.png";
import RowThumbNail from "../thumbnails/RowThumbNail";


const Subsection = props => {
  return (
    <Container>
      <div className='text-align'>
        <Text>{props.title}</Text>
      </div>
      <div className='d-flex-center-wrap'>
          {props.stocks.map(stock => (
              <RowThumbNail stock={stock} />
          ))}
      </div>
    </Container>
  );
};

export default Subsection;

Subsection.defaultProps = {
    stocks: [
        {
            trending: false,
            id: 1,
            ratings: 5,
            name: "Apple Macbook Pro",
            description:
              "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor",
            price: "499",
            reviews: 3,
            discountedPrice: "599",
            photo: lp
          },
          {
            trending: false,
            id: 1,
            ratings: 5,
            name: "Apple Macbook Pro",
            description:
              "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor",
            price: "499",
            reviews: 3,
            discountedPrice: "599",
            photo: lp
          },
          {
            trending: false,
            id: 1,
            ratings: 5,
            name: "Apple Macbook Pro",
            description:
              "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor",
            price: "499",
            reviews: 3,
            discountedPrice: "599",
            photo: lp
          }
    ]

}