import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
<div className="card-box">
 <div className="card-border">
    <img width="auto" height="auto" src={imageUrl} alt="John" className="card-image" />
    <h3>The complete foundation stock trading course</h3>
    <p className="title">{name}</p>
    <div className="card-icon">
      <span className="span-p">4.5</span>
      <a href="/"><i class="fas fa-star"></i></a>
      <a href="/"><i class="fas fa-star"></i></a>
      <a href="/"><i class="fas fa-star"></i></a>
      <a href="/"><i class="fas fa-star"></i></a>
      <a href="/"><i class="far fa-star"></i></a>
      <span>(22,423)</span>
   </div>
    <span className="price">${price}</span>
    <span className="price-1">${price}</span>
    <li className="card-btn"><a href="/">Bestseller</a></li>
  </div>
 </div>
);

export default CollectionItem;
