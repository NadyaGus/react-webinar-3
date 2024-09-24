import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { toLocalePrice } from '../../utils';

function CartItem({ item, itemFunction = () => {} }) {
  const onClick = () => {
    itemFunction(item);
  };

  return (
    <div className="Cart-item" key={item.code}>
      <div className="Cart-item-title-wrapper">
        <div className="Cart-item-code">{item.code}</div>
        <div className="Cart-item-title">{item.title}</div>
      </div>
      <div className="Cart-item-price-wrapper">
        <div className="Cart-item-price">{toLocalePrice(item.price)}</div>
        <div className="Cart-item-quantity">
          {item.quantity ?? 1}
          {'\u00A0'}шт
        </div>
        <div className="Cart-item-actions">
          <button onClick={onClick}>Удалить</button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  itemFunction: PropTypes.func,
};

export default React.memo(CartItem);
