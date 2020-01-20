import React from "react";
import "./style.css";
import Text from "../../text";
function Total() {
  return (
    <div className="totals d-flex-space-between  ">
      <div className="left ">
        <Text xSmall>Sutotal</Text>
        <Text xSmall>Shipping fee</Text>
        <Text xSmall>Coupon</Text>
      </div>
      <div className="right ">
        <Text xSmall>$998</Text>
        <Text xSmall>$20</Text>
        <Text xSmall>No</Text>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default Total;
