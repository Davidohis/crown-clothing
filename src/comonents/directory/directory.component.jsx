import React from 'react';
import MenuItem from '../menu-item/menu-item.comonent';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'David ohis',
          imageUrl: 'https://i.ibb.co/5WcWgCC/banner-1.jpg',
          id: 1,
          linkUrl: 'women'
        },
        {
          title: 'Joe smite',
          imageUrl: 'https://i.ibb.co/wdwrcp6/banner-2.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'Dave noon',
          imageUrl: 'https://i.ibb.co/m628cZ8/banner-3.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'David moon',
          imageUrl: 'https://i.ibb.co/m628cZ8/banner-3.jpg',
          id: 3,
          linkUrl: ''
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