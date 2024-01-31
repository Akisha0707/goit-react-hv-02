import css from './Options.module.css';


const Options = ({changeClicksGood, changeClicksNeutral, changeClicksBad, changeClicksReset, totalFeedback}) => {
  
  return (
    <div className={css.button}>
      <button className={css.buttonGood} type="button" onClick={changeClicksGood}>Good</button>
      <button className={css.buttonNeutral} type="button" onClick={changeClicksNeutral}>Neutral</button>
      <button className={css.buttonBad} type="button" onClick={changeClicksBad}>Bad</button>
      
      {totalFeedback > 0 &&
        <button className={css.buttonReset} type="button" onClick={changeClicksReset}>Reset</button>
      }
        </div>
  );
};


export default Options;



// 