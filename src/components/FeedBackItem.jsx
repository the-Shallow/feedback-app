import Card from "./shared/Card";
import { FaTimes , FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackItem({ item }) {
    
    const { deleteFeedBack , editedFeedback } = useContext(FeedBackContext);

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>deleteFeedBack(item.id)} className="close">
                <FaTimes color="purple" />
            </button>

            <button onClick={()=>editedFeedback(item)} className="edit">
                <FaEdit color="pruple" />
            </button>
            <div className="text-display">{ item.text }</div>
        </Card>
    )
}

export default FeedBackItem;