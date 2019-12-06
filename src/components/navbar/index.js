import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Text from "../text";
import { Links, Store, StoreDropdown } from "./styles";
import Dropdown from "../dropdown";

function Navbar() {
  let navigations = ["IPHONE", "IPAD", "MACBOOK", "ACCESSORIES"];
  return (
    <div className="d-flex align-items-center flex-column"data-testid="navbarId">
      <Text dangerDarkerColor bold>
        BOUNCER
      </Text>
      <div className="d-flex justify-content-center flex-wrap">
        <Router>
          <Links to="/" as="button">
            HOME
          </Links>
          <Links  to="/" as="button">
            <Store>
              STORE
              <StoreDropdown>
                <Dropdown />
              </StoreDropdown>
            </Store>
          </Links>
          {navigations.map((element, key) => (
            <Links key={key} to={`/${element}`} as="button">
              {element}
            </Links>
          ))}
        </Router>
      </div>
    </div>
  );
}
export default Navbar;
