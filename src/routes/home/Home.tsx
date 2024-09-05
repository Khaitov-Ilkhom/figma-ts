import FetchData from "../../components/fetch-data/FetchAllData.tsx";
import Navbar from "../../components/navbar/Navbar.tsx";

const Home = () => {
  return (
      <div className="max-w-[1440px] flex justify-center items-center flex-col px-6">
        <Navbar/>
        <FetchData/>

      </div>
  )
}
export default Home
