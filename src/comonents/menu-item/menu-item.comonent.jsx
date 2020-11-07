import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
    <div className="card-box"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
     >
     <div className="card-border">
        <img width="240" height="155" src={imageUrl} alt="John" className="card-image" />
        <h3>The complete foundation stock trading course</h3>
        <p className="title">{title} , bloom team</p>
        <div className="card-icon">
          <span className="span-p">4.5</span>
          <a href="/"><i class="fas fa-star"></i></a>
          <a href="/"><i class="fas fa-star"></i></a>
          <a href="/"><i class="fas fa-star"></i></a>
          <a href="/"><i class="fas fa-star"></i></a>
          <a href="/"><i class="far fa-star"></i></a>
          <span>(22,423)</span>
       </div>
        <span className="price">$12.99</span>
        <span className="price-1">$12.99</span>
        <li className="card-btn"><a href="/">Bestseller</a></li>
      </div>
     </div>
);

export default withRouter(MenuItem);