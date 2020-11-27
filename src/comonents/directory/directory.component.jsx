import React from 'react';
import MenuItem from '../menu-item/menu-item.comonent';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Brown Brim',
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'Joe smite',
          imageUrl: 'https://i.ibb.co/wdwrcp6/banner-2.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: "Women's Wear",
          imageUrl: 'https://i.ibb.co/m628cZ8/banner-3.jpg',
          id: 3,
          linkUrl: 'shop/womens'
        },
        {
          title: "Men's Wear",
          imageUrl: 'https://i.ibb.co/m628cZ8/banner-3.jpg',
          id: 3,
          linkUrl: 'shop/mens'
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