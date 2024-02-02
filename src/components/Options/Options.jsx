import css from './Options.module.css';


const Options = ({handleGoodFeedback, handleNeutralFeedback, handleBadFeedback, handleResetFeedback, totalFeedback}) => {
  
  return (
    <div className={css.button}>
      <button className={css.buttonGood} type="button" onClick={handleGoodFeedback}>Good</button>
      <button className={css.buttonNeutral} type="button" onClick={handleNeutralFeedback}>Neutral</button>
      <button className={css.buttonBad} type="button" onClick={handleBadFeedback}>Bad</button>
      
      {totalFeedback > 0 &&
        <button className={css.buttonReset} type="button" onClick={handleResetFeedback}>Reset</button>
      }
        </div>
  );
};


export default Options;



// 