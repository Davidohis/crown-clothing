import React from 'react';
import MenuItem from '../menu-item/menu-item.comonent';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          id: 2,
          linkUrl: 'shop/sneakers'
        },
        {
          title: "Black Jean Shearling",
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          id: 3,
          linkUrl: 'shop/jackets'
        },
        {
          title: "Floral Blouse",
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          id: 4,
          linkUrl: 'shop/womens'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;