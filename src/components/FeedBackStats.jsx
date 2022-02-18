import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackStats() {
    
    const { feedback } = useContext(FeedBackContext);
    
    function avgRating(feedback) {

        if (feedback.length == 0) return 0;

        let sum = 0;
        feedback.forEach((item) => {
            sum += item.rating;
        })

        return sum / feedback.length;
    }

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating : {avgRating(feedback)}</h4>
        </div>
    )
}

export default FeedBackStats;