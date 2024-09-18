import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../cart-item';
import './style.css';

function Cart({
  cart = [],
  onDeleteItemFromCart = () => {},
  isOpen = false,
  toggleModal = () => {},
}) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="Cart">
      <div className="Cart-wrapper">
        <div className="Cart-header">
          <h2 className="Cart-title">Корзина</h2>
          <button onClick={toggleModal}>Закрыть</button>
        </div>
        <div className="Cart-body">
          {cart.length > 0 ? (
            cart.map(item => (
              <CartItem key={item.code} item={item} onDeleteItemFromCart={onDeleteItemFromCart} />
            ))
          ) : (
            <div className="Cart-empty">Корзина пуста</div>
          )}
        </div>
        <div className="Cart-footer">
          Итого{'\u00A0'}
          <div className="Cart-total">{totalPrice} ₽</div>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  onDeleteItemFromCart: PropTypes.func,
};

export default React.memo(Cart);
