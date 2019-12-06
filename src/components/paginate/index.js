import React, { useState } from "react";
import Text from '../text'
import mockData from './mockData'

import {Active, inactive, Wrapper} from './style'

export default function Pagination() {
  const [active, setActive] = useState(mockData);

  const handleActive = e => {
    let myState = active.map(item => ({ ...item, status: false }));
    myState.find(each_item => each_item.id === e.target.innerText).status = true;
    setActive(myState);

  };

  return (
    <Wrapper secondary>
      {active.map((number, index) => (
        <Text
          style={number.status ? Active : inactive}
          onClick={handleActive}
          key={index}
          xlarge
          as="span"
        >
          {number.value}
        </Text>
      ))}
    </Wrapper>
  );
}
