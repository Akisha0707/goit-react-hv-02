import css from './Feedback.module.css';



const Feedback = () => {
  return (
    <div>
      <ul className={css.feedbackList}>
        <li className={css.feedbackGood}>Good: </li>
        <li className={css.feedbackNeutral}>Neutral: </li>
        <li className={css.feedbackBad}>Bad: </li>
        {/* <li className={css.feedbackTotal}>Total: {good + neutral + bad}</li>
        <li className={css.feedbackPositive}>Positive: {good + neutral}</li> */}
      </ul>
    </div>
  );
};

export default Feedback;
