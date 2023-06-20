import Background from "../components/Background"
import Navbar from "../components/Navbar"
import Title from "../components/Title"
import InfoContainer from "../components/InfoContainer"
import DataTable from "../components/DataTable"

function Dashboard() {
  return (
    <>
    <Background />
    <Navbar />
    <Title
        titleText="Dashboard"
        className="border-double border-8 text-black w-2/5 animate-bounce 
        mt-14 p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    />
    <div className="flex flex-col ">
        <InfoContainer
            infoText="Here at your dashboard you are able to check your personal library
            and also manage any data such as adding or deleting new books into your library"
            className=" border-8 border-double text-black 
            mt-14 mx-auto p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        />
        <DataTable />
    </div>
    </>
  )
}

export default Dashboard