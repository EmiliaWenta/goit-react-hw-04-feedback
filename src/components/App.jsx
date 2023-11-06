import Section from './section/section';
import { useFeedback } from '../hooks/feedbackContext';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import Statistics from './statistics/statistics';
import Notification from './notification/notification';

export function App() {
  const { total } = useFeedback();

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions />
      </Section>
      <Section title="Statistics:">
        {total !== 0 ? (
          <Statistics />
        ) : (
          <Notification message="There is no feedback." />
        )}
      </Section>
    </>
  );
}
