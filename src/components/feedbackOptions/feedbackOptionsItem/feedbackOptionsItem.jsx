import { useFeedback } from 'hooks/feedbackContext';

import css from './feedbackOptionsItem.module.css';

export default function FeedbackOptionsItem({ option }) {
  const { handleIncrement } = useFeedback();
  return (
    <>
      <button
        type="button"
        name={option}
        onClick={handleIncrement}
        className={css.button__item}
      >
        {option}
      </button>
    </>
  );
}
