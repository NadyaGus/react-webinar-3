import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Cart({ cart, onDeleteItemFromCart, isOpen, toggleModal }) {
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
              <div className="Cart-item" key={item.code}>
                <div className="Cart-item-title-wrapper">
                  <div className="Cart-item-code">{item.code}</div>
                  <div className="Cart-item-title">{item.title}</div>
                </div>
                <div className="Cart-item-price-wrapper">
                  <div className="Cart-item-price">
                    {item.price}
                    {'\u00A0'}₽
                  </div>
                  <div className="Cart-item-quantity">
                    {item.quantity ?? 1}
                    {'\u00A0'}шт
                  </div>
                  <div className="Cart-item-actions">
                    <button onClick={() => onDeleteItemFromCart(item.code)}>Удалить</button>
                  </div>
                </div>
              </div>
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

Cart.defaultProps = {
  cart: [],
  onDeleteItemFromCart: () => {},
};

export default React.memo(Cart);
