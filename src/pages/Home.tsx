import Background from "../components/Background"
import Title from "../components/Title"
import '../assets/CSS/styles.css'
import Navbar from "../components/Navbar"
import InfoContainer from '../components/InfoContainer'

function Home() {
  return (
    <> 
    <Background />
    <Navbar />
    <Title 
      titleText="Welcome to Bookfolio"
      className="border-double underline border-8 text-black w-2/5 animate-bounce mt-14 p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    />
     <InfoContainer
        infoText="Whether you're an avid reader, a book collector, or 
        simply someone who wants to stay organized, Bookfolio is here to simplify 
        your book catalog management and enhance your reading experience."
        className=" border-8 border-double text-black 
            mt-14 mx-auto p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      /> 
    </>
  )
};


export default Home