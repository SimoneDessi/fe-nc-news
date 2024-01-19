import news from "../images/news-gif.gif";

const Home = () => {
  return (
    <>
    <h1 className="welcome-home">Welcome to...</h1>
      <div className="gif-container">
        <img src={news} alt="simo's news logo gif" className="gif-home" />
      </div>
      <div className="button"></div>
     <p className="home">
      This is a project developed over the Northcoders bootcamp</p>
    </>
  );
};

export default Home;
