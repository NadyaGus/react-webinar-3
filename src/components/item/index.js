import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';

function Item({ item, onAddItemToCart = () => {} }) {
  const onClick = () => {
    onAddItemToCart(item);
  };

  return (
    <div className={'Item'}>
      <div className="Item-code">{item.code}</div>
      <div className="Item-title">{item.title}</div>
      <div className="Item-price">
        {item.price}
        {'\u00A0'}₽
      </div>
      <div className="Item-actions">
        <button onClick={onClick}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAddItemToCart: PropTypes.func,
};

export default React.memo(Item);
