import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map(menuItem => {
        const { title, id, img, desc, price } = menuItem;

        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h5 className='price'>${price}</h5>
              </header>
              <div className='item-text'>{desc}</div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
