import css from './Options.module.css';


const Options = () => {
  
  const handleClicks = () => {
      // console.log('hello');
  }
  
  return (
      <div className={css.button}>
      <button className={css.buttonGood} onClick={handleClicks}>Good</button>
      <button className={css.buttonNeutral} onClick={handleClicks}>Neutral</button>
      <button className={css.buttonBad} onClick={handleClicks}>Bad</button>
    </div>
  );
};

export default Options;
