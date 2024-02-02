import css from './App.module.css';
import { useState, useEffect } from 'react'
import Notification from '../Notification/Notification';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';



const App = () => {
  
  const [feedback, setFeedback] = useState(() => {

    const savedClicks = window.localStorage.getItem('saved-clicks')
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    } return {};
    
  })
 
const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

useEffect(() => {
  window.localStorage.setItem('saved-clicks', JSON.stringify(feedback))
});

      
   const handleGoodFeedback = () => {
    setFeedback({
      ...feedback,
      good: feedback.good + 1,
    })
  }
  
  const handleNeutralFeedback = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1,
   })
  }

  const handleBadFeedback = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1,
    })
  }
 
  const handleResetFeedback = () => {
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
       handleGoodFeedback={handleGoodFeedback}
       handleNeutralFeedback={handleNeutralFeedback}
       handleBadFeedback={handleBadFeedback}
      handleResetFeedback={handleResetFeedback}
       totalFeedback={totalFeedback} />     
      
     {totalFeedback === 0 &&
       <Notification />
     }

     {totalFeedback > 0 &&
       <Feedback
         feedback={feedback}
       totalFeedback={totalFeedback}
     />
     }
    </>
  );
};

export default App;
