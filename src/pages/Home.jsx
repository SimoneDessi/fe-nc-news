
import HeaderHome from "../components/Header-home"
import dog_gif from "../images/dog_gif.webp"
const Home = () => {
 
  return (
   <>
  
  <HeaderHome />
  <img className="gif-image"src={dog_gif} alt="animated gif of a dog delivering newspaper"></img>
  </>
  )
 }
 
 export default Home