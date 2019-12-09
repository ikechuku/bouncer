import React from "react";
import Container from "./styles";
import refund from "./assets/refund.png";
import shipping from "./assets/shipping.png";
import support from "./assets/support.png";
import Text from "../text/index";

const Services = props => {
  return (
    <Container>
      <div className='d-flex'>
        {props.offers.map(offer => (
          <div>
            <div>{offer.icon}</div>
            <div>
              <Text>{offer.service}</Text>
            </div>
            <div>
            <Text>{offer.description}</Text>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Services;

Services.defaultProps = {
  offers: [
    {
      icon: <img src={shipping} alt="shipping" />,
      service: "FREE SHIPPING",
      description: ""
    },
    {
      icon: <img src={refund} alt="refund" />,
      service: "100% REFUND",
      description: ""
    },
    {
      icon: <img src={support} alt="support" />,
      service: "SUPPORT 24/7",
      description: ""
    }
  ]
};
