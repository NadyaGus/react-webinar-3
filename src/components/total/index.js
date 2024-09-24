import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Total({ totalPrice = '' }) {
  return (
    <div className="Cart-footer">
      Итого{'\u00A0'}
      <div className="Cart-total">{totalPrice}</div>
    </div>
  );
}

Total.propTypes = {
  totalPrice: PropTypes.string,
};

export default Total;
