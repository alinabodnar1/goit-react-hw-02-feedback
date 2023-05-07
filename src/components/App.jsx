import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
  
    countTotalFeedback = (state) => {
        return state.good + state.neutral + state.bad; 
    }

    countPositiveFeedbackPercentage = (state) => {
        return Math.floor((state.good / (state.good + state.neutral + state.bad)) * 100); 
    }
  
    leaveFeedback = (option) => {
      this.setState((prevState) => ({
        [option]: prevState[option] + 1,
      }))
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback" >
          <FeedbackOptions
            options={['good','neutral','bad']}
            onLeaveFeedback={this.leaveFeedback}
          />
         
        </Section>
        { this.state.good > 0 || this.state.neutral > 0 || this.state.neutral > 0
          ? (<Section title="Statistics" >
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.state.good ? this.countPositiveFeedbackPercentage(this.state) + "%" : 0} />
          </Section>)
          : <Notification message="There is no feedback"></Notification>
        }
      </>
    )
  }
}


export default App;