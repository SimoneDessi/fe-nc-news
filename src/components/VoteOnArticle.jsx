import React, { useState } from "react";
import { voteOnArticle } from "../Api";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const VoteOnArticle = ({ article_id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [error, setError] = useState(null);

  const handleVote = (voteType) => {
    const updatedVotes = voteType === "up" ? votes + 1 : votes - 1;
    setVotes(updatedVotes);

    voteOnArticle(article_id, voteType)
      .then(() => {
        if (voteType === "up") {
          setVotes(updatedVotes);
        } else if (voteType === "down") {
          setVotes(updatedVotes);
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
