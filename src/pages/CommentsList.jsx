import { useState, useEffect } from "react";
import { getAllCommentsFromArticle }  from "../Api";
import { useParams } from "react-router-dom";

const CommentsList = () => {
  const { article_id } = useParams()
const [comments, setComments] = useState([]);

useEffect(() => {
  getAllCommentsFromArticle(article_id).then((commentsFromApi) => {
    setComments(commentsFromApi)
  });
}, [article_id]);

return (
  <>
  <div className="comments-container">
  <h2>Comments </h2>
  <ul>
    {comments.map((comment) => (
      <li key={comment.comment_id} className="comment-card">
        <p className="body">{comment.body}</p>
        <p className="author"> Author:{comment.author}</p>
        <p className="date">{new Date(comment.created_at).toLocaleDateString()}</p>
        <p className="votes">Votes:{comment.votes}</p>
      </li>
    ))}
  </ul>
  </div>
  </>
)

}
export default CommentsList