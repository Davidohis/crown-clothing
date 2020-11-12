import React from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../comonents/collection-preview/collection-preview";
import Header from "../../comonents/Home/header/header.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        <Header />
        <div className="shop-page">
          {collections.map(({ id, ...otherCollectionProps }) => (
             <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
     </div>
    );
  }
}

export default ShopPage;
