import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Controls({}) {
  return (
    <div className="Controls">
      <button>Перейти</button>
    </div>
  );
}

Controls.propTypes = {};

Controls.defaultProps = {};

export default React.memo(Controls);
