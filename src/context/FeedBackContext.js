import { useState, createContext } from "react";

const FeedBackContext = createContext();

export const FeedBackContextProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Hello World",
      rating: 5,
    },
  ]);

  const [editFeedBack, setEditFeedBack] = useState({
    item: {},
    edit: false,
  });

  const addFeedBack = (newFeedBack) => {
    newFeedBack.id = feedback.length + 1;
    setFeedback([newFeedBack, ...feedback]);
  };

  const deleteFeedBack = (id) => {
    if (window.confirm("Are your sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editedFeedback = (item) => {
    setEditFeedBack({ item, edit: true });
  };

  const updateFeedBack = (id, updatedFeedback) => {
    setFeedback(
      feedback.map((item) => {
        console.log({ ...item, ...updatedFeedback });
        return item.id === id ? { ...item, ...updatedFeedback } : item;
      })
    );

    setEditFeedBack({ item: {}, edit: false });
    console.log("hello", feedback);
  };

  return (
    <FeedBackContext.Provider
      value={{
        feedback,
        deleteFeedBack,
        addFeedBack,
        editedFeedback,
        editFeedBack,
        updateFeedBack,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;
