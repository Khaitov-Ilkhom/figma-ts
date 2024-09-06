import FetchData from "../../components/fetch-data/FetchAllData.tsx";
import Navbar from "../../components/navbar/Navbar.tsx";
import Footer from "../../components/footer/Footer.tsx";
import Category from "../../components/category/Category.tsx";

const Home = () => {
  const type = "product"
  return (
      <div className="max-w-[1440px] flex justify-center items-center flex-col">
        <Navbar/>
        <FetchData type={type}/>
        <Category/>
        <FetchData/>
        <Footer/>
      </div>
  )
}
export default Home
