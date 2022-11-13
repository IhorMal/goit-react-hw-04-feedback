import {useState } from 'react';
import {Section} from './Section/Section';
import {Statistics} from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification'
import css from './App.module.css'

export const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  function response(e) {
   const {name} = e.target;
    setReviews(prevState => ({
        ...prevState,
        [name]: prevState[name] + 1,
    }));
  }

  function countTotalFeedback () {
    return reviews.good + reviews.neutral + reviews.bad;
  };

  function countPositiveFeedbackPercentage () {
     return (Math.round((reviews.good / countTotalFeedback()) * 100));
  };

  const options = Object.keys(reviews);

  return (
  
     <div className={css.reviews}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={response} />
          {countTotalFeedback() !== 0
          ? (<Statistics
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          />)
            : (<Notification message="There is no feedback"/>) }
      </Section>
      </div>
  )
}



// export  const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   function response(e) {
    
//     switch (e.target.name) {
//       case 'good':
//         setGood(set => set + 1)
//       break;
//       case 'neutral':
//          setNeutral(set => set + 1)
//         break;
//       case 'bad':
//         setBad(set => set + 1)
//         break;
//       default:
//         break;
//     };
//   };

//   function countTotalFeedback () {
//     return good + neutral + bad;
//   };

//   function countPositiveFeedbackPercentage () {
//      return (Math.round((good / countTotalFeedback()) * 100));
//   };

//   console.log(Object.values(good))
//   const options = ['good', 'neutral', 'bad'];

//   return (
//      <div className={css.reviews}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={options} onLeaveFeedback={response} />
//           {countTotalFeedback() !== 0
//           ? (<Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={countTotalFeedback()}
//           positivePercentage={countPositiveFeedbackPercentage()}
//           />)
//             : (<Notification message="There is no feedback"/>) }
//       </Section>
//       </div>
//   )
// }





// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   response = e => {
//     console.log(e.target.name)
//     this.setState(state => ({
//       [e.target.name]: state[e.target.name] + 1,
//     }));
//   };
  
//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((total, value) => {
//       return total + value;
//     }, 0);  
//   };

//   countPositiveFeedbackPercentage = () => {
//     return (Math.round((this.state.good / this.countTotalFeedback()) * 100));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
   
//     return (
//       <div className={css.reviews}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={options} onLeaveFeedback={this.response} />
//           {this.countTotalFeedback() !== 0
//           ? (<Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//           />)
//             : (<Notification message="There is no feedback"/>) }
//         </Section>
//       </div>
//     )
//   };
// };

export default App;