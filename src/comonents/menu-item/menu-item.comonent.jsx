import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
    <div className="card-box"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
     >
     <div className="card-border">
        <img width="250" height="100" src={imageUrl} alt="John" className="card-image" />
        <p className="title">{title}</p>
        <div className="card-icon">
          <span className="span-p">4.5</span>
          <a href="/"><i className="fas fa-star"></i></a>
          <a href="/"><i className="fas fa-star"></i></a>
          <a href="/"><i className="fas fa-star"></i></a>
          <a href="/"><i className="fas fa-star"></i></a>
          <a href="/"><i className="far fa-star"></i></a>
          <span>(22,423)</span>
       </div>
        <span className="price">$12.99</span>
      <span className="price-1">$12.99</span>
      <button className="card-btn"
         onClick={() => history.push(`${match.url}${linkUrl}`)}
      > Shop Now</button>
      </div>
     </div>
);

export default withRouter(MenuItem);