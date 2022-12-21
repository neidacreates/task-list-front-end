import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  //   if (!props.isComplete) {
  //     // change class name here
  //     tasks__item__toggle--completed
  //   } else {
  //     tasks__item__toggle
  //   }
  // }
  // const togglePresence = () => {
  //   setIsPresent(!isPresent);
  // };

  return (
    <li className="tasks__item">
      <button
        className="tasks__item__toggle"
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
