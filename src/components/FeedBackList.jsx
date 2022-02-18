import FeedBackItem from "./FeedBackItem";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackList() {
    const { feedback } = useContext(FeedBackContext);
    console.log(feedback);
    if (!feedback || feedback.length == 0) {
     return (<div>No FeedBack</div>)   
    } 

    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedBackItem key={item.id} item={item} />
            ))}
        </div>
    )
}


export default FeedBackList