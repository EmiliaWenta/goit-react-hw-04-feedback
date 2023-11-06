import React from 'react';
import StatisticsItem from './statisticsItem.js/statisticsItem';

import { useFeedback } from 'hooks/feedbackContext';

export default function Statistics() {
  const { good, neutral, bad, total, positivePercentage } = useFeedback();

  return (
    <div>
      <StatisticsItem title="Good" value={good} />
      <StatisticsItem title="Neutral" value={neutral} />
      <StatisticsItem title="Bad" value={bad} />
      <StatisticsItem title="Total" value={total} />
      <StatisticsItem title="Positive Feedback" value={positivePercentage} />
    </div>
  );
}
