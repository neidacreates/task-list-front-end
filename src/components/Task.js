import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  return (
    <li className="tasks__item">
      <button className="tasks__item__toggle">{props.title}</button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;
