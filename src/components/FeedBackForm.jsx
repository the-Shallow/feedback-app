import { useState , useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackForm() {
    
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const { addFeedBack, editFeedBack , updateFeedBack } = useContext(FeedBackContext);
    
    useEffect(() => {
        if (editFeedBack.edit) {
            setBtnDisabled(false);
            setText(editFeedBack.item.text);
            setRating(editFeedBack.item.rating);
        }
    },[editFeedBack])

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage("Text must be atleast 10 characters");
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value);
    } 
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length >= 10) {
            const newFeedBack = {
                text,
                rating
            }

            if (editFeedBack.edit) {
                updateFeedBack(editFeedBack.item.id, newFeedBack);
            } else {
                addFeedBack(newFeedBack);
            }

            setText('');
        } else {
            setBtnDisabled(true);
            setMessage("Text must be atleast 10 characters");
        }
    }
  return (
      <Card>
          <form onSubmit={handleSubmit}>
              <h2>How Would you rate us for our service?</h2>
              <RatingSelect select={setRating} selected={rating}/ >
              <div className="input-group">
                  <input onChange={handleTextChange} type="text" placeholder="Write Something..." value={text} />
                  <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
              </div>
          </form>

          {message && <div>{message}</div>}
    </Card>
  )
}

export default FeedBackForm