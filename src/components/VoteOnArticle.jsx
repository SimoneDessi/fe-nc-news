import React, { useState } from "react";
import { voteOnArticle } from "../Api";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"

const VoteOnArticle = ({ article_id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [error, setError] = useState(null);

  const handleVote = (voteType) => {
    voteOnArticle(article_id, voteType)
      .then(() => {
        if (voteType === "up") {
          setVotes((prevVotes) => prevVotes + 1);
        } else if (voteType === "down") {
          setVotes((prevVotes) => prevVotes - 1);
        }
        setError(null);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      {error && <p>{error.message}</p>}
      <p>Votes: {votes}</p>
      <button className="vote-button" onClick={() => handleVote("up")}>
      <FaThumbsUp />
      </button>
      <button className="vote-button" onClick={() => handleVote("down")}>
      <FaThumbsDown />
      </button>
    </div>
  );
};

export default VoteOnArticle;
