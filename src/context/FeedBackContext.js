import { useState, createContext, useEffect } from "react";

const FeedBackContext = createContext();

export const FeedBackContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [editFeedBack, setEditFeedBack] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeeback();
  }, []);

    const fetchFeeback = async () => {
        const feedback = await fetch("http://localhost:5500/feedback");

        const data = await feedback.json();

        setFeedback(data);
        setIsLoading(false);
    };

    const addFeedBack = async (newFeedBack) => {
        await fetch("http://localhost:5500/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFeedBack),
        });

        fetchFeeback();
    };

    const deleteFeedBack = async (id) => {
        if (window.confirm("Are your sure you want to delete?")) {
            await fetch(`http://localhost:5500/feedback/${id}`, {
                method:"DELETE"
            });
            fetchFeeback();
        }
    };

  const editedFeedback = (item) => {
    setEditFeedBack({ item, edit: true });
  };

    const updateFeedBack = async (id, updatedFeedback) => {
      
        await fetch(`http://localhost:5500/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedFeedback),
        });

        fetchFeeback();

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
        isLoading,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;
