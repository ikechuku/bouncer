import React from "react";
// import Dropdown from './dropdown'
import { BrowserRouter as Router } from "react-router-dom";
import Text from "../text";
import { Links, Store, StoreDropdown } from "./styles";
import Dropdown from "../dropdown";

function Navbar() {
  let navigations = ["IPHONE", "IPAD", "MACBOOK", "ACCESSORIES"];
  return (
    <div className="d-flex align-items-center flex-column">
      <Text dangerDarkerColor bold>
        BOUNCER
      </Text>
      <div className="d-flex justify-content-center flex-wrap">
        <Router>
          <Links primaryColor to="/">
            HOME
          </Links>
          <Links primaryColor to="/">
            <Store>
              STORE
              <StoreDropdown>
                <Dropdown />
              </StoreDropdown>
            </Store>
          </Links>
          {navigations.map((element, key) => (
            <Links primaryColor key={key} to={`/${element}`}>
              {element}
            </Links>
          ))}
        </Router>
      </div>
    </div>
  );
}
export default Navbar;
