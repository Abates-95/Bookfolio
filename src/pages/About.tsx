import Background from "../components/Background"
import Navbar from "../components/Navbar"
import Title from "../components/Title"
import InfoContainer from "../components/InfoContainer"

function About() {
  return (
    <div>
        <Background />
        <Navbar />
        <Title
            titleText="About Bookfolio"
            className="border-double border-8 text-black w-2/5 animate-bounce 
            mt-14 p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        />
        <InfoContainer
        infoText="Welcome to Bookfolio, the ultimate solution for 
        avid readers and book enthusiasts! Bookfolio is a powerful
        online platform that empowers you to effortlessly manage 
        your personal book catalog. With our intuitive CRUD 
        (Create, Read, Update, Delete) functionality, 
        you can easily add, organize, and track all your 
        favorite books in one centralized location."
        className=" border-8 border-double text-black 
            mt-14 mx-auto p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        />
    </div>
  )
}

export default About