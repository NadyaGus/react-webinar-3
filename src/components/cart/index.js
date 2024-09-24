import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../cart-item';
import './style.css';
import List from '../list';

function Cart({ cart = [], onDeleteItemFromCart = () => {}, toggleModal = () => {} }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className="Cart-header">
        <h2 className="Cart-title">Корзина</h2>
        <button onClick={toggleModal}>Закрыть</button>
      </div>
      <div className="Cart-body">
        {cart.length > 0 ? (
          <List list={cart} itemFunction={onDeleteItemFromCart} ItemComponent={CartItem} />
        ) : (
          <div className="Cart-empty">Корзина пуста</div>
        )}
      </div>
      <div className="Cart-footer">
        Итого{'\u00A0'}
        <div className="Cart-total">{totalPrice} ₽</div>
      </div>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  onDeleteItemFromCart: PropTypes.func,
};

export default React.memo(Cart);
