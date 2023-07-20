import React, { useState } from "react";
import { voteOnArticle } from "../Api";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const VoteOnArticle = ({ article_id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [error, setError] = useState(null);
  const [userVote, setUserVote] = useState(null);

  const handleVote = (voteType) => {
    if (userVote === voteType) {
      
      setUserVote(null);
      setVotes((prevVotes) => prevVotes - 1);
    } else {
     
      setUserVote(voteType);
      setVotes((prevVotes) => (voteType === "up" ? prevVotes + 1 : prevVotes - 1));
    }

    setError(null);

    voteOnArticle(article_id, voteType)
    .then(() => {
      setError(null);
    })
      
    .catch((error) => {
      setVotes(votes);
      setUserVote(userVote);

      setError(error);
    });
};

  return (
    <div>
      {error && <p>{error.message}</p>}
      <p>Votes: {votes}</p>
      <button
        className={`vote-button ${userVote === "up" ? "voted" : ""}`}
        onClick={() => handleVote("up")}
        disabled={userVote === "up"}
      >
        <FaThumbsUp />
      </button>
      <button
        className={`vote-button ${userVote === "down" ? "voted" : ""}`}
        onClick={() => handleVote("down")}
        disabled={userVote === "down"}
      >
        <FaThumbsDown />
      </button>
    </div>
  );
};

export default VoteOnArticle;
