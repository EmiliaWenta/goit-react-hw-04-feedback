import { createContext, useContext, useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const FeedbackContext = createContext();

export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const handleIncrement = e => {
    const clickedButton = e.target.innerHTML;

    switch (clickedButton) {
      case 'good':
        setGood(good + 1);
        setTotal(total + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        setTotal(total + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        setTotal(total + 1);
        break;
      default:
        Notify.failure(
          "We're sorry, something went wrong. Please reload this page"
        );
    }
  };

  useEffect(() => {
    setPositivePercentage(Math.round((good / total) * 100) + '%');
  }, [good, total]);

  return (
    <FeedbackContext.Provider
      value={{
        good,
        neutral,
        bad,
        total,
        positivePercentage,
        handleIncrement,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
