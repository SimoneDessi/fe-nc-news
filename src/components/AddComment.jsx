import { useState } from 'react';
import { postComment } from '../Api';

const AddCommentForm = ({ article_id }) => {
  const [username, setUserName] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
    setError(null);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !body) {
      setError('Please fill in all the fields.');
    }

    setIsSubmitting(true);
    setShowConfirmation(true);
    setError(null);

    const commentData = {
      username,
      body,
      article_id,
      created_at: new Date().toISOString(),
    };

    postComment(article_id, commentData)
      .then(() => {
        setIsSubmitting(false);
        setShowConfirmation(true);
        setUserName('');
        setBody('');
      })
      .catch((error) => {
        setIsSubmitting(false);
        setError('Failed to post the comment. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        disabled={isSubmitting}
        required
        placeholder="Username"
      />
      <textarea
        value={body}
        onChange={handleBodyChange}
        disabled={isSubmitting}
        required
        placeholder="Write your comment here..."
      />
      {error && <p>{error}</p>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Posting...' : 'Add Comment'}
      </button>
      {showConfirmation && <p>Comment posted successfully!</p>}
    </form>
  );
};

export default AddCommentForm;
