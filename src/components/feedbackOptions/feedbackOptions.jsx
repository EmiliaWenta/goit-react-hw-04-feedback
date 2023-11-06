import React, { useState } from 'react';
import css from './feedback.module.css';
import FeedbackOptionsItem from './feedbackOptionsItem/feedbackOptionsItem';

export default function FeedbackOptions() {
  const [options] = useState(['good', 'neutral', 'bad']);
  return (
    <div className={css.button}>
      {options.map(option => {
        return <FeedbackOptionsItem option={option} key={option} />;
      })}
    </div>
  );
}
