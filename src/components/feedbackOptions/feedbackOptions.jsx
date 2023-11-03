import React from 'react';
import PropTypes from 'prop-types';
import css from './feedback.module.css';

export const FeedbackOptions = ({ options, click }) => {
  return (
    <div className={css.button}>
      {options.map(item => (
        <button
          className={css.button__item}
          onClick={() => click(item)}
          type="button"
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  click: PropTypes.func.isRequired,
};

export default FeedbackOptions;
