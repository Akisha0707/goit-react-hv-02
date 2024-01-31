import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback }) => {
 
   return (
     <div>
       {totalFeedback > 0 &&
         <ul className={css.feedbackList}>
           <li className={css.feedbackGood}>Good: {feedback.good}</li>
           <li className={css.feedbackNeutral}>Neutral: {feedback.neutral}</li>
           <li className={css.feedbackBad}>Bad: {feedback.bad} </li>
           <li className={css.feedbackTotal}>Total: {totalFeedback} </li>
           <li className={css.feedbackPositiv}>Positive: { Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100) }%</li>
         </ul>
       }
    </div>
  );
};

export default Feedback;
