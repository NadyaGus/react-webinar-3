import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import './style.css';

function List({ list, itemFunction = () => {}, ItemComponent = Item }) {
  console.log(itemFunction);
  return (
    <div className="List">
      {list.map(item => (
        <div key={item.code} className="List-item">
          <ItemComponent item={item} itemFunction={itemFunction} />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    }),
  ).isRequired,
  itemFunction: PropTypes.func,
};

export default React.memo(List);
