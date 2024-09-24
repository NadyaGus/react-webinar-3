import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Item({ item, itemFunction = () => {} }) {
  const onClick = () => {
    itemFunction(item);
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
  itemFunction: PropTypes.func,
};

export default React.memo(Item);
