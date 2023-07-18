const ArticlesCard = ({title, author, topic}) => {
  return (
    <div className="card">
       <h2 className="h2">{title}</h2>
    <p>Author: {author}</p>
    <p>Topic: {topic}</p>

       </div>
  )
}
export default ArticlesCard;