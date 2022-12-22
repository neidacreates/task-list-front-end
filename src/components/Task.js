import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const classNameToggle = !props.isComplete
    ? 'tasks__item__toggle'
    : 'tasks__item__toggle--completed';
  return (
    <li className="tasks__item">
      <button
        className={classNameToggle}
        onClick={() => {
          props.strikethroughToggle(props.id);
        }}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  strikethroughToggle: PropTypes.func.isRequired,
};

export default Task;
