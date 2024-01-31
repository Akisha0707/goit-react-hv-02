import css from './Notification.module.css'

const Notification = ({ totalFeedback }) => {
    
    return (
        <div className={css.feedbackMessage}>
            { totalFeedback === 0 &&
                < p className={css.feedbackParagraph}> No feedback yet </p>}
        </div>
    )
}

export default Notification;