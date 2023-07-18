const ArticlesCard = ({ title, author, topic }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>
    </div>
  );
};
export default ArticlesCard;
