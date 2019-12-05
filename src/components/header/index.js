import React, { useState } from "react";
import { FaUserAlt, FaShoppingBasket} from "react-icons/fa";
import "./styles.css";
import { Head, Pricing, Links, Go, Search } from "./styles";
import {BrowserRouter as Router} from "react-router-dom"
function Header({ ...props }) {
  const [search, setSearch] = useState(false);
  let language = ["EN", "YR", "FR ", "IG"];
  let currency = ["USD", "NGN", "YEN"];
  let toggleSearch = () => {
    setSearch(!search);
  };
  return (
    <Head {...props}>
      <div className="container d-flex justify-content-between flex-wrap">
        <div className="d-flex">
          <select name="language" id="language">
            {language.map((element, key) => (
              <option key={key}>{element}</option>
            ))}
          </select>
          <select name="currency" id="currency">
            {currency.map((element, key) => (
              <option key={key}>{element}</option>
            ))}
          </select>
        </div>
        <div className="d-flex">
          
            <div className="profile">
            <Router>
            <Links to="/">
              <FaUserAlt /> My profile
            </Links>
            </Router>
          </div>
          <div className="cart">
            <Router>
            <Links to="/">
              <FaShoppingBasket /> 0 items{" "}
              <Pricing secondaryDarkColor> $0.00</Pricing>
            </Links>
            </Router>
          </div>
          
          
          <div className="search-icons cursor">
            <Search search={search} onClick={toggleSearch} />
          </div>
        </div>
      </div>

      {search && (
        <div className="container d-flex justify-content-between">
          <input
            type="text"
            className="search-input"
            placeholder="Enter Your Search here"
          />

          <Go primaryColor />
        </div>
      )}
    </Head>
  );
}

export default Header;
