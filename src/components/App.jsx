import React, { Component } from 'react';
import Section from './section/section';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import Statistics from './statistics/statistics';
import Notification from './notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increment = key => {
    this.setState(state => ({ [key]: state[key] + 1 }));
  };

  handleClick = e => {
    this.increment(e.target.innerHTML);
  };

  countTotalFeedback = state => {
    return Object.values(state).reduce(
      (previousValue, item) => previousValue + item,
      0
    );
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const stateKeys = Object.keys(this.state);
    const total = this.countTotalFeedback(this.state);
    const percentage = this.countPositiveFeedbackPercentage(good, total);
    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions options={stateKeys} click={this.handleClick} />
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
}
