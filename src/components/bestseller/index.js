import React, {useState} from "react";
import Text from "../text";
import { ProductsTypes, Products } from "./assets/data/products";
import { BestSellerContainer } from "./styles";
import BlockThumbNail from "../thumbnails/BlockThumbNail";

const BestSellers = () => {
    const [bestSellerLink, setBestSellersLink] = useState(ProductsTypes);
    const [bestProducts, setBestProducts] = useState(Products);
    const [view, setView] = useState(8);

    const handleFilter = (value) => {
        const newProducts =
          value === "All"
            ? Products
            : Products.filter(item => item.type === value);
        setBestProducts(newProducts);

        const activeProduct = bestSellerLink.map(item => ({ ...item, active: false }));
        activeProduct.find(item => item.name === value).active = true;
        setBestSellersLink(activeProduct);
    }
    const handleViews = () => {
        setView(view+ 8)
    }
  return (
    <BestSellerContainer>
      <div className="d-flex-center">
        <Text bold ltSpacing0 ht1 large>
          BEST SELLER
        </Text>
      </div>
      <div>
        <ul className="d-flex-center">
          {bestSellerLink.map((item, i) => (
            <li
              onClick={() => handleFilter(item.name)}
              key={i}
              className={(item.active && "m5 active") || "m5"}
            >
              <Text bold ltSpacing0 xSmall>
                {item.name}
              </Text>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex-center flex-column">
        <div className="d-flex-center-wrap">
          {bestProducts.length ? (
            [...bestProducts.slice(0, view)].map(item => (
              <div className="m3" key={item.id}>
                <BlockThumbNail stock={item} />
              </div>
            ))
          ) : (
            <Text dangerColor bold ltSpacing0 large>
              Empty
            </Text>
          )}
        </div>
        {bestProducts.length > view && (
          <Text onClick={handleViews} className="active loadMore" primaryColor bold ltSpacing0 xSmall>
            Load More..
          </Text>
        )}
      </div>
    </BestSellerContainer>
  );
};

export default BestSellers;
