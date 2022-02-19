import { useContext } from "react";
import Spinner from "./shared/Spinner";
import FeedBackItem from "./FeedBackItem";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackList() {
    const { feedback ,isLoading} = useContext(FeedBackContext);
    console.log(feedback);
    if ( !isLoading && (!feedback || feedback.length === 0)) {
     return (<div>No FeedBack</div>)   
    }


    return isLoading ? <Spinner /> :
        (<div className="feedback-list">
            {feedback.map((item) => (
                <FeedBackItem key={item.id} item={item} />
            ))}
        </div>);
}


export default FeedBackList