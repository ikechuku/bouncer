import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./style.css";
import Counter from "../form/counter";
import InputButton from "../form/inputButton";
import Text from "../text";
import Total from "./cart-total";
import { useState } from "react";
import item from "./assets/item";

function CartRows(props) {
  const [newPrice, setNewPrice] = useState(props.item.price);
  let valueReturn = value => {
    setNewPrice(props.item.price * value);
    props.subtotal(newPrice*value)
  };
  return (
    <tr>
      <td className="d-flex">
        <MdDeleteForever color="red" />
        <img src={props.item.image} alt="Iphone" width="100px" />
        <Text xSmall ht5 bold>
          {props.item.name}
        </Text>
      </td>
      <td>${newPrice}</td>
      <td>
        <Counter key="1" valueReturn={valueReturn} />
      </td>
      <td>${props.item.price}</td>
    </tr>
  );
}

function Cart() {
  const [items, setitems] = useState(item);
  
  return (
    <div className="container -items-center">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">PRODUCT</th>
            <th scope="col">PRICE</th>

            <th scope="col">QTY</th>
            <th scope="col">UNIT PRICE</th>
          </tr>
        </thead>
        <tbody>
          {items.map((element, index) => {
            let subtotal = value =>{
    console.log(value)
  }
            
            return <CartRows item={element} subtotal={subtotal} />;
          })}
        </tbody>
      </table>
      <div className="bottom-section d-flex-space-between flex-row">
        <div className="voucher">
          <InputButton placeholder="Voucher code" name="Redeem"></InputButton>
        </div>
        <div className="total-section">
          <Total />
        </div>
      </div>
    </div>
  );
}
export default Cart;
