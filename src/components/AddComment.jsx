import { useState } from 'react';
import { postComment } from '../Api';

const AddCommentForm = ({ article_id }) => {
  const [username, setUserName] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
    setErrorMessage('');
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !body) {
      setErrorMessage('Please fill in all the fields.');
      return;
    }

    setIsSubmitting(true);

    postComment(article_id, { username, body })
      .then(({data}) => {
        const newComment = data.comment;

        setUserName('');
        setBody('');
        setIsSubmitting(false);
        setErrorMessage('');
      })
      .catch((error) => {
       
        setIsSubmitting(false);
        setErrorMessage('Failed to post the comment. Please try again.');
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
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Posting...' : 'Add Comment'}
      </button>
    </form>
  );
};

export default AddCommentForm;
