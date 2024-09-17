import React from 'react';
import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';

function Controls({ cart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="Controls">
      <div className="Controls-wrapper">
        В корзине:{' '}
        <div className="Controls-cart">
          {cart.length > 0
            ? `${cart.length}
          ${plural(cart.length, { one: 'товар', few: 'товара', many: 'товаров' })} / ${totalPrice} ₽`
            : 'пусто'}
        </div>
      </div>
      <button>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  cart: PropTypes.array,
  totalPrice: PropTypes.number,
};

Controls.defaultProps = {
  cart: [],
  totalPrice: 0,
};

export default React.memo(Controls);
