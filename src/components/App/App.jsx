import css from './App.module.css';
import {useState } from 'react'
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';



const App = () => {

  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const changeClicksGood = () => {
    setClicks({
      ...clicks,
      good: clicks.good + 1,
    })
  }
  
  const changeClicksNeutal = () => {
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1,
   })
  }
  
  const changeClicksBad = () => {
    setClicks({
      ...clicks,
      bad: clicks.bad + 1,
    })
  }

 return (
    <>
     <Description />
     <Options  />
     <Feedback value= {changeClicksGood} />
    
     <div>
        <ul className={css.options }>
         <li onClick = {changeClicksGood}> Good: {clicks.good}</li>
         <li onClick = {changeClicksNeutal}> Neutral: {clicks.neutral}</li>
         <li onClick = {changeClicksBad}> Bad: {clicks.bad}</li>
         {/* <li className={css.feedbackTotal}>Total: {good + neutral + bad}</li> */}
           {/* <li className={css.feedbackPositive}>Positive: {good + neutral}</li> */}
           </ul>
    </div>
    </>
  );
};

export default App;
