import React from 'react';
import Section from './section/section';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import Statistics from './statistics/statistics';
import Notification from './notification/notification';
import { useState } from 'react';

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const increment = key => {
    setFeedback(prev => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const countTotalFeedback = feedback => {
    return Object.values(feedback).reduce(
      (previousValue, item) => previousValue + item,
      0
    );
  };

  const countPositiveFeedbackPercentage = (good, total) => {
    const test = Math.round((good / total) * 100);
    return isNaN(test) ? 0 : test;
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback(feedback);
  const percentage = countPositiveFeedbackPercentage(good, total);
  const stateKeys = Object.keys(feedback);

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions options={stateKeys} click={increment} />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback." />
        )}
      </Section>
    </>
  );
}
