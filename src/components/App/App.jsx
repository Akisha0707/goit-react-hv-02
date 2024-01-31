import css from './App.module.css';
import { useState, useEffect } from 'react'
import Notification from '../Notification/Notification';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';



const App = () => {

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })
  console.log (setFeedback)
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    window.localStorage.setItem('feedback:', JSON.stringify(feedback))
  })

  const changeClicksGood = () => {
    setFeedback({
      ...feedback,
      good: feedback.good + 1,
    })
  }
  
  const changeClicksNeutral = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1,
   })
  }

  const changeClicksBad = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1,
    })
  }
 
  const changeClicksReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
   })
  }

 return (
    <>
     <Description />
     
     <Options
       changeClicksGood={changeClicksGood}
       changeClicksNeutral={changeClicksNeutral}
       changeClicksBad={changeClicksBad}
       changeClicksReset={changeClicksReset}
       totalFeedback={totalFeedback} />     
     
     <Notification totalFeedback={totalFeedback} />
     
     <Feedback
       feedback={feedback}
       totalFeedback={totalFeedback}/>

    </>
  );
};

export default App;
